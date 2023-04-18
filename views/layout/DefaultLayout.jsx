const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <title>PokemonApp</title>
        <link rel="stylesheet" href="/styles.css" />

        <nav>
          <a href="/">Pokedex</a>
          <a href="/teams/show">View Teams</a>
          <a href="/trainers/show">View Trainer's</a>
          <a href="/about">About Me</a>
        </nav>
        <div className="" />
        <div className="" />
        <div className="" />
        <div className="" />
        <div className="" />
      </div>
    );
  }
}

module.exports = DefaultLayout;
