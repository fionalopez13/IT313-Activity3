import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function RecoveryScreen() {
    const navigation = useNavigation();

    return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#6DB9EF'}}>
    

    <View style={{justifyContent: 'center', backgroundColor: '#6DB9EF'}}>
    <Text style={{
            color: 'white',
            fontSize: 40, 
            fontWeight:'bold',
            marginLeft: 40,
            }}>Recover Your Account</Text>
        </View>
    
    <Text style={{
            color: 'white',
            fontSize: 17, 
            fontWeight:'bold',
            marginLeft: 55,
            marginTop: 10
            }}>You'll receive an email with a password reset</Text>

    <Text style={{
            color: 'white',
            fontSize: 20,
            paddingTop: 30,
            paddingLeft: 30,
            }}>Email Address</Text>

    <TextInput style={{
            backgroundColor: '#E0E0E0',
            marginTop: 13,
            marginLeft: 30,
            height: 40,
            width: 350,
            borderWidth: 1,
            borderColor: '#A5A5A5',
            borderRadius: 10,
            }} keyboardType='email-address' placeholder='  Enter Email'></TextInput>

    <TouchableOpacity 
        onPress={()=> navigation.navigate('Login')}
            style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            width: 348,
            backgroundColor: '#F4F27E',
            borderColor: 'brown',
            borderRadius: 10, 
            borderWidth: 1,
            marginTop: 40,
            marginLeft: 33}}>
        
        <Text style={{
            color: 'brown',
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 96,
            }}>Recover Account</Text> 
    </TouchableOpacity>
    
    </View>
    )
}