const React = require('react');
const DefaultLayout =require('./Default.jsx');


class Brews extends React.Component {
  render(){
      return (
          <DefaultLayout>
            <div>
                <img src='https://i.imgur.com/fLeuCTT.png' width='100%'></img>
            </div>

            <div class='container-fluid'>
                  <nav id="navBar"> 
                    <ul>
                      <li><a href="/Index">HOME</a></li>
                      <li><a href="/Show">VISIT BREW BANK</a></li>
                      <li><a href='/New'>CREATE NEW BREW</a></li>
                      <li><img id='icon' src="https://i.imgur.com/4CDpKuh.png"/></li>
                      <li><img id='icon' src='https://i.imgur.com/DF9UDYc.png'/></li>
                    </ul>
                  </nav>
            </div>
            </DefaultLayout>
        )
    }
};

module.exports = Brews;