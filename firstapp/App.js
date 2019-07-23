import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Login from "./screens/Login";

class App extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 12 }}>Hi Will</Text>
        <Login />
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
