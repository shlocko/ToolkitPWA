import { registerSW } from 'virtual:pwa-register'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import FuelConverter from "./components/FuelConverter"

if ("serviceWorker" in navigator) { // && !/localhost/.test(window.location)) {
    registerSW();
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="ToolkitPWA">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="fuelConverter" element={<FuelConverter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
)
