import { Theme, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField/TextField';
import { SyntheticEvent } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IVideo } from 'videos/videos';

const styles = ({ spacing }: Theme) => createStyles({
  buttons: {
    float: 'right',
  },
  buttonsContainer: {
    margin: spacing.unit,
    width: 400,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: spacing.unit,
    marginRight: spacing.unit,
    width: 400,
  },
});

interface IVideoFormProps extends WithStyles<typeof styles> {
  onSubmit: (video: IVideo) => void;
  video: IVideo
}

interface IVideoFormState {
  video: IVideo
}

class VideoForm extends React.Component<IVideoFormProps, IVideoFormState> {
  public constructor(props: IVideoFormProps) {
    super(props);
    this.state = {
      video: props.video
    };
  }

  public render() {
    const {classes, onSubmit, video} = this.props;

    return <Card>
      <CardContent>
        <form className={classes.container} noValidate={true} autoComplete="off">
          <TextField
            id="title"
            label="Title"
            fullWidth={true}
            onChange={this.handleChange('title')}
            defaultValue={video.title}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="url"
            label="Video URL"
            onChange={this.handleChange('url')}
            defaultValue={video.url}
            className={classes.textField}
            margin="normal"
            required={true}
          />
          <TextField
            id="description"
            label="Description"
            multiline={true}
            onChange={this.handleChange('description')}
            defaultValue={video.description}
            className={classes.textField}
            margin="normal"
          />
          <div className={classes.buttonsContainer}>
            <Button className={classes.buttons} variant="contained" color="primary" onClick={() => onSubmit(this.state.video)}>
              Submit
            </Button>
            <Link to='/'>
              <Button className={classes.buttons}>
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>;
  }

  private handleChange = (name: string) => (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      video: {
        ...this.state.video,
        [name]: event.currentTarget.value
      }
    });
  };
};

export default withStyles(styles)(VideoForm);
