const React = require('react');
const DefaultLayout =require('./Default.jsx');


class Show extends React.Component {
  render(){
      const coffee = this.props.coffee;
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
                <img src='https://i.imgur.com/whloD0w.png' width='100%'></img>
            </div>

            <div class='container-fluid'>
                  <nav id="navBar"> 
                      <a href="/Index">HOME</a>
                      <a href='/Login'>CREATE ACCOUNT</a>
                      {/* <a href='/MyBrews'>MY BREW BANK</a> */}
                      <a href='/New'>CREATE NEW BREW</a>
                      <img id='icon' src="https://i.imgur.com/4CDpKuh.png"/>
                      <img id='icon' src='https://i.imgur.com/DF9UDYc.png'/>
                  </nav>
            </div>

            <div>
                <h1>Album Title</h1>
            </div>

            <br/>

            {/* <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://i.imgur.com/TiULKnF.png?2" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div> */}
            

            <div id="brews">
                    {
                        coffee.map((coffee, i) => (
                            <article>
                                {/* <img src='https://i.imgur.com/TiULKnF.png?1' width='100%' /><br/> */}

                                <a href={`/coffee/${coffee._id}`}>
                                    <h2>COFFEE SHOP: {coffee.store}</h2><br/>                            
                                    Location: {coffee.city}, {coffee.state}<br/>     
                                    Best Drink: {coffee.bestDrink}<br/> 
                                    <a href='' class="btn btn-primary">EDIT</a>
                                    <a href='' class="btn btn-primary">DELETE</a>
                                    <br/>    
                                </a>                            
                            </article>
                            ))
                    };
            </div>
                            
            <br/>
    
          </DefaultLayout>
      );  
  }
}

module.exports = Show;
