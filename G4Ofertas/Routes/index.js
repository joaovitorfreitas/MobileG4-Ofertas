import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import login from '../Screens/Login/index'
import Perfil from '../Screens/Perfil/index'
import UserRegister from '../Screens/RegisterUser/index'
import ListarProduto from '../Screens/ListarProduto/index'
import PerfilProduto from '../Screens/PerfilProduto/index'



const StackHome = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


export default function Route() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen name="login" component={login}   options={{headerShown: false}}/>
      <StackHome.Screen name="UserRegister" component={UserRegister}   options={{headerShown: false}}/>
        <StackHome.Screen name="Perfil" options={{headerShown: false}}>{() => (
          <Tab.Navigator initialRouteName="Perfil" options={{headerShown: false}}>
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="ListarProduto" component={ListarProduto} />
            <Tab.Screen name="Ofertas" component={ListarProduto} />
          </Tab.Navigator>)}
        </StackHome.Screen>
    </StackHome.Navigator>
        
  );
}

