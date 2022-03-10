const React = require('react');
const DefaultLayout =require('./Default.jsx');


class Show extends React.Component {
  render(){
      const coffee = this.props.coffee;
      return (
          <DefaultLayout>
            <div>
                <img src='https://i.imgur.com/whloD0w.png' width='100%'></img>
            </div>

            <div class='container-fluid'>
                  <nav id="navBar"> 
                    <ul>
                      <li><a href="/Index">HOME</a></li>
                      <li><a href='/New'>CREATE NEW BREW</a></li>
                      <li>SEARCH</li>
                      <li><img id='icon' src="https://i.imgur.com/4CDpKuh.png"/></li>
                      <li><img id='icon' src='https://i.imgur.com/DF9UDYc.png'/></li>
                    </ul>
                  </nav>
            </div>    
          </DefaultLayout>
      );  
  }
}

module.exports = Show;
