const React = require('react');
const DefaultLayout =require('./Default.jsx');


class Brews extends React.Component {
  render(){
      return (
          <DefaultLayout>
            <div class="login-container">
                  <form action="/action_page.php">
                    <input type="text" placeholder="Username" name="username" id="userNamePW"></input>
                    <input type="text" placeholder="Password" name="psw" id="userNamePW"></input>
                    <button type="submit" id="log">LOGIN</button>
                    <button type="submit" id="log">LOGOUT</button>
                    {/* <a href="/user/logout"><button>Logout</button></a> */}
                  </form>
              </div>      
            
            <div>
                <img src='https://i.imgur.com/fLeuCTT.png' width='100%'></img>
            </div>

            <div class='container-fluid'>
                  <nav id="navBar"> 
                      <a href="/Index">HOME</a>
                      <a href='/Login'>CREATE ACCOUNT</a>
                      <a href='/Show'>VISIT BREW BANK</a>
                      <a href='/New'>ADD NEW BREW</a>
                        <div id='push'>
                          <img id='icon' src="https://i.imgur.com/4CDpKuh.png"/>
                          <img id='icon' src='https://i.imgur.com/DF9UDYc.png'/>
                        </div>
                  </nav>
            </div>

            <div>
              <body>
              <div>
                <h1>Album Title</h1>
            </div>
              </body>
            </div>
            </DefaultLayout>
        )
    }
};

module.exports = Brews;