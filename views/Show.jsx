const React = require('react');
const DefaultLayout =require('./Default.jsx');


class Show extends React.Component {
  render(){
      const coffee = this.props.coffee;
      return (
          <DefaultLayout>
            <div>
                <img src='https://i.imgur.com/whloD0w.png' width='100%'></img>
            </div>

            <div class='container-fluid'>
                  <nav id="navBar"> 
                    <ul>
                      <li><a href="/Index">HOME</a></li>
                      <li><a href='/New'>CREATE NEW BREW</a></li>
                      <li><button type="submit">SEARCH</button></li>
                      <li><img id='icon' src="https://i.imgur.com/4CDpKuh.png"/></li>
                      <li><img id='icon' src='https://i.imgur.com/DF9UDYc.png'/></li>
                    </ul>
                  </nav>
            </div>

            <div>
                <h1>Album Title</h1>
            </div>

            <br/>

            {/* <div>
                {
                    coffee.map((coffee) => (
                        <article>
                            <a href={`/coffee/${coffee._id}`}>
                                <h2>
                                    {coffee.store}
                                </h2>
                            </a>
                        </article>
                    ))
                };
            </div> */}

            <div id="brewBody"  class="album py-5 bg-light">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <div class="card shadow-sm">

                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" 
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>                        
                            
                                <div class="card-body">
                                <p class="card-text">Insert data from Mongoose</p>
                                <div class="d-flex justify-content-between align-items-center">
                                
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                
                                </div>
                                </div>
                            </div>
                            <br/>

                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" 
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>                        
                            </div>
                            <br/>

                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" 
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                            <br/>

                            

                        </div>
                    </div> 
                </div>     
            </div>    
          </DefaultLayout>
      );  
  }
}

module.exports = Show;
