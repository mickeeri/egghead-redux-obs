import { combineReducers } from 'redux';
import { IAction } from '../actions';
import { FETCH_USER, FETCH_USER_FULFILLED } from '../constans';
import IUser from '../models/IUser';

export interface IUsersState {
  current: IUser | null;
  users: string[];
  loading: boolean;
}

export interface IStoriesState {
  stories: any[];
  loading: boolean;
}

export interface IState {
  stories: IStoriesState;
  users: IUsersState;
}

const initialUserState: IUsersState = {
  current: null,
  loading: false,
  users: ['shakyshane', 'sindresorhus', 'substack', 'mickeeri'],
};

const initialStoriesState: IStoriesState = {
  loading: false,
  stories: [],
};

const userReducer = (
  state: IUsersState = initialUserState,
  action: IAction,
) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        current: null,
        loading: true,
      };
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const storiesReducer = (
  state: IStoriesState = initialStoriesState,
  action: IAction,
) => {
  return state;
};

const reducers = combineReducers({
  stories: storiesReducer,
  users: userReducer,
});

export default reducers;
