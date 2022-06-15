import { StatusBar } from 'expo-status-bar';
import PackingList from './components/pages/PackingList/PackingList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CreateBroadcastScreen from './components/pages/CreateBroadcast/CreateBroadcast';
// import LoginScreen from './components/pages/LoginScreen/LoginScreen';
// import HomeScreen from './components/pages/LoginScreen/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import CreateBroadcastScreen from './components/pages/CreateBroadcast/CreateBroadcast';
import LoginScreen from './components/pages/LoginScreen/LoginScreen';
import * as React from 'react';
import HomeScreenCom from './components/pages/Home-Commander/Home-Com';
import HomeScreenMan from './components/pages/Home-Man/Home-Man';
import PersonalData from './components/pages/PersonalData/PersonalData';
import DutyRoster from './components/pages/DutyRoster/DutyRoster'
import Schedule from './components/pages/Schedule/Schedule';
import ScheduleMan from './components/pages/Schedule/ScheduleMan';
import PersonalDataMan from './components/pages/PersonalData/PersonalDataMan';

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
          name="PersonalDataMan"
          component={PersonalDataMan}
          options={{headerShown: false,}}/>
        <Stack.Screen
          name="CreateBroadcast"
          component={CreateBroadcastScreen}
          options={{headerShown: false,}}/>
        <Stack.Screen
          name="PackingList"
          component={PackingList}
          options={{headerShown: false,}}/>
        <Stack.Screen
          name="DutyRoster"
          component={DutyRoster}
          options={{headerShown: false,}}/>
          <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{headerShown: false,}}/>
          <Stack.Screen
          name="ScheduleMan"
          component={ScheduleMan}
          options={{headerShown: false,}}/>
      </Stack.Navigator>
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
