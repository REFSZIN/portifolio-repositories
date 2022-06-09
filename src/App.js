import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from './assets/css/global.js';
import UserContext from "./contexts/UserContext";
import React from 'react'
import SignPage from "./Pages/SignPage"
export default function App (){

    return (
        <UserContext.Provider>
            <BrowserRouter>
                <ResetCSS/>
                    <Routes>
                            <Route path="/" element={<SignPage />}/>
                    </Routes> 
            </BrowserRouter>
        </UserContext.Provider>
    );
};