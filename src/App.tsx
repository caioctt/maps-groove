import { Route, Routes } from 'react-router-dom';
import Home from './features/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
