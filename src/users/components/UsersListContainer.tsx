import apiService from 'app/http/apiService';
import { Notification } from "element-react";
import * as React from 'react';
import UsersList from 'users/components/UsersList';
import { IUser } from 'users/users';

interface IUsersListContainerState {
  users: IUser[]
}

class UsersListContainer extends React.Component<{}, IUsersListContainerState> {
  public state = {
    users: []
  };

  public async componentDidMount() {
    try {
      const {data: {_embedded: {users}}} = await apiService.get('/users');
      this.setState({
        users
      });
    } catch(error) {
      Notification({
        message: 'Could not fetch users list.',
        title: 'Error',
        type: 'error',
      });
    }
  }

  public render() {
    return <UsersList users={this.state.users}/>;
  }
}

export default UsersListContainer;
