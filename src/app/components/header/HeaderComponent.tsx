import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Logo from "../../../assets/logo.png";
import "./header.css";

export default function HeaderComponent() {
  const [tabValue, setTabValue] = useState("sobre");
  const handleChangeTab = (e: SyntheticEvent, value: string) => {
    e.preventDefault();
    setTabValue(value);
  };

  return (
    <Paper className='header-content'>
      <Box className='app-row'>
        <Typography fontSize={18} fontWeight={900}>
          SOFÁ DECOR
        </Typography>
        <img width={30} height={30} src={Logo} alt='logo' />
      </Box>

      <Box>
        <Tabs value={tabValue} onChange={handleChangeTab}>
          <Tab label='Sobre' value='sobre' color='blue' />
          <Tab label='Sala' value='sala' />
          <Tab label='Quarto' value='Quarto' />
          <Tab label='Cozinha' value='Cozinha' />
        </Tabs>
      </Box>

      <Box />
    </Paper>
  );
}
