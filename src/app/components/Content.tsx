import { Theme, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddUserContainer from 'users/components/AddUserContainer';
import EditUserContainer from 'users/components/EditUserContainer';
import UsersListContainer from 'users/components/UsersListContainer';
import AddVideoContainer from 'videos/components/AddVideoContainer';
import EditVideoContainer from 'videos/components/EditVideoContainer';
import FetchVideo from 'videos/components/FetchVideo';
import VideoDetails from 'videos/components/VideoDetails';
import VideosListContainer from 'videos/components/VideosListContainer';

const styles = (theme: Theme) => createStyles({
  grid: {
    margin: '0 auto',
  }
});

const Content: React.SFC<WithStyles<typeof styles>> = ({classes}) => {
  return <Grid alignItems="center" container={true} spacing={24}>
    <Grid className={classes.grid} item={true} xs={10}>
      <Switch>
        <Route exact={true} path='/' component={VideosListContainer}/>
        <Route exact={true} path='/videos/add' component={AddVideoContainer}/>
        <Route exact={true} path='/videos/:videoId' render={(props) => (
          <FetchVideo {...props} render={({video}) => <VideoDetails {...props} video={video}/>}/>
        )} />
        <Route exact={true} path='/videos/:videoId/edit' render={(props) => (
          <FetchVideo {...props} render={({video}) => <EditVideoContainer {...props} video={video}/>}/>
        )}/>
        <Route exact={true} path='/users' component={UsersListContainer}/>
        <Route exact={true} path='/users/add' component={AddUserContainer}/>
        <Route exact={true} path='/users/:userId/edit' component={EditUserContainer}/>
      </Switch>
    </Grid>
  </Grid>
};

export default withStyles(styles)(Content);
