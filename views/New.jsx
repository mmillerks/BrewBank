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
           
           <div id="newCoffee">
                <form action="/coffee" method="POST">
                    <div>
                        <input name="coffee shop" type="text" placeholder='NAME OF COFFEE SHOP'/><br/>
                        <br/>
                        <input name="location" type="text" placeholder='CITY'/><br/>
                        <br/>
                        <input name="location" type="text" placeholder="STATE"/><br/>
                        <br/>
                        <input name="location" type="text" placeholder="BEST DRINK"/><br/>
                        <br/>
                        {/* <label>ADD IMAGE</label>
                        <input type="file" />
                        <input type ="submit" value="Upload Image" /><br/>

                        <br/> */}

                        <input type="submit"/>

                    </div>

                </form>

            </div>

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