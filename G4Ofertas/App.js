import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import login from './Screens/Login/index'
import UserRegister from './Screens/RegisterUser/index'
import Perfil from './Screens/Perfil/index'
import PasswdPage from './Screens/RecuperarSenha/index'

const AuthStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer  >
        <AuthStack.Navigator>
          <AuthStack.Screen name = 'Login'   component={login}  options={{headerShown: false}}/>
          <AuthStack.Screen name = 'UserRegister'   component={UserRegister}  options={{headerShown: false}}/>
          <AuthStack.Screen name = 'Perfil'   component={Perfil}  options={{headerShown: false}}/>
          <AuthStack.Screen name = 'PasswdPage'   component={PasswdPage}  options={{headerShown: false}}/>
          
    </AuthStack.Navigator>
  </NavigationContainer>
  );
}

