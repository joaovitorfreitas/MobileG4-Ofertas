import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';


export default function PerfilProduto( { navigation }) {

  return (
    <ScrollView style={styles.container}>
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
  </ScrollView>      
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#733BE3',
    height: "100%",
    width: "100%",
    },
    container2: {
      backgroundColor: '#EDEAF2',
      height: "85%",
      width: "90%",
      borderRadius: 15

    }
  
});

