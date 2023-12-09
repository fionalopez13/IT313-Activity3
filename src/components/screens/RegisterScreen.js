import { View } from "react-native";
import React from "react";
import RegisterForm from "../forms/RegisterForm";

export default function RegisterScreen(props) {
  return (
    <View style={{ 
          flex: 1, 
          padding: 30, 
          justifyContent: "center",
          backgroundColor: "#6DB9EF" }}>
      <RegisterForm {...props} />
    </View>
  );
}
