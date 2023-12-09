import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import Toast from 'react-native-root-toast';
import { Formik } from "formik";
import * as Yup from "yup";
import fetchServices from "../services/fetchServices";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);

  const showToast = (message = "Something went wrong") => {
    Toast.show(message, 3000);
  };
  
  const handleLogin = async (values) => {
    try { 
      const url = "http://192.168.18.44:8081/api/login";
      const result = await fetchServices.postData(url, values);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {
        return (
          
          
          <View styles={{ justifyContent: 'center', flexDirection: 'row', }}>

            <Text variant="displayMedium" 
                  style={{ 
                    color: "white", 
                    fontWeight: "bold",
                    marginLeft: 130}}>
                    LOGIN</Text>

            <TextInput
              mode="outlined"
              placeholder="Email"
              label="Email"
              left={<TextInput.Icon icon="email" />}
              style={{ marginTop: 10 }}
              defaultValue={values.email}
              value={values.email}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email && touched.email}
              onFocus={() => setTouched({ email: true }, false)}
            />
            {errors.email && touched.email && (
              <HelperText type="error" visible={errors.email}>
                {errors.email}
              </HelperText>
            )}

            <TextInput
              mode="outlined"
              placeholder="Password"
              label="Password"
              left={<TextInput.Icon icon="lock" />}
              secureTextEntry={!showPass}
              right={
                <TextInput.Icon
                  icon={showPass ? "eye" : "eye-off"}
                  onPress={() => setShowPass(!showPass)}
                />
              }
              style={{ marginTop: 10 }}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password && touched.password}
              onFocus={() => setTouched({ password: true }, false)}
            />
            {errors.password && touched.password && (
              <HelperText type="error" visible={errors.password}>
                {errors.password}
              </HelperText>
            )}


        <TouchableOpacity
                onPress={()=> navigation.navigate('Recovery')}>
            <Text style={{
                color: 'white',
                fontSize: 18,
                marginTop: 20,
                marginLeft: 120,
            }}>Forgot password?</Text>
        </TouchableOpacity>

            <Text style={{
                marginLeft: 14,
                marginTop: 30,
                color: '#D0D4CA'
            }}> ─────────────────────────── </Text>


            <Button
              loading={isSubmitting}
              disabled={isSubmitting}
              onPress={handleSubmit}
              mode="contained"
              style={{ 
                marginTop: 40, 
                backgroundColor: "#F4F27E",
                borderColor: 'brown',
                borderRadius: 10, 
                borderWidth: 1
            }}>
              <Text style={{
                      color: "brown",
                      fontWeight: "bold"}}>Login</Text></Button>


            <Button
              disabled={isSubmitting}
              onPress={() => navigation.navigate("Register")}
              mode="contained"
              style={{ 
                marginTop: 10,
                backgroundColor: "#F4F27E",
                borderColor: 'brown',
                borderRadius: 10, 
                borderWidth: 1 
            }}>
              <Text style={{
                      color: "brown",
                      fontWeight: "bold"}}>Create New Account</Text></Button>
          </View>
        );
      }}
    </Formik>
  );
}
