import { Theme, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import PlusIcon from '@material-ui/icons/Add';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const styles = ({spacing}: Theme) => createStyles({
  button: {
    margin: spacing.unit,
  },
  extendedIcon: {
    marginRight: spacing.unit,
  },
});

interface IAddButtonProps extends WithStyles<typeof styles>{
  to: string;
}

const AddButton: React.SFC<IAddButtonProps> = ({ classes, to, children }) => (
  <NavLink to={to}>
    <Button variant="extendedFab" color="secondary" className={classes.button}>
      <PlusIcon className={classes.extendedIcon} />
      {children}
    </Button>
  </NavLink>
);

export default withStyles(styles)(AddButton);
