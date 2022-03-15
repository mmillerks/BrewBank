const React = require('react');
const DefaultLayout =require('./Default.jsx');


class Edit extends React.Component {
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
            <img src='https://i.imgur.com/DxzAOA3.png' width='100%'></img>
           
            <div class='container-fluid'>
                  <nav id="navBar"> 
                      <a href="/Index">HOME</a>
                      <a href='/Login'>CREATE ACCOUNT</a>
                      <a href='/Show'>VISIT BREW BANK</a>
                      <img id='icon' src="https://i.imgur.com/4CDpKuh.png"/>
                  </nav>
            </div>

            <div id="instructions">
                <h3>Edit this brew by completing the form below. Click button to delete brew.</h3>
            </div>
            
           <div id="newCoffee">
            <form action={`/coffee/${this.props.coffee._id}?_method=PUT`} method="POST">
                    <div>
                        <input name="store" type="text" defaultValue={this.props.coffee.store}/><br/>
                        <br/>
                        <input name="city" type="text" defaultValue={this.props.coffee.city}/><br/>
                        <br/>
                        <input name="state" type="text" defaultValue={this.props.coffee.state}/><br/>
                        <br/>
                        <input name="bestDrink" type="text" defaultValue={this.props.coffee.bestDrink}/><br/>
                        <br/>
                        
                        {/* <label>ADD IMAGE</label>
                        <input type="file" />
                        <input type ="submit" value="Upload Image" /><br/>

                        <br/> */}

                        <input type="submit"/>

                    </div>

                </form>

            </div>

            <div>

                    <div>
                        {/* <button onclick="this.props.deleteItem"> */}
                    </div>
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

module.exports = Edit;