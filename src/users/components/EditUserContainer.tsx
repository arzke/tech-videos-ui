import apiService from 'app/http/apiService';
import { Notification } from "element-react";
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import UserForm from 'users/components/UserForm';
import { IUser, IUSerIdInRoute } from 'users/users';

interface IEditUserContainerState {
  user: IUser
}

class EditUserContainer extends React.Component<RouteComponentProps<IUSerIdInRoute>, IEditUserContainerState> {
  public state = {
    user: {
      email: '',
      firstName: '',
      id: undefined,
      lastName: '',
    }
  };

  public async componentDidMount() {
    const {match: {params: {userId}}} = this.props;

    try {
      const {data: user} = await apiService.get(`/users/${userId}`);
      this.setState({
        user
      });
    } catch(error) {
      Notification({
        message: 'Could not retrieve the user',
        title: 'Error',
        type: 'error',
      });
    }
  }

  public editUser() {
    Notification({
      message: 'This is not yet implemented.',
      title: 'Error',
      type: 'error',
    });
  }

  public render() {
    return this.state.user.id && <UserForm user={this.state.user} onSubmit={this.editUser}/> || <p>Loading...</p>;
  }
}

export default EditUserContainer;
