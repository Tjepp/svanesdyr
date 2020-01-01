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
  DogCourse, DogPuppy, DogContinued, DogCool, DogRecall, DogTricks,
  Home, 
  Horse, 
  Lecture, 
  MyMethods, 
  OnlineCourse, OnlineCat, OnlineConditions, OnlineDog, OnlinePartner 
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
            <Route path={`${url}/tricks`} component={DogTricks} />
          </>
        )}
      />
      <Route path="/hestetraening" exact component={Horse} />
      <Route path="/foredrag" exact component={Lecture} />
      <Route path="/minemetoder" exact component={MyMethods} />
      <Route path="/onlinekurser" exact component={OnlineCourse} />
      <Route
        path="/onlinekurser"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`} component={OnlineCourse} exact />
            <Route path={`${url}/hundekurser`} component={OnlineDog} />
            <Route path={`${url}/kattekurser`} component={OnlineCat} />
            <Route path={`${url}/samarbejdspartner`} component={OnlinePartner} />
            <Route path={`${url}/handelsbetingelser`} component={OnlineConditions} />
          </>
        )}
        />
    </Switch>
  </Router>
);

export default App;
