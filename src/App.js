import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faBars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faApple,
  faGoogle,
  faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import { About, Cat, Contact, Dog, DogCourse, Home, Horse, Lecture, MyMethods } from './pages';

library.add(
  faEnvelope,
  faPhone,
  faBars,
  faMapMarkerAlt,
  faLinkedinIn,
  faFacebookF,
  faApple,
  faGoogle,
  faMicrosoft
);

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
      <Route path="/lecture" exact component={Lecture} />
      <Route path="/mymethods" exact component={MyMethods} />
    </Switch>
  </Router>
);

export default App;
