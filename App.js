import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LOGIN from './components/Login';
import REGISTER from './components/Register';
import INAVIGATOR from './components/iNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'NotoSerifMyanmar-Regular': require('./assets/fonts/NotoSerifMyanmar-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN" >
        <Stack.Screen name="LOGIN" component={LOGIN} options={{headerShown: false}}/>
        <Stack.Screen name="INAVIGATOR" component={INAVIGATOR} options={{headerShown: false}}/>
        <Stack.Screen name="REGISTER" component={REGISTER} options={{headerShown: false}}/>
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
