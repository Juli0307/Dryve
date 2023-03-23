// @ts-nocheck
import {
  applyMiddleware,
  CombinedState,
  combineReducers,
  Reducer,
} from 'redux';
import { catalogInformation } from './reducer';
import { ActionType } from './reducer';
import { Iproduct } from './types';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import rootSaga from './rootSaga';

export interface ApplicationState {
  catalogInformation: Iproduct[];
}

const sagaMiddleware = createSagaMiddleware();

export const appReducers: Reducer<
  CombinedState<{ catalogInformation: Iproduct }>,
  { type: ActionType; payload: Iproduct }
> = combineReducers({
  catalogInformation,
});

export const store = createStore(appReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
