import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './features/Home';
import NotFound from './pages/NotFound';
import ResponsiveAppBar from './components/AppBar';
import TarkovMaps from './features/GameMaps/TarkovMaps';
import Customs from './features/GameMaps/TarkovMaps/Customs';

export default function App() {
  return (
    <Box width="100vw" height="100vh" bgcolor="background.default">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps/tarkov" element={<TarkovMaps />} />
        <Route path="/maps/tarkov/customs" element={<Customs />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}
