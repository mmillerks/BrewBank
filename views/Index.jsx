const React = require('react');
const DefaultLayout =require('./Default.jsx');

class Index extends React.Component {
    render(){
        return (
          <DefaultLayout>
            <div>
                  <img src="https://i.imgur.com/b54Umk8.png" width="1200px"></img>
                  
                  <nav id="navBar"> 
                    <ul>
                      <li>LOG IN</li>
                      <li><a href='#Show'>BREW BANK</a></li>
                      <li><a href='#New'>CREATE NEW BREW</a></li>

                    </ul>
                  </nav>
                  
                  <img src="https://i.imgur.com/XfMkuvb.png"></img>

                  <h1>Featured Brew</h1>
            </div>
           </DefaultLayout>
        )
    }
    };


module.exports = Index;