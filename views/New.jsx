const React = require('react');
const DefaultLayout =require('./Default.jsx');


class New extends React.Component {
    render(){
        return(
        <DefaultLayout>
        <div>
            <img src='https://i.imgur.com/a8Pt5wT.png' width='100%'></img>
           
            <div class='container-fluid'>
                  <nav id="navBar"> 
                    <ul>
                      <li><a href="/Index">HOME</a></li>
                      <li><a href='/Show'>VISIT BREW BANK</a></li>
                    </ul>
                  </nav>
            </div>    
           
            <form action="/coffee" method="POST">
                <div class=''>
                     <label class='label'>Name of Shop:</label><br/> 
                     <input name="coffee shop" type="text"/><br/>
                </div>

                <div class=''>
                    <label class='label'>City:</label><br/>
                    <input name="location" type="text"/><br/>

                    <label class='label'>State:</label><br/>
                    <input name="location" type="text"/><br/>

                </div>
                
                <div class=''>
                <label class='label'>Best Drink:</label><br/>
                <input name="drink name" type="text"/><br/>
                </div>

                <div class=''>
                <label class='label'>Upload Photo:</label><br/>
                <input name="photo" type="image"/><br/>
                </div>
                
                <br/>

                <div>
                <input type="submit" value="Create A Brew"/>
                </div>
            </form>

            <br/>

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