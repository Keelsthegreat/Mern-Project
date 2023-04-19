const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

function Home() {
  return (
      <DefaultLayout>
    <div className="homepage">
            <h1 className = "welcome">Welcome to my Pokemon APP!</h1>
            <img className="homePic" src="https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg"></img>
    </div>
        </DefaultLayout>
  );
}

module.exports = Home;