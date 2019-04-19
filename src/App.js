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
      <Route path="/dyreadfaerdskonsulent" exact component={About} />
      <Route path="/kattetraening" exact component={Cat} />
      <Route path="/kontakt" exact component={Contact} />
      <Route path="/hundetraening" exact component={Dog} />
      <Route path="/hundehold" exact component={DogCourse} />
      <Route path="/" exact component={Home} />
      <Route path="/hestetraening" exact component={Horse} />
      <Route path="/foredrag" exact component={Lecture} />
      <Route path="/minemetoder" exact component={MyMethods} />
    </Switch>
  </Router>
);

export default App;
