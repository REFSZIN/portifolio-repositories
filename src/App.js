import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from './assets/css/global.js';
import React from 'react'
import AboutPage from "./Pages/AboutPage/AboutPage"
import ProjetsPage from "./Pages/ProjetsPage/ProjetsPage"
import TechnologyPage from "./Pages/TechnologyPage/TechnologyPage"
import ContactPage from "./Pages/ContactPage/ContactPage"
import GlobalHeader from "./components/GlobalHeader/GlobalHeader"
export default function App (){
return (
        <BrowserRouter>
        <ResetCSS/>
                <GlobalHeader />
                <Routes>
                        <Route path="/" element={<AboutPage />}/>
                        <Route path="/Projets" element={<ProjetsPage />}/>
                        <Route path="/Technology" element={<TechnologyPage />}/>
                        <Route path="/Contact" element={<ContactPage />}/>
                </Routes> 
        </BrowserRouter>
);
};