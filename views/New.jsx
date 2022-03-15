const React = require('react');
const DefaultLayout =require('./Default.jsx');


class New extends React.Component {
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
            <img src='https://i.imgur.com/a8Pt5wT.png' width='100%'></img>
           
            <div class='container-fluid'>
                  <nav id="navBar"> 
                      <a href="/Index">HOME</a>
                      <a href='/Login'>CREATE ACCOUNT</a>
                      <a href='/MyBrews'>MY BREW BANK</a>
                      <a href='/Show'>VISIT BREW BANK</a>
                      <img id='icon' src="https://i.imgur.com/4CDpKuh.png"/>
                      <img id='icon' src='https://i.imgur.com/DF9UDYc.png'/>
                  </nav>
            </div>

            <div id="instructions">
                <h3>You must create an account and be logged in to add a brew.</h3>
            </div>
            
           <div id="newCoffee">
           <form action="/Coffee" method="POST">
                    <div>
                        <input name="store" type="text" placeholder='NAME OF COFFEE SHOP'/><br/>
                        <br/>
                        <input name="city" type="text" placeholder='CITY'/><br/>
                        <br/>
                        <input name="state" type="text" placeholder="STATE"/><br/>
                        <br/>
                        <input name="bestDrink" type="text" placeholder="BEST DRINK"/><br/>
                        <br/>
                        {/* <label>ADD IMAGE</label>
                        <input type="file" />
                        <input type ="submit" value="Upload Image" /><br/>

                        <br/> */}

                        <input type="submit"/>

                    </div>

                </form>

            </div>

            <div id="carouselSlides" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    {/* <div class="carousel-item active">
                    <img class="d-block w-100" src="https://i.imgur.com/cJLPYb7.png" alt="First slide" />
                    </div> */}

                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://i.imgur.com/hIYMX9B.png" width='100%' alt="Second slide" />
                    </div>
                </div>
            </div>

        </div>
        </DefaultLayout>
        )
    }
}

module.exports = New;