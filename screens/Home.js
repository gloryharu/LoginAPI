import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = props => {
  const {userInfo} = props;

  return (
    <View style={styles.container}>
      {userInfo?.accessToken ? (
        <Text style={{fontSize: 25}}>WELCOME TO HOME PAGE</Text>
      ) : (
        <Text style={{fontSize: 20}}>
          PLEASE LOGIN TO SEE INFO
        </Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
