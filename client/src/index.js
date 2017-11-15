import './index.css';
//import registerServiceWorker from './registerServiceWorker.js';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App/App';
import React from 'react';
import ReactDOM from 'react-dom';

//Mui Theme settings
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {deepPurple500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';




const muiTheme = getMuiTheme({
  palette: {
    textColor: deepPurple500,
  },
  appBar: {
    height: 80,
  },
});

const Index = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
)

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);

  