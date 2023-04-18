const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

function AboutMe() {
  return (
    <div className="aboutList">
      <DefaultLayout />
      <h6>About Me</h6>
      <p className="para"></p>
      <p className="para">Here is my info below</p>
      <p className="para">Email: akili.inniss@gmail.com </p>
      <a
        href="https://github.com/Keelsthegreat"
        target="_blank"
        className="git"
      >
        GitHub
      </a>{" "}
      <br />
      <a
        href="https://www.linkedin.com/in/akili-inniss-778611265/"
        target="_blank"
        className="git"
      >
        LinkedIn
      </a>
    </div>
  );
}

module.exports = AboutMe;
