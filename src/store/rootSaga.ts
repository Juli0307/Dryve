import { all, AllEffect, ForkEffect, fork } from 'redux-saga/effects';

import { watchLoad as watchCatalogLoad } from './sagas';

export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>> {
  yield all([fork(watchCatalogLoad)]);
}
