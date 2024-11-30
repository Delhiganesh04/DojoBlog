import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
       <h1>Dojo Blog</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
