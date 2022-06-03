import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Login} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavPage = ({userInfo, changeProps}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return route.name === 'Home' ? (
              <Text
                style={{color: focused ? 'blue' : 'gray', fontWeight: '700'}}>
                Home
              </Text>
            ) : (
              <Text
                style={{color: focused ? 'blue' : 'gray', fontWeight: '700'}}>
                Login
              </Text>
            );
          },
        })}>
        <Tab.Screen name="Home">
          {() => <Home userInfo={userInfo} changeProps={changeProps} />}
        </Tab.Screen>
        <Tab.Screen name="Login">
          {() => <Login userInfo={userInfo} changeProps={changeProps} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavPage;

const styles = StyleSheet.create({
  txtLabel: {
    color: 'blue',
  },
});
