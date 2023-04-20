import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Special } from "../screens/Special.jsx";
import { Main } from "../screens/Main.jsx";

const TabPanel = ({index}) => {
    if(index == 0){
        return <Special/>
    }else if(index == 1){
        return <Main/>
    }else{
        return <h1> 3 </h1>
    }
}

export function NavBar () {

    const [value, setValue] = useState(0);

    const handleChange = (event, value) => {
        setValue(value);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange}>
            <Tab label="Special" />
            <Tab label="Main" />
            <Tab label="Beverages" />
            </Tabs>
            <TabPanel index={value}/>
       </Box>
    )
}