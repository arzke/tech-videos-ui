import { Theme, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import apiService from 'app/http/apiService';
import * as React from 'react';

const styles = ({spacing}: Theme) => createStyles({
  button: {
    margin: spacing.unit,
  },
});

interface IVoteButtonProps extends WithStyles<typeof styles>{
  videoId?: number;
  votes: number;
  render: (hasVoted: boolean) => any;
}

 class VoteButton extends React.Component<IVoteButtonProps> {
    public state = {
      hasVoted: false,
      votes: 0,
    };

    public componentDidMount() {
      const { votes } = this.props;
      this.setState({ votes });
    }

    public render() {
      const { classes } = this.props;

      return <Button variant="raised" color={this.state.hasVoted ? 'primary' : 'default'} className={classes.button} onClick={this.toggleVotes}>
        { this.state.votes } votes
        { this.props.render(this.state.hasVoted) }
      </Button>
    }

   private toggleVotes = async() => {
     const { hasVoted, votes } = this.state;

     this.setState({
       hasVoted: !hasVoted,
       votes: hasVoted ? votes-1 : votes+1,
     });

     try {
       const action = !hasVoted ? 'submit' : 'retract';
       apiService.get(`/votes/${action}?sessionId=1&videoId=${this.props.videoId}`)
     } catch(error) {
       // todo
     }
   };
 }

export default withStyles(styles)(VoteButton);
