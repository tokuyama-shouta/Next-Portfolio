
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';


export default function ButtonAppBar() {

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon className={classes.menu}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>
          <Button color="inherit" className={classes.titleList}>
            <FaceIcon/>About</Button>
          <Button color="inherit" className={classes.titleList}>
            <CreateIcon/>Skill</Button>
          <Button color="inherit" className={classes.titleList}><WorkIcon/>Works</Button>
          <Button color="inherit" className={classes.titleList}><EmailIcon/>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}