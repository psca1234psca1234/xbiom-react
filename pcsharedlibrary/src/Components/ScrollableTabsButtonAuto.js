import React from 'react';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import { TabButton } from './ButtonStyle';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(30),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '8ch',
    [theme.breakpoints.up('sm')]: {
      width: '8ch',
      '&:focus': {
        width: '15ch',
      },
    },
  },
}));

function ScrollableTabsButtonAuto({ buttonNames, onFilter, onButtonClick }) {
  const [value, setValue] = React.useState(0);
  const [searchText, setSearchText] = React.useState(""); // State to store the typed text

  const handleChange = (event, newValue) => {
    onButtonClick(buttonNames[newValue])
    setValue(newValue);
  };

  // Function to handle changes in the search input and return the filtered grid
  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onFilter(text);
  };

  return (
    <Box sx={{ maxWidth: { xs: 10, sm: 1080 }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'background.paper' }}>

      <Tabs
      value={false}
        variant="scrollable"
        scrollButtons="auto"
      > 
{buttonNames.map((name,index) =>(
  <TabButton key={index} variant="text" onClick={() => onButtonClick(name)}>{name}</TabButton>
))}    
      </Tabs>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={searchText}
          onChange={handleSearchChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  );
}

export default ScrollableTabsButtonAuto;
