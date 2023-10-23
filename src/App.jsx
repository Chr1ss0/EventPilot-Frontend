import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from './components/pages/EventPage';
import Protected from './components/shared/Protected';
import Navbar from './components/shared/Navbar.jsx';
import SplashScreenPage from './components/pages/SplashScreenPage.jsx';
import SignInPage from './components/pages/SignInPage';
import ExplorePage from './components/pages/ExplorePage.jsx';
import SearchPage from './components/pages/SearchPage.jsx';
import ProfilePage from './components/pages/ProfilePage.jsx';
import SignUpPage from './components/pages/SignUpPage';
import AddEventPage from './components/pages/AddEventPage';
import Test from './components/pages/Test.jsx';
import UserProvider from './context/userContext.jsx';
import EventDetailsPage from './components/pages/EventDetailsPage.jsx';
import ReviewPage from './components/pages/ReviewPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SplashScreenPage />} />

          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route element={<Protected />}>
            <Route element={<Navbar />}>
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/user/:id" element={<ProfilePage />} />
              <Route path="/events/own" element={<EventPage />} />
            </Route>
            <Route path="/user/:id/review" element={<ReviewPage />} />
            <Route path="/events/details/:id" element={<EventDetailsPage />} />
            <Route path="/addevent" element={<AddEventPage />} />
          </Route>
          <Route path="/test" element={<Test />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
