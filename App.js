import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PackingList from './components/pages/PackingList/PackingList';
import Schedule from './components/pages/Schedule/Schedule';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import CreateBroadcastScreen from './components/pages/CreateBroadcast/CreateBroadcast';
import LoginScreen from './components/pages/LoginScreen/LoginScreen';
import HomeScreen from './components/pages/LoginScreen/HomeScreen';
import * as React from 'react';
import HomeScreenCom from './components/pages/Home-Commander/Home-Com';
import HomeScreenMan from './components/pages/Home-Man/Home-Man';
import PersonalData from './components/pages/PersonalData/PersonalData';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
          name="PersonalData"
          component={PersonalData}
          options={{headerShown: false,}}/>
        <Stack.Screen
          name="CreateBroadcast"
          component={CreateBroadcastScreen}
          options={{headerShown: false,}}/>

      </Stack.Navigator>
      {/* <Drawer.Navigator
        drawerType="front"
        initialRouteName="HomeCom"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 10 },
        }}

      >
        {
         DrawerItems.map(drawer=><Drawer.Screen
           key={drawer.name}
         />)
       }
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
