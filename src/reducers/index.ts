import { IAction } from '../actions';
import { FETCH_USER, FETCH_USER_FULFILLED } from '../constans';
import IUser from '../models/IUser';

export interface IState {
  current: IUser | null;
  users: string[];
  loading: boolean;
}

const initialState: IState = {
  current: null,
  loading: false,
  users: ['shakyshane', 'sindresorhus', 'substack', 'mickeeri'],
};

const userReducer = (state: IState = initialState, action: IAction) => {
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

export default userReducer;
