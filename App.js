import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import CreateBroadcastScreen from './components/pages/CreateBroadcast/CreateBroadcast';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CreateBroadcast"
          component={CreateBroadcastScreen}
          options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


