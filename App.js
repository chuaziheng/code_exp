import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import CreateBroadcastScreen from './components/pages/CreateBroadcast/CreateBroadcast';
import LoginScreen from './components/pages/LoginScreen/LoginScreen';
import HomeScreen from './components/pages/LoginScreen/HomeScreen';
import * as React from 'react';
import HomeScreenCom from './components/pages/Home-Commander/Home-Com';
import HomeScreenMan from './components/pages/Home-Man/Home-Man';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen 
          name="HomeCom" 
          component={HomeScreenCom} 
          options={{headerShown: false,}}/>
        <Stack.Screen
          name="HomeMan"
          component={HomeScreenMan}
          options={{headerShown: false,}}/>
        <Stack.Screen
          name="CreateBroadcast"
          component={CreateBroadcastScreen}
          options={{headerShown: false,}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
