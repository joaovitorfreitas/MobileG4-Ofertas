import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native';


export default function UserRegister( { navigation }) {

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <View> 
                <Text>Por Favor,Coloque as suas informações:</Text>
            </View>
          <StatusBar style="auto" hidden={true}/>

          <View>
          <Text>Nome: </Text>
            <TextInput
            style={styles.input}    
            /> 

          <Text>Email: </Text>
            <TextInput
            style={styles.input}    
            />       

          <Text>Senha: </Text>
            <TextInput
            style={styles.input}    
            />    

            <Text>Confirmação de senha: </Text>
            <TextInput
            style={styles.input}    
            />     

             <TouchableOpacity
              onPress={() => navigation.navigate("UserRegister")}
            > 
            <Text>Cadastrar</Text>
            </TouchableOpacity>  
            </View>
            </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    }
});
