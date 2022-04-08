import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import FuelConverter from "./components/FuelConverter";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/ToolkitPWA/" element={<App />}>
                    <Route path="fuelConverter" element={<FuelConverter />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root')
)
