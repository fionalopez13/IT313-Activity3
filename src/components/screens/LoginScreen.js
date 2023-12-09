import { View } from "react-native";
import React from "react";
import LoginForm from "../forms/LoginForm";

export default function LoginScreen(props) {
  return (
    <View style={{
        flex: 1,
        padding: 30,
        justifyContent: "center",
        backgroundColor: "#6DB9EF",
      }}
    >
      <LoginForm {...props} />
    </View>
  );
}
