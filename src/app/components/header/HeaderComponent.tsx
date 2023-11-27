import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent } from "react";
import "./header.css";

export default function HeaderComponent() {
  const handleChangeTab = (e: SyntheticEvent) => {
    console.log("data:", e);
    console.log("type data:", typeof e);
  };

  return (
    <Paper className='header-content'>
      <Typography>SOFA DECOR</Typography>

      <Box sx={{ borderColor: "#ffffff" }}>
        <Tabs value={0} onChange={handleChangeTab}>
          <Tab label='Sobre' />
          <Tab label='Sala' />
          <Tab label='Quarto' />
          <Tab label='Cozinha' />
        </Tabs>
      </Box>

      <Box />
    </Paper>
  );
}
