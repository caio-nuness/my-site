import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
    </Routes>    
  );
}

export default App
