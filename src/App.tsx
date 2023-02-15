import { Route, Routes } from 'react-router-dom';
import Home from './features/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/Navbar';
import GameMap from './features/GameMap';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GameMap" element={<GameMap />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
