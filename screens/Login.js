import {StyleSheet, View, Button, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';

const Login = ({userInfo, changeProps}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logoutAPI = () => {
    changeProps(null);
    setUsername('');
    setPassword('');
  };

  const loginAPI = async () => {
    try {
      const response = await fetch('http://i-web.com.vn/api/v1/auth/signin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_data: {
            username: username,
            password: password,
          },
        }),
      });
      const json = await response.json();
      console.log('LOGIN: ', json?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {!userInfo?.isLogin ? (
        /* Login View */
        <View>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={newText => setUsername(newText)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={newPassword => setPassword(newPassword)}
          />
          <View style={styles.btnContainer}>
            <Button title="Login" onPress={() => loginAPI()} />
          </View>
        </View>
      ) : (
        /* Logout View */
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Login Successful
          </Text>
          <Text style={{fontSize: 15, marginVertical: 10}}>
            Your username : {userInfo.username}
          </Text>
          <Button title="Logout" onPress={() => logoutAPI()} />
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  btnContainer: {
    marginHorizontal: 15,
  },
});
