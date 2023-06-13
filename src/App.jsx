import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
// import MenuIcon from '';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6">Mi Aplicación</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;