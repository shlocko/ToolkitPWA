import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
    
    
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <Link to={"/"} > Home </Link> <br />
                    <Link to={"fuelConverter"} > Fuel Converter </Link>
                </p>
                <Outlet />
            </header>
        </div>
    )
}

export default App
