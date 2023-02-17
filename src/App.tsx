import { Route, Routes } from 'react-router-dom';
import Home from './features/Home';
import NotFound from './pages/NotFound';
import GameMap from './features/GameMap';
import ResponsiveAppBar from './components/Appbar';

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GameMap" element={<GameMap />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
