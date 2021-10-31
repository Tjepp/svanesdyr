import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faPhone,
  faBars,
  faMapMarkerAlt,
  faInfoCircle,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faApple,
  faGoogle,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import {
  About,
  Cat,
  Contact,
  Dog,
  DogConsultPuppy,
  DogCourse,
  DogNailClip,
  DogPuppy,
  DogContinued,
  DogCool,
  DogCoolContinued,
  DogRecall,
  DogEmpower,
  DogSummer,
  DogCoolFriend,
  DogNoseWork,
  Home,
  Horse,
  Lecture,
  MyMethods,
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
  faChevronRight,
  faTimes
);

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dyreadfaerdskonsulent" exact component={About} />
      <Route path="/kattetraening" exact component={Cat} />
      <Route path="/kontakt" exact component={Contact} />
      <Route path="/hundetraening" exact component={Dog} />
      <Route path="/hvalpevisit" exact component={DogConsultPuppy} />
      <Route path="/hundehold" exact component={DogCourse} />
      <Route
        path="/hundehold"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`} component={DogCourse} exact />
            <Route path={`${url}/hvalpehold`} component={DogPuppy} />
            <Route path={`${url}/hvalpfortsat`} component={DogContinued} />
            <Route path={`${url}/coolhold`} component={DogCool} />
            <Route path={`${url}/fortsatcool`} component={DogCoolContinued} />
            <Route path={`${url}/venligvovse`} component={DogCoolFriend} />
            <Route path={`${url}/indkald`} component={DogRecall} />
            <Route path={`${url}/negleklipkursus`} component={DogNailClip} />
            <Route path={`${url}/sommerhund`} component={DogSummer} />
            <Route path={`${url}/empowerment`} component={DogEmpower} />
            <Route path={`${url}/noseworkintro`} component={DogNoseWork} />
          </>
        )}
      />
      <Route path="/hestetraening" exact component={Horse} />
      <Route path="/foredrag" exact component={Lecture} />
      <Route path="/minemetoder" exact component={MyMethods} />
    </Switch>
  </Router>
);

export default App;
