import { createAction } from 'typesafe-actions';
import { FETCH_USER, FETCH_USER_FULFILLED } from '../constans';

export interface IAction {
  type: string;
  payload?: {};
  params?: {};
}

export const clear = createAction('hello', (params = {}) => ({
  params,
  type: 'hello',
}));

export const fetchUserAction = createAction(FETCH_USER, login => ({
  payload: login,
  type: FETCH_USER,
}));

export const fetchUserFulfilledAction = createAction(
  FETCH_USER_FULFILLED,
  user => ({
    payload: user,
    type: FETCH_USER_FULFILLED,
  }),
);
