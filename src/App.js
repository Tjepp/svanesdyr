import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faApple,
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faChevronRight,
  faEnvelope,
  faInfoCircle,
  faMapMarkerAlt,
  faPhone,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ScrollToTop } from './components';
import {
  About,
  Cat,
  Contact,
  Dog,
  DogConsultAggression,
  DogConsultPuppy,
  DogContinued,
  DogCool,
  DogCoolContinued,
  DogCoolEnvironment,
  DogCourse,
  DogCourseThanks,
  DogEmpower,
  DogPlay,
  DogPuppy,
  DogReactive,
  DogSocial,
  DogStylist,
  DogSummer,
  DogSundayPlay,
  Home,
  LawList,
  LawPrivate,
  Lecture,
  MyMethods,
  OnlineCourses,
  OnlineCoursesThanks,
  OnlineEbookCatScratch,
  OnlineEbookCatThanks,
  OnlineEbookPuppyFive,
  OnlineEbookThanks,
  OnlineSoundbookThanks,
  OnlineSummerThanks,
  OnlineThankPage,
  OnlineWalk,
  OnlineWebinarCool,
  OnlineWebinarPlaytime,
  OnlineWebinarThankCool,
  OnlineWebinarThankPage,
  Prices,
  Snackshop,
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
  faTimes,
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
        <Route path="/aggression" exact element={<DogConsultAggression />} />
        <Route path="/hvalpevisit" exact element={<DogConsultPuppy />} />
        <Route path="/hundehold/hvalpfortsat" element={<DogContinued />} />
        <Route path="/hundehold/coolhold" element={<DogCool />} />
        <Route path="/hundehold/fortsatcool" element={<DogCoolContinued />} />
        <Route path="/hundehold/miljohold" element={<DogCoolEnvironment />} />
        <Route path="/hundehold" element={<DogCourse />} />
        <Route path="/hundehold/tusindtak" element={<DogCourseThanks />} />
        <Route path="/hundehold/empowerment" element={<DogEmpower />} />
        <Route path="/legestue" element={<DogPlay />} />
        <Route path="/hundehold/hvalpehold" element={<DogPuppy />} />
        <Route path="/hundehold/reaktivtilro" element={<DogReactive />} />
        <Route path="/hundehold/socialisering" element={<DogSocial />} />
        <Route path="/hundehold/tryghundepleje" element={<DogStylist />} />
        <Route path="/sommerhund" element={<DogSummer />} />
        <Route path="/hyggedage" element={<DogSundayPlay />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/onlinehandelsbetingelser" element={<LawList />} />
        <Route path="/privatlivspolitik" element={<LawPrivate />} />
        <Route path="/foredrag" exact element={<Lecture />} />
        <Route path="/minemetoder" exact element={<MyMethods />} />
        <Route path="/onlinekurser" exact element={<OnlineCourses />} />
        <Route path="/takkesideonlinekurser" exact element={<OnlineCoursesThanks />} />
        <Route path="/kattekradsekursus" exact element={<OnlineEbookCatScratch />} />
        <Route path="/kattensebog" exact element={<OnlineEbookCatThanks />} />
        <Route path="/hvalpmedsucces" exact element={<OnlineEbookPuppyFive />} />
        <Route path="/eboginvestering" exact element={<OnlineEbookThanks />} />
        <Route path="/lydboginvestering" exact element={<OnlineSoundbookThanks />} />
        <Route path="/sommertak" exact element={<OnlineSummerThanks />} />
        <Route path="/tusindtak" exact element={<OnlineThankPage />} />
        <Route path="/gaatur" exact element={<OnlineWalk />} />
        <Route path="/webinarreaktivtilro" exact element={<OnlineWebinarCool />} />
        <Route path="/webinardengodehundeleg" exact element={<OnlineWebinarPlaytime />} />
        <Route path="/webinarreaktivtiltak" exact element={<OnlineWebinarThankCool />} />
        <Route path="/webinartak" exact element={<OnlineWebinarThankPage />} />
        <Route path="/snackshoppen" exact element={<Snackshop />} />
        <Route path="/prisoversigt" exact element={<Prices />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
