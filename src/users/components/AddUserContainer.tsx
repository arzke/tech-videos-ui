import { Notification } from "element-react";
import * as React from 'react';
import UserForm from 'users/components/UserForm';
import { IUser } from 'users/users';

interface IAddUserContainerState {
  user: IUser
}

class AddUserContainer extends React.Component<{}, IAddUserContainerState> {
  public state = {
    user: {
      email: '',
      firstName: '',
      lastName: '',
    }
  };

  public addUser() {
    Notification({
      message: 'This is not yet implemented.',
      title: 'Error',
      type: 'error',
    });
  }

  public render() {
    return <UserForm user={this.state.user} onSubmit={this.addUser}/>;
  }
}

export default AddUserContainer;
