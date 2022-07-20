import React from 'react'
import Header from '../common/header/Header'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Beneflex from './Beneflex'
import Ozias from './Ozias'
import Finanzas from './Finanzas'
import Ingles from './Ingles'
import Naturalizacion from './Naturalizacion'
import Referencias from './Referencias'
import Footer from '../Footer/Footer'

const Pages = () => {
  return (
    <>
    <BrowserRouter>
     <Header />
        <Routes>
          <Route exact path="/" element={<Home /> } />  
          <Route path='/beneflex' element={<Beneflex />} />    
          <Route path='/ozias' element={<Ozias />} />
          <Route path='/curso-de-naturalizacion' element={<Naturalizacion />} />
          <Route path='/curso-de-ingles' element={<Ingles />} />
          <Route path='/finanzas' element={<Finanzas />} />
          <Route path='/referencias' element={<Referencias />} />          
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default Pages