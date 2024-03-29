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
  DogConsultAggression,
  DogConsultPuppy,
  DogCourse,
  DogCourseThanks,
  // DogNailClip,
  DogPlay,
  DogPuppy,
  DogPuppyJanuary,
  DogPuppyMarch,
  DogContinued,
  DogCool,
  DogCoolContinued,
  DogCoolEnvironment,
  // DogRecall,
  DogSocial,
  DogEmpower,
  // DogMorning,
  DogCircle,
  DogStylist,
  DogSummer,
  // DogCoolFriend,
  // DogNoseWork,
  Home,
  // Horse,
  LawList,
  LawPrivate,
  Lecture,
  MyMethods,
  OnlineCourses,
  OnlineCoursesThanks,
  OnlineEbookPuppyFive,
  OnlineEbookThanks,
  OnlinePuppy,
  OnlinePuppyThankPage,
  OnlineSoundbookThanks,
  OnlineSoldOut,
  OnlineSummerThanks,
  OnlineThankPage,
  OnlineWalk,
  OnlineWebinarCool,
  OnlineWebinarPlaytime,
  OnlineWebinarThankCool,
  OnlineWebinarThankPage,
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
        <Route path="/dyreadfaerdskonsulent" exact element={<About />} />
        <Route path="/kattetraening" exact element={<Cat />} />
        <Route path="/kontakt" exact element={<Contact />} />
        <Route path="/hundetraening" exact element={<Dog />} />
        <Route path="/hundehold/tricks" element={<DogCircle />} />
        <Route path="/aggression" exact element={<DogConsultAggression />} />
        <Route path="/hvalpevisit" exact element={<DogConsultPuppy />} />
        <Route path="/hundehold/hvalpfortsat" element={<DogContinued />} />
        <Route path="/hundehold/coolhold" element={<DogCool />} />
        <Route path="/hundehold/fortsatcool" element={<DogCoolContinued />} />
        <Route path="/hundehold/miljohold" element={<DogCoolEnvironment />} />
        {/* <Route path="/hundehold/venligvovse" element={<DogCoolFriend />} /> */}
        <Route path="/hundehold" element={<DogCourse />} />
        <Route path="/hundehold/tusindtak" element={<DogCourseThanks />} />
        <Route path="/hundehold/empowerment" element={<DogEmpower />} />
        {/* <Route path="/hundehold/formiddagshold" element={<DogMorning />} /> */}
        {/* <Route path="/hundehold/negleklipkursus" element={<DogNailClip />} /> */}
        {/* <Route path="/hundehold/noseworkintro" element={<DogNoseWork />} /> */}
        <Route path="/hundehold/legestue" element={<DogPlay />} />
        <Route path="/hundehold/hvalpehold" element={<DogPuppy />} />
        <Route path="/hundehold/hvalpehold/tusindtak" element={<DogPuppyJanuary />} />
        <Route path="/hundehold/hvalpehold/tak" element={<DogPuppyMarch />} />
        {/* <Route path="/hundehold/indkald" element={<DogRecall />} /> */}
        <Route path="/hundehold/socialisering" element={<DogSocial />} />
        <Route path="/hundehold/tryghundepleje" element={<DogStylist />} />
        <Route path="/sommerhund" element={<DogSummer />} />
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/hestetraening" exact element={<Horse />} /> */}
        <Route path="/onlinehandelsbetingelser" element={<LawList />} />
        <Route path="/privatlivspolitik" element={<LawPrivate />} />
        <Route path="/foredrag" exact element={<Lecture />} />
        <Route path="/minemetoder" exact element={<MyMethods />} />
        <Route path="/onlinekurser" exact element={<OnlineCourses />} />
        <Route path="/takkesideonlinekurser" exact element={<OnlineCoursesThanks />} />
        <Route path="/hvalpmedsucces" exact element={<OnlineEbookPuppyFive />} />
        <Route path="/eboginvestering" exact element={<OnlineEbookThanks />} />
        <Route path="/onlinehvalp" exact element={<OnlinePuppy />} />
        <Route path="/dinhvalpsigertak" exact element={<OnlinePuppyThankPage />} />
        <Route path="/lydboginvestering" exact element={<OnlineSoundbookThanks />} />
        <Route path="/udsolgt" exact element={<OnlineSoldOut />} />
        <Route path="/sommertak" exact element={<OnlineSummerThanks />} />
        <Route path="/tusindtak" exact element={<OnlineThankPage />} />
        <Route path="/gaatur" exact element={<OnlineWalk />} />
        <Route path="/webinarreaktivtilro" exact element={<OnlineWebinarCool />} />
        <Route path="/webinardengodehundeleg" exact element={<OnlineWebinarPlaytime />} />
        <Route path="/webinarreaktivtiltak" exact element={<OnlineWebinarThankCool />} />
        <Route path="/webinartak" exact element={<OnlineWebinarThankPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
