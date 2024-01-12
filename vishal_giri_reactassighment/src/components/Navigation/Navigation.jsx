import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About Us', link: '/about' },
    { text: 'Contact Us', link: '/contact' },
    { text: 'Pricing', link: '/pricing' },
    { text: 'Login', link: '/login' },
    { text: 'Sign Up', link: '/signup' },
    { text: 'Dashboard', link: '/dashboard' },
    { text: 'FAQs', link: '/faq' },
    { text: 'Support Ticket', link: '/support-ticket' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Hidden smDown>
            {menuItems.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button color="inherit">{item.text}</Button>
              </Link>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
