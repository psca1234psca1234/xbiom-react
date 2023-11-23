import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function ScrollableTab({ tabData }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  if (!Array.isArray(tabData) || tabData.length === 0) {
    return <div>No valid tab data provided.</div>;
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', /* Increased width */ }}>
      <AppBar position="static" sx={{ backgroundColor: 'white',width:450,boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary" /* Changed indicator color */
          textColor="inherit"
          variant="scrollable" /* Changed variant to scrollable */
          scrollButtons="auto" /* Allow scrollable tabs */
          aria-label="full width tabs example"
          sx={{ height: 10 /* Reduced tab height */ }}
        >
          {tabData.map((tab, index) => (
            <Tab label={tab.tabName} {...a11yProps(index)} key={index} sx={{ height: 40, color: '#0D4C92' }} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        containerStyle={{ width: '100%' }} /* Adjusted SwipeableViews width */
      >
        {tabData.map((tab, index) => (
          <TabPanel value={value} index={index} key={index} dir={theme.direction}>
            {tab.tabContent}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}

ScrollableTab.propTypes = {
  tabData: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabContent: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default ScrollableTab;
