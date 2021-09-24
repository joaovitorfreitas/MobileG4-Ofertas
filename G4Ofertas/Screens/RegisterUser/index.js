import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native';


export default function UserRegister( { navigation }) {

  return (
    <SafeAreaView >
       <View style={styles.container}>
          <View style={styles.container2}>
                <View style={{alignSelf: "center", flexDirection: "row", marginTop: "2%"}}> 

                  <View style={{marginLeft: "18%"}}>
                    <Text style={{marginTop: "7%", fontSize: 16}}>Por Favor, Coloque as</Text>
                    <Text style={{fontSize: 16}}>suas informações:</Text>
                  </View>      

                    <TouchableOpacity 
                      onPress={() => navigation.goBack()}
                      style={{marginTop: "5%",  width: "20%", height: "60%"}}>
                        <Image
                          style={styles.ViewSeta}
                          source={require("../../assets/curva-de-seta.png")}
                        />  
                      
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:'center', justifyContent:"center", height: "100%" }}>

                    <View style={styles.TextViewCad}>
                      <Text style={styles.TextCad}>Nome: </Text>
                    </View>

                      <TextInput
                      style={styles.input}    
                      /> 
                      
                    <View style={styles.TextViewCad}>
                      <Text style={styles.TextCad}>Email: </Text>
                    </View>

                      <TextInput
                      style={styles.input}    
                      />       

                    <View style={styles.TextViewCad}>
                      <Text style={styles.TextCad}>Senha: </Text>
                    </View>
                      <TextInput
                      style={styles.input}    
                      />    
                    <View style={styles.TextViewCad}>
                      <Text style={styles.TextCad}>Confirmação de senha: </Text>
                    </View>
                    
                      <TextInput
                      style={styles.input}    
                      />     

                      
                    <View style={styles.btnContainerCad}>
                    <TouchableOpacity
                        style={styles.btnDisplayRoxo}
                        onPress={() => navigation.goBack()}
                      >
                        <Text style={styles.btnDisplayText}>Cadastrar</Text>
                      </TouchableOpacity> 
                      
                    </View>
           
                  </View>
          </View>
       </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#733BE3',
    height: "100%",
    width: "100%",
    justifyContent:"center",
    alignItems: "center"
    },
    container2: {
      backgroundColor: '#EDEAF2',
      height: "85%",
      width: "90%",
      borderRadius: 15

    },
    input:{
      borderWidth: 2,
      width: "60%",
      borderColor: "#733BE3",
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      marginBottom: "5%",
    },
    btnDisplayRoxo :{
      backgroundColor: "#733BE3",
      height: "28%",
      alignItems: 'center',
      justifyContent: "center",
      borderRadius: 15,
      width: "80%",
      marginTop:"5%"

    },
    btnDisplayText:{
      color: "#FFFFFF",
      fontSize: 19
    },
    TextViewCad:{
      marginBottom:"2%",
      width:"60%",
      alignItems: "flex-start",
    },
    btnContainerCad:{
      width:"60%",
      alignItems: "flex-end",

    },
    TextCad:{
       fontSize: 16
    },
    ViewSeta:{
      position: "absolute",
      left: 20
    }

});
