// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenCom from './components/pages/Home-Commander/Home-Com';
import HomeScreenMan from './components/pages/Home-Man/Home-Man';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeCom" 
          component={HomeScreenCom} 
          options={{headerShown: false,}}/>
        <Stack.Screen 
          name="HomeMan" 
          component={HomeScreenMan} 
          options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;