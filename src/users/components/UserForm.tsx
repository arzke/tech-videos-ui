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
import { IUser } from 'users/users';

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

interface IUserFormProps extends WithStyles<typeof styles> {
  onSubmit: (user: IUser) => void;
  user: IUser
}

interface IUserFormState {
  user: IUser
}

class UserForm extends React.Component<IUserFormProps, IUserFormState> {
  public constructor(props: IUserFormProps) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  public render() {
    const {classes, onSubmit, user} = this.props;

    return <Card>
      <CardContent>
        <form className={classes.container} autoComplete="off" noValidate={true}>
          <TextField
            id="firstName"
            label="First name"
            onChange={this.handleChange('firstName')}
            defaultValue={user.firstName}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="lastName"
            label="Last name"
            onChange={this.handleChange('lastName')}
            defaultValue={user.lastName}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            onChange={this.handleChange('email')}
            defaultValue={user.email}
            className={classes.textField}
            margin="normal"
          />
          <div className={classes.buttonsContainer}>
            <Button className={classes.buttons} variant="contained" color="primary" onClick={() => onSubmit(this.state.user)}>
              Submit
            </Button>
            <Link to='/users'>
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
      user: {
        ...this.state.user,
        [name]: event.currentTarget.value
      }
    });
  };
};

export default withStyles(styles)(UserForm);
