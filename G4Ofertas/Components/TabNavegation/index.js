import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import perfil from '../../Screens/Perfil/index'

const Tab = createMaterialBottomTabNavigator();


export default function TabNav( {navigation, route} ) {

    
    return(
            <Tab.Navigator>            
                 <Tab.Screen name="perfil" component={perfil} />
            </Tab.Navigator>
        
          );        
}