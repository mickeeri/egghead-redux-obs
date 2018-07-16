import { combineEpics, Epic } from 'redux-observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { fetchUserFulfilledAction, IAction } from '../actions';
import { FETCH_USER } from '../constans';
import { IState } from '../reducers';

const fetchUsersEpic: Epic<IAction, IState> = (action$, state) => {
  return action$.ofType(FETCH_USER).switchMap(({ payload }) => {
    return Observable.ajax
      .getJSON(`https://api.github.com/users/${payload}`)
      .map(user => {
        return fetchUserFulfilledAction(user);
      });
  });
};

const epics = combineEpics(fetchUsersEpic);

export default epics;
