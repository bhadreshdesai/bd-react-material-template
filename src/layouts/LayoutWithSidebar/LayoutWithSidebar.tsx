import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Content from "../../Content";
import clsx from "clsx";

const drawerWidth = 160;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {},
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    },
    // When the drawer is closed shift it left by drawerWidth
    content: {
      flexGrow: 1,
      marginLeft: -drawerWidth
    },
    // When the drawer is open set the marginLeft to 0 so it starts after the drawer
    contentShift: {
      marginLeft: 0
    },
    // This is used by both the drawer and paper within the drawer
    drawer: {
      width: drawerWidth
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content/sidebar items to be below app bar
      ...theme.mixins.toolbar
    }
  })
);

export default function LayoutWithSidebar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography>BD React Material Template</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{
          paper: classes.drawer
        }}
        className={classes.drawer}
        open={open}
        variant="persistent"
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
            <ListItem key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
        id="mainContent"
      >
        <div className={classes.toolbar}></div>
        <Content />
      </main>
    </div>
  );
}
