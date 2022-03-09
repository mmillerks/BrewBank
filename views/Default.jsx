const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        const { thoughts } = this.props
        return(
            <html lang='en'>
                <head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='X-UA-Compatible' contend='IE-edge'/>
                    <meta name='viewport' content='width=device-width, initial scale=1.0'/>
                    <link rel='stylesheet' href='/css/style.css' />
                </head>
                <body>
                    <header>

                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout