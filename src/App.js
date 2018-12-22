import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Cat from './pages/Cat';
import Contact from './pages/Contact';
import Dog from './pages/Dog';
import DogCourse from './pages/DogCourse';
import Home from './pages/Home';
import Horse from './pages/Horse';
import MyMethods from './pages/MyMethods';

const App = () => (
  <Router>
    <Switch>
      <Route path="/about" exact component={About} />
      <Route path="/cat" exact component={Cat} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/dog" exact component={Dog} />
      <Route path="/dogcourse" exact component={DogCourse} />
      <Route path="/" exact component={Home} />
      <Route path="/horse" exact component={Horse} />
      <Route path="/mymethods" exact component={MyMethods} />
    </Switch>
  </Router>
);

export default App;
