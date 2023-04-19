const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
      <head>
          <title>{this.props.name}</title>
          <link rel= "stylesheet" href = "/styles.css"/>
      
      </head>
      <body className = "body">

        <nav className = 'navbar'>
          <a href = "/">Home</a>
          <a href="/pokemon">Pokedex</a>
          <a href="/teams/show">View Teams</a>
          <a href="/trainers/show">View Trainer's</a>
          <a href = "/pokemoncreate/show">View Your Pokemon</a>
          <a href="/about">About Me</a>
          
        </nav>
       
        {this.props.children}
      </body>
  </html>
)
}
}
module.exports = DefaultLayout;
