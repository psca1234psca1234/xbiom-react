import React, { useState } from "react";
import { Box, AppBar, Toolbar, ButtonGroup, Button, IconButton } from "@mui/material";

function Header({ switchTo }) {
  const [activeButton, setActiveButton] = useState("MDR");

  function handleSwitch(data) {
    switchTo(data);
    setActiveButton(data);
  }


  return (
    <Box sx={{ flexGrow: 1 }}>sfgdsfgdf
      <AppBar sx={{ height: '50px' }} position="fixed" variant="permanent">
        <Toolbar>
          <div sx={{ display: 'flex', alignItems: 'center' }}>
            <ButtonGroup sx={{ height: '30px' }}>
              <Button
                sx={{
                  backgroundColor: activeButton === "MDR" ? "white" : "blue",
                  color: activeButton === "MDR" ? "blue" : "white",
                  border: 'none',
                  '&:hover': {
                    backgroundColor: "blue", // Change the background color on hover
                    color: "white", // Change the text color on hover
                  },
                }}
                className="custom-button"
                color="inherit"
                onClick={() => handleSwitch('MDR')}
              >
                MDR
              </Button>
              <Button
                sx={{
                  backgroundColor: activeButton === "CDR" ? "white" : "blue",
                  color: activeButton === "CDR" ? "blue" : "white",
                  border: 'none',
                  '&:hover': {
                    backgroundColor: "blue", // Change the background color on hover
                    color: "white", // Change the text color on hover
                  },
                }}
                className="custom-button"
                color="inherit"
                onClick={() => handleSwitch('CDR')}
              >
                CDR
              </Button>
            </ButtonGroup>
          </div>

          <div style={{ flexGrow: 1 }}></div>
          <Button color="inherit">Logo Here</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
