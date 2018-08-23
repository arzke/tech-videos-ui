import { Theme, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Notification } from 'element-react';

import * as React from 'react';

const styles = ({spacing}: Theme) => createStyles({
  button: {
    margin: spacing.unit,
  },
  rightIcon: {
    marginLeft: spacing.unit,
  },
});

interface IDeleteButtonProps extends WithStyles<typeof styles> {
}

const DeleteButton: React.SFC<IDeleteButtonProps> = ({ classes }) => (
  <Button variant="contained" color="secondary" className={classes.button} onClick={() => Notification({
    message: 'This is not yet implemented.',
    title: 'Error',
    type: 'error',
  })}>
    Delete
    <DeleteIcon className={classes.rightIcon}/>
  </Button>);

export default withStyles(styles)(DeleteButton);
