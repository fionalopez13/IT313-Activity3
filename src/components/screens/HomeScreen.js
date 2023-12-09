import { View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#6DB9EF",
      }}
    >
      <Button
        mode="contained"
        style={{ 
          marginTop: 10,
          backgroundColor: "#F4F27E",
          borderColor: 'brown',
          borderRadius: 10, 
          borderWidth: 1 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{
                      color: "brown",
                      fontWeight: "bold"}}>Logout</Text>
      </Button>
    </View>
  );
}
