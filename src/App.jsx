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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreenPage />} />

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/addevent" element={<AddEventPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
          
        <Route element={<Navbar />}>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route element={<Protected />}>
            <Route path="/event" element={<EventPage />} />
          </Route>
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
