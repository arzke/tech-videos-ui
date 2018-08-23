import { Theme, WithStyles } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import DoneIcon from '@material-ui/icons/Done';
import PlusIcon from '@material-ui/icons/PlusOne';
import AddButton from 'app/components/buttons/AddButton';
import DeleteButton from 'app/components/buttons/DeleteButton';
import * as React from 'react';
import { Link } from 'react-router-dom';
import VoteButton from 'videos/components/VoteButton';
import { IVideo, IVotesByVideoId } from 'videos/videos';

const styles = ({spacing}: Theme) => createStyles({
  button: {
    margin: spacing.unit,
  },
  rightIcon: {
    marginLeft: spacing.unit,
  },
});

interface IVideosListProps extends WithStyles<typeof styles>{
  videos: IVideo[],
  votes: IVotesByVideoId
}

const VideosList: React.SFC<IVideosListProps> = ({ videos = [], votes = {}, classes }) => {
  return (<>
    <AddButton to='/videos/add'>
      Add a video
    </AddButton>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Votes</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { videos.map(video => (
          <TableRow key={video.id}>
            <TableCell>
              <Link to={`/videos/${video.id}`}>
                {video.title}
              </Link>
            </TableCell>
            <TableCell>{video.description}</TableCell>
            <TableCell>
              <VoteButton
                videoId={video.id}
                votes={video.id ? votes[video.id] || 0 : 0}
                render={(hasVoted: boolean) => (
                  hasVoted ?
                    <DoneIcon className={classes.rightIcon}/> :
                    <PlusIcon className={classes.rightIcon}/>
                )}
              />
            </TableCell>
            <TableCell>
              <DeleteButton/>
            </TableCell>
          </TableRow>
        )) }
      </TableBody>
    </Table>
  </>);
};

export default withStyles(styles)(VideosList);
