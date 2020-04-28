import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './app/Header';

// import '../styles/index.css';

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Header />
                    <h1>Hello World!</h1>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;