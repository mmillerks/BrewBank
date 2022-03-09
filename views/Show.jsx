const React = require('react')

class Show extends React.Component {
  render(){
      const coffee = this.props.coffee;
      return (
          <div>
              <img src='https://i.imgur.com/whloD0w.png' width='1200px'></img>
          </div>
      );  
  }
}

module.exports = Show;
