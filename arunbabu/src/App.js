import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CssBaseline from "@mui/material/CssBaseline";
import Main from './pages/Main';
import { Styles } from './Styles';

function App() {
  const classes = Styles()
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
          <div className={classes.root}>
            <Main className={classes.content}/>
          </div>
        </LocalizationProvider>
    </Router>
  );
}

export default App;
