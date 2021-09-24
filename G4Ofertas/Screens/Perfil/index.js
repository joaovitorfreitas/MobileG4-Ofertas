import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import login from '../Login/index'



export default function Perfil( { navigation }) {

    
    return(
      <SafeAreaView style={styles.container}>
            <View style={styles.container2}> 
            <Image
                style={styles.imgPerfil}
                source={require("../../assets/usuariomasculinoperfil.png")}
            />
            
            <View style={{width:"60%"}}> 
              <Text style={styles.txtPerfil}>Nome:</Text>
            </View>
            <TextInput
            style={styles.input}    
            />
            <View style={{width:"60%"}}> 
              <Text style={styles.txtPerfil}>Email:</Text>
            </View>      
            <TextInput
            style={styles.input}    
            />   
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
          borderRadius: 15,
          alignItems:"center",
    
        },
        txtPerfil:{
          color: "#D95843",
          marginTop:"13%",
          alignSelf:"flex-start",
          fontSize: 19
        },
        imgPerfil:{
          marginTop:"8%",
        },
        input:{
          borderWidth: 2,
          width: "60%",
          borderColor: "#733BE3",
          backgroundColor: "#FFFFFF",
          borderRadius: 6,
          marginBottom: "5%",
        }
});
