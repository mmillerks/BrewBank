const React = require('react');

class New extends React.Component {
    render(){
        return(
        <div>
            <img src='https://i.imgur.com/a8Pt5wT.png' width='1200px'></img>
           
            <nav>
            <a href="/coffee/new">Back to Coffee Index Page</a>
            </nav>
           
           
            <form action="/coffee" method="POST">
                Name of Shop: <input name="coffee shop" type="text"/><br/>
                Location: <input name="location" type="text"/><br/>
                Best Drink: <input name="drink name" type="text"/><br/>
                <input type="submit" value="Create A Brew"/>
            </form>
        </div>
        )
    }
}

module.exports = New;