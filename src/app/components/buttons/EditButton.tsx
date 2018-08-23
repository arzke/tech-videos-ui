import { Theme, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import EditIcon from '@material-ui/icons/Edit';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const styles = ({spacing}: Theme) => createStyles({
  button: {
    margin: spacing.unit,
  },
  rightIcon: {
    marginLeft: spacing.unit,
  },
});

interface IEditButtonProps extends WithStyles<typeof styles>{
  to: string;
}

const EditButton: React.SFC<IEditButtonProps> = ({ classes, to }) => (
  <NavLink to={to}>
    <Button variant="contained" color="primary" className={classes.button}>
      Edit
      <EditIcon className={classes.rightIcon} />
    </Button>
  </NavLink>
);

export default withStyles(styles)(EditButton);
