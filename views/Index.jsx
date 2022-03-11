const React = require('react');
const DefaultLayout =require('./Default.jsx');

class Index extends React.Component {
    render(){
        return (
          <DefaultLayout>
             <div class="login-container">
                  <form action="/action_page.php">
                    <input type="text" placeholder="Username" name="username" id="userNamePW"></input>
                    <input type="text" placeholder="Password" name="psw" id="userNamePW"></input>
                    <button type="submit">Login</button>
                  </form>
              </div>         

            <div class='container-fluid'>
                  <img src="https://i.imgur.com/b54Umk8.png?1" width="100%"></img>
            </div>

            <div class='container-fluid'>
                  <nav id="nav"> 
                      <a href=''>CREATE ACCOUNT</a>
                      <a href='/MyBrews'>MY BREW BANK</a>
                      <a href='/Show'>VISIT BREW BANK</a>
                      <a href='/New'>ADD NEW BREW</a>
                      <img id='icon' src="https://i.imgur.com/4CDpKuh.png"/>
                      <img id='icon' src='https://i.imgur.com/DF9UDYc.png'/>
                  </nav>
            </div>

            <div class='container'>
                  <div class='col'>
                    <img class="about" src="https://i.imgur.com/vGiGFQI.png"></img> 
                  </div>

                  <div class='col' id='feature'>
                    <img src='https://i.imgur.com/qNpcqFW.png' /><br/>
                    <img id="brewPic" src="https://i.imgur.com/sywgAD8.png" />

                  </div>
            </div>


           </DefaultLayout>
        )
    }
    };


module.exports = Index;