import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from './components/pages/EventPage';
import Protected from './components/shared/Protected';
import SplashScreenPage from './components/pages/SplashScreenPage';
import MainButton from './components/ui/MainButton.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreenPage />} />
        <Route element={<Protected />}>
          <Route path="/event" element={<EventPage />} />
        </Route>
      </Routes>
      <div>
        <MainButton>sign in</MainButton>
      </div>
    </BrowserRouter>
  );
}

export default App;
