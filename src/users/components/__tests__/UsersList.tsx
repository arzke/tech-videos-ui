import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import UsersList from 'users/components/UsersList';
import { IUser } from 'users/users';

let usersList: ShallowWrapper;

const createUsersList = (users: IUser[]): ShallowWrapper => {
  return shallow(<UsersList users={users} />);
};

describe('when there are users', () => {
  beforeEach(() => {
    usersList = createUsersList([
      {
        email: 'bruno@foo.com',
        firstName: 'Bruno',
        id: 1,
        lastName: 'Arsene',
      },
      {
        email: 'john@foo.com',
        firstName: 'John',
        id: 1,
        lastName: '' +
        'Doe',
      }
    ]);
  });

  test('there is a button to create a new user', () => {
    const addUserButton = usersList.find('WithStyles(AddButton)');

    expect(addUserButton).toHaveLength(1);
    expect(addUserButton.prop('to')).toEqual('/users/add');
    expect(addUserButton.childAt(0).text()).toEqual('Add new user');
  });

  test('it displays the heading of the table', () => {
    const headerCells = usersList.find('WithStyles(TableHead) WithStyles(TableCell)');
    expect(headerCells).toHaveLength(3);

    expect(childAtText(headerCells, 0)).toEqual('Name');
    expect(childAtText(headerCells, 1)).toEqual('Email');
    expect(childAtText(headerCells, 2)).toEqual('Actions');
  });

  test('it displays one row per user', () => {
    const userRows = usersList.find('.user-row');
    expect(userRows).toHaveLength(2);

    const firstUserRow = userRows.at(0);
    expect(childAtText(firstUserRow.find('WithStyles(TableCell)'), 0)).toEqual('Bruno Arsene');
    expect(childAtText(firstUserRow.find('WithStyles(TableCell)'), 1)).toEqual('bruno@foo.com');

    const secondUserRow = userRows.at(1);
    expect(childAtText(secondUserRow.find('WithStyles(TableCell)'), 0)).toEqual('John Doe');
    expect(childAtText(secondUserRow.find('WithStyles(TableCell)'), 1)).toEqual('john@foo.com');
  });
});

function childAtText(node: ShallowWrapper, at: number) {
  return node.at(at).childAt(0).text();
}
