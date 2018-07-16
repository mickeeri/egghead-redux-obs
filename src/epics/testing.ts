import fetch from 'node-fetch';
import { forkJoin, from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

const topStories = `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`;
const storyUrl = (id: string) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

const getData = (url: string) => {
  return fetch(url).then(r => {
    return r.ok ? r.json() : Promise.reject(`${r.statusText} ${r.status}`);
  });
};

const result = from(getData(topStories)).pipe(
  map(ids => ids.slice(0, 5)),
  map(ids => ids.map(storyUrl)),
  map(urls => urls.map((url: string) => from(getData(url)))),
  mergeMap(reqs => forkJoin(reqs)),
);

result.subscribe(stories => {
  if (stories.length) {
    // tslint:disable-next-line:no-console
    console.log(stories[0]);
  }
});
