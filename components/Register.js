import * as React from 'react';
import { View, Text, Button } from "react-native";

export default function REGISTER({navigation}) {
   function LoginHandlar(){
    navigation.navigate('LOGIN');
   }

   return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:16,fontWeight:'700'}}>Register Screen</Text>
            <Button title='Login' onPress={LoginHandlar}/>
        </View>
   );
 }