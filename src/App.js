import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Addemployee from './components/Addemployee';
import Searchemployee from './components/Searchemployee';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/'exact element={<Addemployee/>}/>
      <Route path='/search' exact element={<Searchemployee/>}/>
      <Route path='/viewall' exact element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
