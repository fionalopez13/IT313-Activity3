import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import fetchServices from "../services/fetchServices";
import Toast from 'react-native-root-toast';


export default function LoginForm({ navigation }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showRePass, setShowRePass] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const showToast = (message = "Something went wrong") => {
    Toast.show(message, 3000);
  };

  const handleRegistration = async () => {
    try {
      setLoading(true);

      if (name === "" || email === "" || password === "" || repassword === "") {
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if (password !== repassword) {
        showToast("Please match the password");
        setIsError(true);
        return false;
      }

      const url = "http://192.168.18.44:8081/api/register";
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };
 

      const result = await fetchServices.postData(url, data);
      
      if (result?.message != null) {
        showToast(result?.message);
      } else {

        setTimeout(() => {
          navigation.navigate("Login");
          }, 1000);

      }
    } catch (e) {  
      console.error('Error during registration:', e);
      showToast('Something went wrong during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium"
            style={{ 
              color: "white", 
              fontWeight: "bold",
              marginLeft: 98}}>REGISTER</Text>

      <TextInput
        mode="outlined"
        placeholder="Name"
        label="Name"
        style={{ marginTop: 20 }}
        value={name}
        onChangeText={setName}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        value={email}
        onChangeText={setEmail}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
        value={password}
        onChangeText={setPassword}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Re-type Password"
        label="Re-type Password"
        secureTextEntry={!showRePass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ marginTop: 10, marginBottom: 20 }}
        value={repassword}
        onChangeText={setRepassword}
        error={isError}
      />

    


      <Button
        onPress={handleRegistration}
        disabled={loading}
        loading={loading}
        mode="contained"
        style={{ 
          marginTop: 15,
          backgroundColor: "#F4F27E",
          borderColor: 'brown',
          borderRadius: 10, 
          borderWidth: 1 }}
      >
        <Text style={{
                color: "brown",
                fontWeight: "bold"}}>Register</Text></Button>
                
      <Button
        disabled={loading}
        onPress={() => navigation.pop()}
        mode="contained"
        style={{ 
          marginTop: 10,
          backgroundColor: "#F4F27E",
          borderColor: 'brown',
          borderRadius: 10, 
          borderWidth: 1 }}
      >
        
        <Text style={{
                color: "brown",
                fontWeight: "bold"}}>Go Back</Text>
      </Button>
    </View>
  );
}
