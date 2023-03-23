import { ForkEffect, put, takeLatest } from 'redux-saga/effects';

import { CatalogTypes, Iproduct } from './types';
import { getCatalogInformation } from '../services/api';

function* fetchCatalog() {
  try {
    // @ts-ignore
    const response = yield getCatalogInformation();

    const catalogData: Iproduct[] = response.data;

    yield put({ type: 'FETCH_CATALOG_SUCCESS', payload: catalogData });
  } catch (error) {
    yield put({ type: 'FETCH_CATALOG_FAILURE', payload: { error } });
  }
}

export function* watchLoad(): Generator<ForkEffect<never>> {
  yield takeLatest(CatalogTypes.GET_CATALOG_INFORMATION, fetchCatalog);
}
