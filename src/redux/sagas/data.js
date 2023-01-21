import { put, call, takeEvery } from "redux-saga/effects";
import { getDataRequest } from "../../api";
import { fetchData } from "../actions/data";
import { REQUEST_DATA } from "../actionTypes";

export function* getDataSaga() {
  const data = yield call(getDataRequest);
  yield put(fetchData(data));
}

export function* watchData() {
  yield takeEvery(REQUEST_DATA, getDataSaga);
}
