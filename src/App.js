import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from './assets/css/global.js';
import UserContext from "./contexts/UserContext";
import React from 'react'
import AboutPage from "./Pages/AboutPage"
import ProjetsPage from "./Pages/ProjetsPage"
import TechnologyPage from "./Pages/TechnologyPage"
import ContactPage from "./Pages/ContactPage"

export default function App (){

    return (
        <UserContext.Provider>
            <BrowserRouter>
                <ResetCSS/>
                    <Routes>
                            <Route path="/" element={<AboutPage />}/>
                            <Route path="/Projets" element={<ProjetsPage />}/>
                            <Route path="/Technology" element={<TechnologyPage />}/>
                            <Route path="/Contact" element={<ContactPage />}/>
                    </Routes> 
            </BrowserRouter>
        </UserContext.Provider>
    );
};