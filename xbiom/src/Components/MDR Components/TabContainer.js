import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { Box, AppBar, Tabs, Tab, useTheme, Typography, } from "@mui/material";
import { Grid } from 'pcsharedlibrary';
import Containers from './Containers';
import Home from '../Home';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      sx={{ backgroundColor: 'white' }}
      role="tabpanel"
      hidden={value !== index}
      id={`standard-tabpanel-${index}`}
      aria-labelledby={`standard-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div >
          <Typography>{children}</Typography>
        </div>
      )}

    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: 500,
//   },
// }));

export default function () {
  const classes = useRef();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="standard"
        aria-label="full width tabs example"
        sx={{ minHeight: '20px', borderTopLeftRadius: '10px', '& .MuiTabs-indicator': { top: 0 } }}
      >
        <Tab sx={{ minHeight: '20px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }} label="Item One" {...a11yProps(0)} />
        <Tab sx={{ minHeight: '20px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }} label="Item One" {...a11yProps(1)} />
        <Tab sx={{ minHeight: '20px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }} label="Item One" {...a11yProps(2)} />

      </Tabs>
      <div
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item three
        </TabPanel>
      </div>

    </div>
  );
}
