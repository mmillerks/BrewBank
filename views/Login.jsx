const React = require('react');
const DefaultLayout =require('./Default.jsx');


class Login extends React.Component {
    render(){
        return(
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
            <img src='https://i.imgur.com/i4pAEEH.png' width='100%'></img>
           
            <div class='container-fluid'>
                  <nav id="navBar"> 
                      <a href="/Index">HOME</a>
                      <a href='/MyBrews'>MY BREW BANK</a>
                      <a href='/Show'>VISIT BREW BANK</a>
                      <a href='/New'>ADD NEW BREW</a>
                      <img id='icon' src="https://i.imgur.com/4CDpKuh.png"/>
                      <img id='icon' src='https://i.imgur.com/DF9UDYc.png'/>
                  </nav>
            </div>
        </div>

        <br/>

        <div>
                <form action="/user/login" method="post">
                <fieldset>
                    <legend>Create User Login</legend>
                    <label
                    >USERNAME: <input type="text" name="username" required />
                    </label>
                    <br/>
                    <label
                    >PASSWORD: <input type="password" name="password" required />
                    </label>
                    <br/>
                    <input type="submit" value="Login" />
                </fieldset>
                </form>
        </div>

        </DefaultLayout>

        )
    }
};

module.exports = Login;