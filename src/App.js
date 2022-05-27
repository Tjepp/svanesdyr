/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
  DogCourseThanks,
  DogNailClip,
  DogPuppy,
  DogContinued,
  DogCool,
  DogCoolContinued,
  DogRecall,
  DogSocial,
  DogEmpower,
  DogSummer,
  DogCoolFriend,
  DogNoseWork,
  Home,
  Horse,
  LawList,
  LawPrivate,
  Lecture,
  MyMethods,
  OnlineEbookPuppyFive,
  OnlineEbookThanks,
  OnlineSoldOut,
  OnlineSummerThanks,
  OnlineThankPage,
  OnlineWalk,
} from './pages';
import { ScrollToTop } from './components';

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

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dyreadfaerdskonsulent" exact element={<About />} />
        <Route path="/kattetraening" exact element={<Cat />} />
        <Route path="/kontakt" exact element={<Contact />} />
        <Route path="/hundetraening" exact element={<Dog />} />
        <Route path="/hvalpevisit" exact element={<DogConsultPuppy />} />
        <Route path="/hundehold" element={<DogCourse />}></Route>
        <Route path="/hundehold/tusindtak" element={<DogCourseThanks />} />
        <Route path="/hundehold/hvalpehold" element={<DogPuppy />} />
        <Route path="/hundehold/hvalpfortsat" element={<DogContinued />} />
        <Route path="/hundehold/coolhold" element={<DogCool />} />
        <Route path="/hundehold/fortsatcool" element={<DogCoolContinued />} />
        <Route path="/hundehold/venligvovse" element={<DogCoolFriend />} />
        <Route path="/hundehold/indkald" element={<DogRecall />} />
        <Route path="/hundehold/socialisering" element={<DogSocial />} />
        <Route path="/hundehold/negleklipkursus" element={<DogNailClip />} />
        <Route path="/sommerhund" element={<DogSummer />} />
        <Route path="/hundehold/empowerment" element={<DogEmpower />} />
        <Route path="/hundehold/noseworkintro" element={<DogNoseWork />} />
        <Route path="/hestetraening" exact element={<Horse />} />
        <Route path="/onlinehandelsbetingelser" element={<LawList />} />
        <Route path="/privatlivspolitik" element={<LawPrivate />} />
        <Route path="/foredrag" exact element={<Lecture />} />
        <Route path="/hvalpmedsucces" exact element={<OnlineEbookPuppyFive />} />
        <Route path="/eboginvestering" exact element={<OnlineEbookThanks />} />
        <Route path="/udsolgt" exact element={<OnlineSoldOut />} />
        <Route path="/sommertak" exact element={<OnlineSummerThanks />} />
        <Route path="/tusindtak" exact element={<OnlineThankPage />} />
        <Route path="/gaatur" exact element={<OnlineWalk />} />
        <Route path="/minemetoder" exact element={<MyMethods />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
