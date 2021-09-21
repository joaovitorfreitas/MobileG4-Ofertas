import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native';


export default function Login( { navigation }) {

  return (
    <SafeAreaView style={styles.container}>
              
        <View style={styles.BckgroundLogin}>
          <Image
            source={require("../../")}
          />
        </View>
        <View style={styles.LoginRedondo}>
          <Text>Login</Text>
        </View>
          <View style={styles.ctctn}>
            <Text>Bem-vindo!</Text>

            <Text>Email: </Text>
            <TextInput
            style={styles.input}    
            /> 

            <Text>Senha : </Text>
            <TextInput
            style={styles.input}    
            />          

            <TouchableOpacity
              onPress={() => navigation.navigate("UserRegister")}
            >
              <Text>Login</Text>
            </TouchableOpacity>  
          </View>
          <StatusBar style="auto" 
                hidden={true}
              />
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    },
  input: {
    borderWidth: 1,
  },
  BckgroundLogin: {
    backgroundColor: "#733BE3",
    width: "100%",
    height: "35%",
    alignItems: 'center',
  },
  LoginRedondo:{
    backgroundColor: "#733BE3",
    width: "65%",
    height: "18%",
    borderRadius: 40,
  },
});
