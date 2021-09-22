import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native';


export default function Perfil( { navigation }) {

    return(
        <SafeAreaView style={styles.container}>
                <View>
                    <View> 
                        <Text>Nome:</Text>
                        
                        <Text>Email: </Text>
                    <TextInput
                    style={styles.input}    
                    />   
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
