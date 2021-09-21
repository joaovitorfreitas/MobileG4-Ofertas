import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, useWindowDimensions } from 'react-native';


export default function UserRegister( { navigation }) {

  return (
    <SafeAreaView style={styles.container}>
            <View> 
                <Text>TESTE</Text>
            </View>
          <StatusBar style="auto" hidden={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    }
});
