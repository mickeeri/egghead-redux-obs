import { combineEpics, Epic, Options } from 'redux-observable';
import { forkJoin, from } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import {
  fetchStoriesFulfilledAction,
  fetchUserFulfilledAction,
  IAction,
} from '../actions';
import { FETCH_STORIES, FETCH_USER } from '../constans';

const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const getStoryUrl = (id: string) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

const getData = (url: string) => {
  return fetch(url).then(r => {
    return r.ok ? r.json() : Promise.reject(`${r.statusText} ${r.status}`);
  });
};

const fetchStoriesEpic: Options<any> = action$ => {
  return action$.ofType(FETCH_STORIES).pipe(
    switchMap(({ payload }) => {
      return from(getData(topStories)).pipe(
        map((ids: string[]) => ids.slice(0, 5)),
        map((ids: string[]) => ids.map(getStoryUrl)),
        map((urls: string[]) => urls.map((url: string) => from(getData(url)))),
        mergeMap(reqs => forkJoin(reqs)),
        map(stories => fetchStoriesFulfilledAction(stories)),
      );
    }),
  );
};

const fetchUsersEpic: Options<any> = action$ => {
  return action$.ofType(FETCH_USER).pipe(
    switchMap(({ payload }) => {
      return from(getData(`https://api.github.com/users/${payload}`)).pipe(
        map(user => fetchUserFulfilledAction(user)),
      );
    }),
  );
};

const epics = combineEpics(fetchUsersEpic, fetchStoriesEpic);

export default epics;
