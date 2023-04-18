const express = require("express");
const methodOverride = require("method-override");
const pokemonRoutes = require("./routes/pokemon");
const trainerRoutes = require("./routes/trainer");
const mongoConfig = require("./config");
const teamRoutes = require("./routes/team");
const aboutMe = require("./routes/aboutme");
// const cors = require("cors");
// const mongoose = require("mongoose");

require("dotenv").config();
mongoConfig();

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
console.log("a");
app.engine("jsx", require("express-react-views").createEngine());
console.log("b");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use(cors());
// app.use(express.static(__dirname + "./public"));
// app.disable("etag");

//this app.use works just like cors because cors and express react views conflicts
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", pokemonRoutes);
app.use("/trainers", trainerRoutes);
app.use("/teams", teamRoutes);
app.use("/about", aboutMe);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});
