const React = require('react');
const DefaultLayout =require('./Default.jsx');

class Index extends React.Component {
    render(){
        return (
          <DefaultLayout>
                    
            <div class='container-fluid'>
                  <img src="https://i.imgur.com/b54Umk8.png?1" width="100%"></img>
            </div>

            <div class='container-fluid'>
                  <nav id="navBar"> 
                    <ul>
                      <li><a href=''>LOG IN </a></li>
                      <li><a href=''>MY BREW BANK</a></li>
                      <li><a href='/Show'>VISIT BREW BANK</a></li>
                      <li><a href='/New'>ADD NEW BREW</a></li>
                      <li><img id='icon' src="https://i.imgur.com/4CDpKuh.png"/></li>
                      <li><img id='icon' src='https://i.imgur.com/DF9UDYc.png'/></li>
                    </ul>
                  </nav>
            </div>

            <div class='container'>
                  <div class='col'>
                    <img class="about" src="https://i.imgur.com/vGiGFQI.png"></img> 
                  </div>

                  <div class='col' id='feature'>
                    <img src='https://i.imgur.com/qNpcqFW.png' /><br/>
                    <img id="brewPic" src="https://i.imgur.com/sywgAD8.png" />

                  </div>
            </div>


           </DefaultLayout>
        )
    }
    };


module.exports = Index;