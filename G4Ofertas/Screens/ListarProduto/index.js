import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';



export default function ListarProduto( { navigation }) {

  return (
    <ScrollView style={{backgroundColor:"#EDEAF2"}}>
      <View style ={{marginLeft: "15%"}}>
        <View style={{width:'80%', height:220, backgroundColor:'#733BE3', borderRadius:13, justifyContent:'center', alignItems:'center', marginTop:30}}>

         <Image
           style={styles.imgSize}
          source={require("../../assets/Banana.png")}
        />

        <View>
          <Text style={{marginLeft: 12, color:"#FFF"}}>Banana da terra</Text>              
        </View>
    
        <View style={{marginTop: 15}}> 
          <Text style={{fontSize:14, color: "#FFF"}}>Unidades: <Text style={{fontSize:12, color: "#FFF"}}>22</Text></Text>
        </View>
      </View> 
      </View>

      <View style ={{marginLeft: "15%"}}>
        <View style={{width:'80%', height:220, backgroundColor:'#733BE3', borderRadius:13, justifyContent:'center', alignItems:'center', marginTop:30}}>

         <Image
           style={styles.imgSize}
          source={require("../../assets/Banana.png")}
        />

        <View>
          <Text style={{marginLeft: 12, color:"#FFF"}}>Banana da terra</Text>              
        </View>
    
        <View style={{marginTop: 15}}> 
          <Text style={{fontSize:14, color: "#FFF"}}>Unidades: <Text style={{fontSize:12, color: "#FFF"}}>22</Text></Text>
        </View>
      </View> 
      </View>

      <View style ={{marginLeft: "15%"}}>
        <View style={{width:'80%', height:220, backgroundColor:'#733BE3', borderRadius:13, justifyContent:'center', alignItems:'center', marginTop:30}}>

         <Image
           style={styles.imgSize}
          source={require("../../assets/Banana.png")}
        />

        <View>
          <Text style={{marginLeft: 12, color:"#FFF"}}>Banana da terra</Text>              
        </View>
    
        <View style={{marginTop: 15}}> 
          <Text style={{fontSize:14, color: "#FFF"}}>Unidades: <Text style={{fontSize:12, color: "#FFF"}}>22</Text></Text>
        </View>
      </View> 
      </View>

      <View style ={{marginLeft: "15%"}}>
        <View style={{width:'80%', height:220, backgroundColor:'#733BE3', borderRadius:13, justifyContent:'center', alignItems:'center', marginTop:30}}>

         <Image
           style={styles.imgSize}
          source={require("../../assets/Banana.png")}
        />

        <View>
          <Text style={{marginLeft: 12, color:"#FFF"}}>Banana da terra</Text>              
        </View>
    
        <View style={{marginTop: 15}}> 
          <Text style={{fontSize:14, color: "#FFF"}}>Unidades: <Text style={{fontSize:12, color: "#FFF"}}>22</Text></Text>
        </View>
      </View> 
      </View>

      
  </ScrollView>

   
  );
}

const styles = StyleSheet.create({
  imgSize:{
    width:98,
    height:98,
    marginBottom:25,
    borderRadius: 15
  }

});

