export const api =
  ({ endPoint, method, param, isLogin = false, action }) =>
  async (dispatch, getState) => {
    const { userInfo } = getState().user;
    try {
      const response = await fetch(
        `http://i-web.com.vn/api/v1/auth/` + endPoint,
        {
          method: method,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: isLogin ? null : "Bearer " + userInfo?.accessToken,
          },
          body: JSON.stringify(param),
        }
      );
      const json = await response.json();
      // console.log("response API: ", json);
      await dispatch(action(json));
    } catch (error) {
      console.log(error);
    }
  };
