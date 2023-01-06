
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import LOCATION from './Location';
import HOME from './Home';
import SEARCH from './Search';
import PROFILE from './Profile'; 

const Drawer = createDrawerNavigator();

export default function INAVIGATOR({navigation}) {
  return (
      <Drawer.Navigator 
        initialRouteName="HOME"

        screenOptions={{
          headerStyle:{
            backgroundColor: '#AA4465',
          },
          headerTitleAlign: 'center', 
          headerTitleStyle: {
            fontFamily: 'NotoSerifMyanmar-Regular', 
            fontSize: 12,
            color: '#FEFDFF',
            marginTop: 10
          }, 
          drawerLabelStyle: {
            fontFamily: 'NotoSerifMyanmar-Regular',           
            fontSize: 10,
            height: 20,
            alignItems: 'center',
            backgroundColor: '#93E1D8'
          }, 
        }}
        
      >
        <Drawer.Screen name="HOME" component={HOME}  options={{ drawerLabel: 'ပြတိုက်များ', headerTitle: 'ပြတိုက်များ', drawerIcon: config => <Icon size={30} name='museum'  color={'#AA4465'}/>}}/>
        <Drawer.Screen name="LOCATION" component={LOCATION}  options={{ drawerLabel: 'ပြတိုက်တည်နေရာများ', headerTitle: 'ပြတိုက်တည်နေရာများ' , drawerIcon: config => <Icon size={30} name='location-on' color={'#AA4465'} />}}/>
        <Drawer.Screen name="SEARCH" component={SEARCH}  options={{ drawerLabel: 'ရှာဖွေရန်', headerTitle: 'အချက်အလက်များရှာဖွေရန်', drawerIcon: config => <Icon size={30} name='qr-code-scanner' color={'#AA4465'}/> }}/>
        <Drawer.Screen name="PROFILE" component={PROFILE}  options={{ drawerLabel: 'ကိုယ်ရေးအချက်အလက်', headerTitle: 'ကိုယ်ရေးအချက်အလက်', drawerIcon: config => <Icon size={30} name='person' color={'#AA4465'}/> }}/>
      </Drawer.Navigator>

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
