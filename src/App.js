import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faBars, faMapMarkerAlt, faInfoCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faApple,
  faGoogle,
  faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import {
  About, 
  Cat, 
  Contact, 
  Dog, 
  DogCourse, DogPuppy, DogContinued, DogCool, DogRecall, DogTricks, DogSummer,
  Home, 
  Horse, 
  Lecture, 
  MyMethods,
  Salespage
} from './pages';


library.add(
  faEnvelope,
  faPhone,
  faBars,
  faMapMarkerAlt,
  faLinkedinIn,
  faFacebookF,
  faApple,
  faGoogle,
  faMicrosoft,
  faInfoCircle,
  faChevronRight
);

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dyreadfaerdskonsulent" exact component={About} />
      <Route path="/kattetraening" exact component={Cat} />
      <Route path="/kontakt" exact component={Contact} />
      <Route path="/hundetraening" exact component={Dog} />
      <Route path="/hundehold" exact component={DogCourse} />
      <Route
        path="/hundehold"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`} component={DogCourse} exact />
            <Route path={`${url}/hvalpehold`} component={DogPuppy} />
            <Route path={`${url}/hvalpfortsat`} component={DogContinued} />
            <Route path={`${url}/coolhold`} component={DogCool} />
            <Route path={`${url}/indkald`} component={DogRecall} />
            <Route path={`${url}/sommerhund`} component={DogSummer} />
            <Route path={`${url}/tricks`} component={DogTricks} />
          </>
        )}
      />
      <Route path="/hestetraening" exact component={Horse} />
      <Route path="/foredrag" exact component={Lecture} />
      <Route path="/minemetoder" exact component={MyMethods} />
      <Route path="/salgsside" exact component={Salespage} />
    </Switch>
  </Router>
);

export default App;
