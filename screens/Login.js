import { StyleSheet, View, Button, Text } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { userLogin, userLogout } from "../redux/User/actions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  const logout = () => {
    dispatch(userLogout());
    setUsername("");
    setPassword("");
  };

  const login = (param) => {
    dispatch(userLogin(param));
  };

  return (
    <View style={styles.container}>
      {!user?.userInfo?.isLogin ? (
        /* Login View */
        <View>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={(newText) => setUsername(newText)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
          />
          <View style={styles.btnContainer}>
            <Button
              title="Login"
              onPress={() => {
                login({ username, password });
              }}
            />
          </View>
        </View>
      ) : (
        /* Logout View */
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Login Successful
          </Text>
          <Text style={{ fontSize: 15, marginVertical: 10 }}>
            Your username : {user?.userInfo?.username}
          </Text>
          <Button title="Logout" onPress={() => logout()} />
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  btnContainer: {
    marginHorizontal: 15,
  },
});
