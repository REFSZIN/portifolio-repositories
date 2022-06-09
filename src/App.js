import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from './assets/css/global.js';
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import React from 'react'

export default function App (){

    return (
        <UserContext.Provider value={userContext}>
            <BrowserRouter>
                <ResetCSS/>
                    <Routes>
                            <Route path="/" element={<SignScreen />}/>
                            <Route path="/cadastro" element={<RegisterScreen />}/>
                            <Route path="/habitos" element={<HabitScreen weekDays={weekDays} />}/>
                            <Route path="/hoje" element={<TodayScreen weekDays={weekDays} />}/>
                            <Route path="/historico" element={<HistoryScreen />}/>
                    </Routes> 
            </BrowserRouter>
        </UserContext.Provider>
    );
};