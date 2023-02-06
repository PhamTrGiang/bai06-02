import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import About from './src/screen/About';
import Manager from './src/screen/Manager';

const Stack = createNativeStackNavigator();

export default function App() {

    
  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name = 'Home' component={Home}/>
            <Stack.Screen name = 'Manager' component={Manager}/>
            <Stack.Screen name = 'About' component={About}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}


