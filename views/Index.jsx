const React = require('react');
const DefaultLayout =require('./Default.jsx');

class Index extends React.Component {
    render(){
        return (
          <DefaultLayout>
                    
            <div class='container-fluid'>
                  <img src="https://i.imgur.com/b54Umk8.png" width="100%"></img>
            </div>

            <div class='container-fluid'>
                  <nav id="navBar"> 
                    <ul>
                      <li><a href='#Modal'>LOG IN </a></li>
                      <li><a href='/Show'>VISIT BREW BANK</a></li>
                      <li><a href='/New'>CREATE NEW BREW</a></li>
                    </ul>
                  </nav>
            </div>

            <div class='container'>
              <div class='col'>
                <img class="about" src="https://i.imgur.com/vGiGFQI.png"></img> 
              </div>
            </div>

           </DefaultLayout>
        )
    }
    };


module.exports = Index;