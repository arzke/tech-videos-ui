import { Theme, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import Grid from '@material-ui/core/Grid/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import Content from 'app/components/Content';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import 'typeface-roboto';
import './App.css'

const styles = (theme: Theme) => createStyles({
  appBar: {
    marginBottom: '20px',
  },
  grid: {
    margin: '0 auto',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.grey.A100,
    },
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  title: {
    marginRight: '15px',
  }
});

const App: React.SFC<WithStyles<typeof styles>> = ({classes}) => {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Grid alignItems="center" container={true} spacing={24}>
          <Grid className={classes.grid} item={true} xs={12}>
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.title}>
                Tech videos
              </Typography>
              <NavLink to="/" className={classes.navLink}>
                <Button color="inherit">Videos</Button>
              </NavLink>
              <NavLink to="/users" className={classes.navLink}>
                <Button color="inherit">Users</Button>
              </NavLink>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Content/>
    </div>
  );
}

export default withStyles(styles)(App);
