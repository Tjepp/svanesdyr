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
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import styled, { keyframes } from 'styled-components';
import { ScrollToTop } from './components';

// Keep Home static (most common entry point)
import Home from './pages/Home';

// Lazy load all other pages
const About = lazy(() => import('./pages/About'));
const Cat = lazy(() => import('./pages/Cat'));
const Contact = lazy(() => import('./pages/Contact'));
const Dog = lazy(() => import('./pages/Dog'));
const DogConsultAggression = lazy(() => import('./pages/DogConsultAggression'));
const DogConsultPuppy = lazy(() => import('./pages/DogConsultPuppy'));
const DogContinued = lazy(() => import('./pages/DogContinued'));
const DogCool = lazy(() => import('./pages/DogCool'));
const DogCoolContinued = lazy(() => import('./pages/DogCoolContinued'));
const DogCoolEnvironment = lazy(() => import('./pages/DogCoolEnvironment'));
const DogCourse = lazy(() => import('./pages/DogCourse'));
const DogCourseThanks = lazy(() => import('./pages/DogCourseThanks'));
const DogEmpower = lazy(() => import('./pages/DogEmpower'));
const DogPlay = lazy(() => import('./pages/DogPlay'));
const DogPuppy = lazy(() => import('./pages/DogPuppy'));
const DogReactive = lazy(() => import('./pages/DogReactive'));
const DogSocial = lazy(() => import('./pages/DogSocial'));
const DogStylist = lazy(() => import('./pages/DogStylist'));
const DogSummer = lazy(() => import('./pages/DogSummer'));
const DogSundayPlay = lazy(() => import('./pages/DogSundayPlay'));
const LawList = lazy(() => import('./pages/LawList'));
const LawPrivate = lazy(() => import('./pages/LawPrivate'));
const Lecture = lazy(() => import('./pages/Lecture'));
const MyMethods = lazy(() => import('./pages/MyMethods'));
const NotFound = lazy(() => import('./pages/NotFound'));
const OnlineCourses = lazy(() => import('./pages/OnlineCourses'));
const OnlineCoursesThanks = lazy(() => import('./pages/OnlineCoursesThanks'));
const OnlineEbookCatScratch = lazy(() => import('./pages/OnlineEbookCatScratch'));
const OnlineEbookCatThanks = lazy(() => import('./pages/OnlineEbookCatThanks'));
const OnlineEbookPuppyFive = lazy(() => import('./pages/OnlineEbookPuppyFive'));
const OnlineEbookThanks = lazy(() => import('./pages/OnlineEbookThanks'));
const OnlineSoundbookThanks = lazy(() => import('./pages/OnlineSoundbookThanks'));
const OnlineSummerThanks = lazy(() => import('./pages/OnlineSummerThanks'));
const OnlineThankPage = lazy(() => import('./pages/OnlineThankPage'));
const OnlineWalk = lazy(() => import('./pages/OnlineWalk'));
const OnlineWebinarCool = lazy(() => import('./pages/OnlineWebinarCool'));
const OnlineWebinarPlaytime = lazy(() => import('./pages/OnlineWebinarPlaytime'));
const OnlineWebinarThankCool = lazy(() => import('./pages/OnlineWebinarThankCool'));
const OnlineWebinarThankPage = lazy(() => import('./pages/OnlineWebinarThankPage'));
const Prices = lazy(() => import('./pages/Prices'));
const Snackshop = lazy(() => import('./pages/Snackshop'));

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

// Loading spinner component
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #379683;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const PageLoader = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
