import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';

import BlogDetails from './components/BlogDetails';
import ContactPage from './components/ContactPage';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/details" component={BlogDetails} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
