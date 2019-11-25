import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import SearchForm from './components/SearchForm.js'

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>

        <Route path="/">
        <h1>
          Metadata Matcher
        </h1>
        <p>
          Just type in as many details as you can to search for a recording...
        </p>
        <p>
          If you include the ISRC you'll get an exact match, otherwise we'll do our best!
        </p>

        <SearchForm />
        </Route>
       </Switch>
      </Router> 

      
    </div>
  );
}

export default App;
