const React = require('react')

class Show extends React.Component {
  render(){
      const coffee = this.props.coffee;
      return (
          <div>
              <h1>Welcome to Brew Bank</h1>
          </div>
      );  
  }
}

module.exports = Show;
