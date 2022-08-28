import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from'@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LocalGroceryStore from '@mui/icons-material/LocalGroceryStore';
import { MarketContext } from '../context/MarketContext';

export default function ButtonAppBar() {
    const {list, setList} = React.useContext(MarketContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const listMarket = list.map(item => <MenuItem>{item}</MenuItem>)
     

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
        >
            <LocalGroceryStore />
          </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
              {
                list.length > 0
                ? listMarket
                : <MenuItem>Lista Vacía</MenuItem>
              }
                 
                
            </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
