import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native';


export default function PasswdPage( { navigation }) {

  
 return (
    <SafeAreaView style={styles.container}>
        <View>
            <View> 
                <Text>Recuperar senha:</Text>
            </View>
          <StatusBar style="auto" hidden={true}/>

          <View>
          <Text>Email: </Text>
            <TextInput
            style={styles.input}    
            /> 

          <Text>Enviaremos um email de confirmação para mudarmos sua senha </Text>
            <TextInput
            style={styles.input}    
            />       

            <TouchableOpacity
              onPress={() => navigation.navigate("UserRegister")}
            > 
            <Text>Enviar</Text>
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
