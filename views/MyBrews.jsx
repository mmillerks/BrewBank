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
                    <ul>
                      <li><a href="/Index">HOME</a></li>
                      <li><a href="/Show">VISIT BREW BANK</a></li>
                      <li><a href='/New'>CREATE NEW BREW</a></li>
                      <li><img id='icon' src="https://i.imgur.com/4CDpKuh.png"/></li>
                      <li><img id='icon' src='https://i.imgur.com/DF9UDYc.png'/></li>
                    </ul>
                  </nav>
            </div>

               


            <div>
              <body id='myBrews'>
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