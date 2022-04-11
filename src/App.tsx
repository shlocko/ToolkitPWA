import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  width: 100%;
`

function App() {
    
    
    return (
        <div className="App">
            <header className="App-header">
                <div className={"nav"}>
                    <Link to={"/"} className={"navLink"}><Button className={"linkButton"}>Home</Button> </Link>
                    <Link to={"fuelConverter"} className={"navLink"}> <Button className={"linkButton"}>Fuel Converter </Button> </Link>
                </div>
                <div className={"content"}>
                    <Outlet />
                </div>
            </header>

        </div>
    )
}

export default App
