import { call, put, takeEvery } from "redux-saga/effects";
import { login, logout } from "../redux_toolkit/user/userSlice";
import { API } from "../server/API";

function* userLoginSaga(action) {
  try {
    const response = yield call(API, {
      endPoint: "signin",
      method: "POST",
      isLogin: true,
      param: {
        client_data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      },
    });
    yield put(login(response));
    console.log(response)
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeEvery(login().type, userLoginSaga);
}

export default loginSaga;
