import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NavPage from "./NavPage";

const GlobalState = () => {
  const [userInfo, setUserInfo] = useState({});
  return (
    <NavPage
      changeProps={(json) => {
        setUserInfo(json);
      }}
      userInfo={userInfo}
    />
  );
};

export default GlobalState;

const styles = StyleSheet.create({});
