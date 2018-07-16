import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchUserAction } from '../actions';
import IUser from '../models/IUser';
import { IState } from '../reducers';
import User from './User';

interface IUsersProps {
  users: string[];
  loading: boolean;
  current: IUser | null;
  loadUser: (login: string) => void;
}

const Users = ({ users, loadUser, loading, current }: IUsersProps) => {
  return (
    <div>
      <h1>users</h1>

      <ul>
        {users.map(login => (
          <li key={login}>
            <p>{login}</p>
            <button onClick={() => loadUser(login)}>Load user</button>
          </li>
        ))}
      </ul>

      {loading && <p>Please wait</p>}
      {current && <User {...current} />}
    </div>
  );
};

function mapState(state: IState) {
  return state;
}

function mapDispatch(dispatch: Dispatch<string>) {
  return {
    loadUser: (login: string) => dispatch(fetchUserAction(login)),
  };
}

export default connect(
  mapState,
  mapDispatch,
)(Users);
