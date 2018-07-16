import { IAction } from '../actions';

export interface IState {
  items: any[];
}

const initialState: IState = {
  items: [],
};

const storiesReducer = (state = initialState, action: IAction) => {
  return state;
};

export default storiesReducer;
