import Table from '@material-ui/core/Table/Table';
import TableBody from '@material-ui/core/TableBody/TableBody';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import AddButton from 'app/components/buttons/AddButton';
import DeleteButton from 'app/components/buttons/DeleteButton';
import EditButton from 'app/components/buttons/EditButton';
import * as React from 'react';
import { IUser } from 'users/users';

interface IUsersListProps {
  users: IUser[],
}

const UsersList: React.SFC<IUsersListProps> = ({ users = [] }) => {
  return <>
      <AddButton to='/users/add'>
        Add new user
      </AddButton>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { users.map(user => (
            <TableRow key={user.id} className="user-row">
              <TableCell>
                <span className="user-full-name">{user.firstName} {user.lastName}</span>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <EditButton to={`/users/${user.id}/edit`}/>
                <DeleteButton/>
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </>;
};

export default UsersList;
