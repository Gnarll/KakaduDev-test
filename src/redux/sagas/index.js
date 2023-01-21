import { all } from "redux-saga/effects";
import { watchData } from "./data";

export default function* rootSaga() {
  yield all([watchData()]);
}
