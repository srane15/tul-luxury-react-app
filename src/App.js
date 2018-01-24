import React, {
    Component
} from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

class App extends Component {
    render() {
        return ( 
          <div className = "App">
            <header className = "App-header">
              <img src = "https://assets.tatacliq.com/medias/sys_master/images/11218394972190.png" className = "" alt = "logo" />
              <div className="pull-right">
                <MuiThemeProvider>
                  <IconButton tooltip="Search">
                    <FontIcon className="material-icons" >&#xE8B6;</FontIcon>
                  </IconButton>
                  
                  <IconButton tooltip="Login">
                    <FontIcon className="material-icons">&#xE8A6;</FontIcon>
                  </IconButton>
                  
                  <IconButton tooltip="Cart">
                    <FontIcon className="material-icons">&#xE8CB;</FontIcon>
                  </IconButton>
                </MuiThemeProvider>
              </div>
            </header> 

          </div>
          
          
        );
    }
}

export default App;