import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native';


export default function Login( { navigation } ) {

  return (
    <SafeAreaView style={styles.container}>
              
        <View style={styles.BckgroundLogin}>
          <Image
            source={require("../../assets/Mobilelogin.png")}
          />
        </View>
        <View style={styles.LoginRedondo}>
          <Text  style={{color: "#FFFF", fontSize: 26, marginBottom: "20%"}}>Login</Text>
        </View>
          <View style={styles.ctctn}>
            <Text style={{fontSize: 23, fontWeight: 'bold', color: "#733BE3"}}>Bem-vindo!</Text>

            <Text style={styles.TextUpInput}>Email: </Text>
            <TextInput
            style={styles.input}     
            /> 

            <Text style={styles.TextUpInput}>Senha : </Text>
            <TextInput
            style={styles.input}    
            />          

               <View style={styles.viewdsplay}> 
            <TouchableOpacity
              style={styles.btnDisplayRoxo}
              onPress={() => navigation.navigate("Perfil")}
            >
              <Text style={styles.btnDisplayText}>Login</Text>
            </TouchableOpacity>  

            <View style={{flexDirection:'row'}}>
            <Text style={styles.TextDownPage}>Esqueceu a senha? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("PasswdPage")}><Text style={styles.Linkpage}>Clique Aqui</Text></TouchableOpacity> 
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.TextDownPage}>Não tem um Login?  </Text>
            <TouchableOpacity onPress={() => navigation.navigate("UserRegister")}><Text style={styles.Linkpage}>Cadastre-se</Text></TouchableOpacity>
            </View>



            <StatusBar style="auto" 
                hidden={true}
            />
              </View>
          </View>
          
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDEAF2',
    alignItems: 'center',
    },

  input: {
    borderWidth: 2,
    width: "60%",
    borderColor: "#733BE3",
    backgroundColor: "#FFFFFF",
    borderRadius: 6

  },
  BckgroundLogin: {
    backgroundColor: "#733BE3",
    width: "100%",
    alignItems: 'center',
  },
  LoginRedondo:{
    backgroundColor: "#733BE3",
    width: "55%",
    height: "10%",
    borderBottomLeftRadius: 125,
    borderBottomRightRadius: 125,
    alignItems: "center",
    justifyContent: 'center'
  },
  ctctn:{
    width: "100%",
    marginTop: "4%",
    backgroundColor: "#EDEAF2",
    height: "100%",
    alignItems:"center"
  },
  TextUpInput:{
    marginTop: "5%",
    marginBottom: "1%",
    fontSize: 18,
    color: "#D95843"
  },
  TextDownPage:{
    marginTop: "3%",
    fontSize: 14,
    color: "#D95843"
  },
  btnDisplayRoxo :{
    backgroundColor: "#733BE3",
    height: "20%",
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 6
  },
  btnDisplayText:{
    color: "#FFFFFF",
  },
  viewdsplay: {
    marginTop: "3%",
    width: "60%",
  },
  Linkpage:{
    color: "#733BE3",
    textDecorationLine: 'underline',
    fontSize: 15,
    marginTop: 3

  }
});
