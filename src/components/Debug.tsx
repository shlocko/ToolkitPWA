import {Box, Typography} from "@mui/material";

function Debug(){
    
    return(
        <>
            <Box sx={{
                m: 10,
            }}>
                <Typography>{localStorage.getItem("fuelStops")}</Typography>
            </Box>
        </>
    )
}

export default Debug