import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Collapse } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import StatusIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SubItemIcon from '@mui/icons-material/Star';
import {Link} from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});


  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleExpandClick = (index) => {
    setExpanded((prev) => (
        {
        ...prev,
        [index]: !prev[index],
    }));
  };

  console.log(expanded, 'expanded')

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, subItems: [{link:'dashboard', component: 'Dashboard', }, {link:'activity', component: 'Activity'}] },
    { text: 'Profile', icon: <PersonIcon />, subItems: [{link:'editprofile',component:'Edit Profile'}, {link:'viewprofile', component: 'View Profile'} , {link:'logout', component: 'Log Out'}] },
    { text: 'User Status', icon: <StatusIcon />, subItems: [{link:'Active', component:'Active'}, {link:'away', component: 'Away'},  {link:'donotdisturb', component: 'Do Not Disturb'}]},
    { text: 'Settings', icon: <SettingsIcon />, subItems: [{link:'General', component:'General'}, {link:'security', component: 'Security'} ] },
    { text: 'Help', icon: <HelpIcon />, subItems: [{link:'faq', component:'FAQ'},  {link:'contactsupport', component:'Contact Support'}]},
  ];

  return (
    <div>
      <IconButton onClick={toggleDrawer}
       style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <MenuIcon/>
      </IconButton>
      {/* <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={() => handleExpandClick(1)}>Home</ListItem>

          <Collapse in={expanded[1]} timeout="auto" unmountOnExist>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>Dashboard</ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>Activity</ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => handleExpandClick(2)}>Profile</ListItem>
          <Collapse in={expanded[1]} timeout="auto" unmountOnExist>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>Edit Profile</ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4 }}>View Profile</ListItem>
            </List>
          </Collapse>


          <ListItem button onClick={() => handleExpandClick(3)}>User Status</ListItem>
          <ListItem button onClick={() => handleExpandClick(4)}>Settings</ListItem>
          <ListItem button onClick={() => handleExpandClick(5)}>Help</ListItem>
        </List>
      </Drawer> */}
      
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item, index) => ( 
            <div key={index}>
              <ListItem button onClick={() => handleExpandClick(index)}>
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText primary={item.text} />
                {expanded[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={expanded[index]} timeout="auto" unmountOnExist>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                      
                      <ListItem component={Link} to={subItem.link} key={subIndex} sx={{ pl: 4 }}>
                          {/* <ListItemIcon>
                              <SubItemIcon />
                          </ListItemIcon> */}
                          
                          
                          <ListItemText primary={subItem.component} />
                      </ListItem>
                  ))}
                </List>
              </Collapse>
            <Divider />
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

