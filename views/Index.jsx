const React = require('react');
const DefaultLayout =require('../Default.jsx');

class Index extends React.Component {
    render (){
        const { fruits }  = this.props;
        return(
            <DefaultLayout>
                <div>
                    {
                    coffee.map((coffee) => (
                        <article>
                        <a href={`/models/${coffee._id }`}>
                            <h2>
                            {coffee.name}
                            </h2>
                        </a>
                        </article>
                    ))
                    }
                </div>
                <div>
                    <a href="/coffee/New"><button>Create A New Entry</button></a>
                </div>
            </DefaultLayout>
        )}
    };

module.exports = Index;