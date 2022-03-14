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
            </div>

            <br/>
            

            <div id="brews">
                    {
                        coffee.map((coffee, i) => (
                            <div class='grid-container'>
                                <div class='card'>
                                    <article>
                                    <img src='https://i.imgur.com/TiULKnF.png?1' width='100%' /><br/>

                                    <a href={`/coffee/${coffee._id}`}>
                                        <h2> {coffee.store}</h2>                        
                                        LOCATION: {coffee.city}, {coffee.state}<br/>     
                                        BEST DRINK: {coffee.bestDrink}<br/> 
                                        <a href='/Edit' class="btn btn-primary">EDIT</a>
                                        <a href='' class="btn btn-primary">DELETE</a>
                                        <br/>    
                                    </a> 
                                    </article>  
                                    <br/>                         
                                </div>
                            </div>
                        ))};
            </div>
                            
            <br/>
    
          </DefaultLayout>
      );  
  }
}

module.exports = Show;
