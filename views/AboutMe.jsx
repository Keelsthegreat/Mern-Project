const React = require("react");
const DefaultLayout = require("./layout/DefaultLayout");

function AboutMe() {
  return (
      <DefaultLayout>
    <div className="aboutList  ">

      <h1>About Me</h1>
      <img src="https://avatars.githubusercontent.com/u/107443714?v=4"></img>
      <p className="git"></p>
      <p className="git">Here is my info below</p>
      <p className="git">Email: akili.inniss@gmail.com </p>
      <a
        href ="https://github.com/Keelsthegreat"
        target="_blank"
        className="git"
        >
        GitHub
      </a>{" "}
      <br />
      <a
        href ="https://www.linkedin.com/in/akili-inniss-778611265/"
        target="_blank"
        className="git"
        >
        LinkedIn
      </a>
    </div>
        </DefaultLayout>
  );
}

module.exports = AboutMe;
