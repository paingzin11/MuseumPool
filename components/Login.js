import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,StatusBar } from 'react-native';
import INAVIGATOR from './iNavigation';

export default function LOGIN({navigation}){

    function LoginHandler(){
        navigation.navigate('INAVIGATOR')
    }

    function RegisterHandler(){
        navigation.navigate('REGISTER')
    }

    return(
        <View style={styles.container}>
            <StatusBar animated={true} barStyle={'light-content'} backgroundColor="#8EB1C7"/>
            <View style={{alignItems: 'center', justifyContent:'center', 
                            marginTop: 70,  borderWidth: 1,padding: 10, borderStyle:'dotted', 
                            borderColor: '#FFA69E', borderRadius: 20
                        }}>
                <View style={{alignItems: 'center', justifyContent:'center', 
                                borderWidth: 1,padding: 10, borderStyle:'dotted', 
                                borderColor: '#AA4465', borderRadius: 20
                            }}>
                        <Image style={{width:120, height:120, }} source={require('../assets/logo.png')} resizeMode='stretch'/>
                </View>
            </View>
            <View style={{width:'100%', backgroundColor:'#861657',  
                        alignItems: 'center', marginTop: 20, 
                        padding: 15}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.text}>User Name</Text>
                    <TextInput style={ styles.textinput } />
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={ styles.textinput } />
                </View>
            </View>
            <View style={{width:'100%', backgroundColor:'#FEFDFF', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        padding: 10
                        }}>
                <TouchableOpacity style={styles.button} onPress={LoginHandler}>
                    <Text style={{textAlign: 'center', paddingTop:4, color:'#fff'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={RegisterHandler}>
                    <Text style={{textAlign: 'center', paddingTop:4, color:'#fff'}}>Register</Text>
                </TouchableOpacity>
            </View>
            

        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%', 
        alignItems: 'center',
        //justifyContent: 'center'
    }, 
    textinput: {
        borderWidth: 1,
        backgroundColor: '#fff', 
        width: 300, 
        height: 40,
        borderRadius: 10, 
        padding: 10
    }, 
    text:{
        color:'#fff',
    }, 
    button:{
        borderWidth: 1,
        borderColor: '#fff',
        width: 150, 
        height: 40,
        backgroundColor: '#AA4465', 
        borderRadius: 10, 
        margin:5,
        paddingTop: 4
    }
});