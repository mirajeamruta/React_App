import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './Component/Home';
import AOS from 'aos';
import './App.css'
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function App() {

  AOS.init();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
