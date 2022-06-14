import { Box, AppBar,Toolbar, IconButton,Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const MenuBar = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         {/*  <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Smart Lock | Admin Dashboard
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default MenuBar