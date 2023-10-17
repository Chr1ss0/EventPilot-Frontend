import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventPage from './components/pages/EventPage';
import Protected from './components/shared/Protected';
import SplashScreenPage from './components/pages/SplashScreenPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreenPage />} />
        <Route element={<Protected />}>
          <Route path="/event" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
