import { WithStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import CardActions from '@material-ui/core/CardActions/CardActions';
import CardContent from '@material-ui/core/CardContent/CardContent';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography/Typography';
import EditButton from 'app/components/buttons/EditButton';
import * as React from 'react';
import { IVideo } from 'videos/videos';

const styles = () => createStyles({
  title: {
    fontSize: 14,
    marginBottom: 16,
  },
  videoUrl: {
    marginBottom: 12,
  },
});

interface IVideoDetailsProps extends WithStyles<typeof styles> {
  video: IVideo
}

const VideoDetails: React.SFC<IVideoDetailsProps> = ({ video, classes }) => (
  <Card>
    <CardContent>
      <Typography variant="headline" component="h2">
        {video.title}
      </Typography>
      <Typography className={classes.videoUrl} color="textSecondary">
        {video.url}
      </Typography>
      <Typography component="p">
        {video.description}
      </Typography>
    </CardContent>
    <CardActions>
      <EditButton to={`/videos/${video.id}/edit`}/>
    </CardActions>
  </Card>
);

export default withStyles(styles)(VideoDetails);
