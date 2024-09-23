// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './includes/Header'; // Import Header
import Layout from './pages/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

const App = () => (
  <BrowserRouter>
    <Header /> {/* Include the Header */}
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
