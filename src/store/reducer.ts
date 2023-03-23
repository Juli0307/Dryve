import { Reducer } from 'redux';
import { ICartState, Iproduct } from './types';

export const INITIAL_STATE: Iproduct[] = [];

export type ActionType =
  | 'GET_CATALOG_INFORMATION'
  | 'FETCH_CATALOG_SUCCESS'
  | 'FETCH_CATALOG_ERROR';

export const catalogInformation = (
  state: Iproduct[] = INITIAL_STATE,
  action: { type: ActionType; payload: Iproduct[] | null }
) => {
  switch (action.type) {
    case 'GET_CATALOG_INFORMATION':
      return state;
    case 'FETCH_CATALOG_SUCCESS':
      return action.payload;
    case 'FETCH_CATALOG_ERROR':
      return action.payload;
    default:
      return state;
  }
};
