import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";
import { Button, AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText,   } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'


/*const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  width: 100%;
`*/

function App() {
    
    const [drawerOpen, setDrawerOpen] = useState(false)
    const toggleDrawer = (newState: boolean) => {
        
    }
    
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            Toolkit
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer className={"drawer"} anchor={"left"} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <div className={"nav"} onClick={() => setDrawerOpen(false)}>
                    <Link to={"/"} className={"navLink"}><Button className={"linkButton"}>Home</Button> </Link>
                    <Link to={"fuelConverter"} className={"navLink"}> <Button className={"linkButton"}>Fuel Converter </Button> </Link>
                    <Link to={"incomeCalculator"} className={"navLink"}> <Button className={"linkButton"}>Income Calculator </Button> </Link>
                </div>
            </Drawer>
            
            <header className="App-header">
                
                <div className={"content"}>
                    <Outlet />
                </div>
            </header>

        </div>
    )
}

export default App
