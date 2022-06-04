import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      {user?.userInfo?.accessToken ? (
        <Text style={{ fontSize: 25 }}>WELCOME TO HOME PAGE</Text>
      ) : (
        <Text style={{ fontSize: 20 }}>PLEASE LOGIN TO SEE INFO</Text>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
