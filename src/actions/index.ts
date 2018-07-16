import { createAction } from 'typesafe-actions';
import {
  FETCH_STORIES_FULFILLED,
  FETCH_USER,
  FETCH_USER_FULFILLED,
} from '../constans';

export interface IAction {
  type: string;
  payload?: {};
  params?: {};
}

export const fetchStoriesFulfilledAction = createAction(
  FETCH_STORIES_FULFILLED,
  stories => ({
    payload: stories,
    type: FETCH_STORIES_FULFILLED,
  }),
);

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
