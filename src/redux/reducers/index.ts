import { combineReducers } from 'redux';

import { Todo } from '../actions/todos';
import { todosReducer } from './todos';

export interface StoreState {
  todos: Todo[];
}

export const rootReducer = combineReducers<StoreState>({
  todos: todosReducer,
});
