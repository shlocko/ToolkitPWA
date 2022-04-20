import { registerSW } from 'virtual:pwa-register'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import FuelConverter from "./components/FuelConverter"
import IncomeCalculator from "./components/IncomeCalculator";
import FuelTracker from "./components/FuelTracker";
import EncounterTracker from "./components/EncounterTracker";

if ("serviceWorker" in navigator) { // && !/localhost/.test(window.location)) {
    registerSW();
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="ToolkitPWA">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="fuelConverter" element={<FuelConverter />} />
                    <Route path="incomeCalculator" element={<IncomeCalculator />} />
                    <Route path="fuelTracker" element={<FuelTracker />} />
                    <Route path="encounterTracker" element={<EncounterTracker />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
)
