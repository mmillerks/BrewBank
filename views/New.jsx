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
                Name of Shop: <input name="coffee shop" type="text"/><br/>
                Location: <input name="location" type="text"/><br/>
                Best Drink: <input name="drink name" type="text"/><br/>
                <input type="submit" value="Create A Brew"/>
            </form>
        </div>
        </DefaultLayout>
        )
    }
}

module.exports = New;