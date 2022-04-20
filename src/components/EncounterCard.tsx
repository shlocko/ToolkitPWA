import {Box, Paper, Typography} from "@mui/material";
import {useState} from "react";

export type ecprops = {
    name: string,
    setName: Function,
    hp: number,
    setHp: Function,
    init: string,
    setInit: Function
}

function EncounterCard({name, setName, hp, setHp, init, setInit}: ecprops){
    
    return(
        <Paper variant="outlined"sx={{
            m: 3,
            backgroundColor: "#edefef",
        }}>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: 500,
                height: 75,
            }}>
                <Typography component="div" variant="body2">
                    {init}
                </Typography>
                <Typography component="div" variant="body2">
                    {name}
                </Typography>
                <Typography component="div" variant="body2">
                    {hp}
                </Typography>
            </Box>
        </Paper>
    )
}

export default EncounterCard