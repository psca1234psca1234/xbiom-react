import React, { useState } from 'react';
import { Box, ListItemButton, Popover } from '@mui/material';

const CustomPopover = ({ open, anchorEl, onClose, items, switchTo }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      sx={{ marginTop: '8px' }}
    >
      <Box>
        {items.map((item, index) => (
          <ListItemButton key={index} onClick={() => switchTo(item)}>
            {item}
          </ListItemButton>
        ))}
        {/* Additional buttons/items can be added here */}
      </Box>
    </Popover>
  );
};

export default CustomPopover;
