import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PROFILE({navigation}) {
    function LougoutHandler(){
        navigation.navigate('LOGIN');
    }
   return (
        <View style={styles.container}>
            <View style={{marginTop: 10, marginLeft:30 , flexDirection:'row', alignItems: 'center', }}>
                <Image style={{width:100, height:100, borderRadius: 100, borderWidth:3, borderColor:'#93E1D8' }} source={require('../assets/women.jpg')} resizeMode='stretch'/>
                <View style={{flexDirection:'column', marginLeft:20 }}>
                    <Text style={{fontSize:16,fontWeight:'700', marginTop: 10}}>Mrs.Carina Linn</Text>
                    <Text style={{fontSize:10,fontWeight:'500', marginTop: 3}}>carinalinn2000@yahoo.com</Text>
                </View>
            </View>
            <View  style={{width:'100%', marginTop: 10, backgroundColor:'#93E1D8', height: 30}} >
                <Text style={{backgroundColor: '#93E1D8', fontWeight:'700', color: '#EB4511', paddingTop: 5, paddingLeft:10}}>Account</Text>
            </View>
            <View  style={{width:'100%', marginTop: 10, height: 40, flexDirection:'row', borderBottomWidth:1, borderBottomColor: '#C1BFB5'}} >
                <Icon size={30} name='mobile-friendly' color={'#B02E0C'} style={{paddingLeft: 30, marginRight: 20}}/>
                <Text style={{backgroundColor: '#fff', fontSize:16, fontWeight:'700', paddingTop: 5, paddingLeft:10}}>+66 (089)-928-2134</Text>
            </View>
            <View  style={{width:'100%', marginTop: 10, height: 40, flexDirection:'row', borderBottomWidth:1, borderBottomColor: '#C1BFB5'}} >
                <Icon size={30} name='location-on' color={'#B02E0C'} style={{paddingLeft: 30, marginRight: 20}}/>
                <Text style={{backgroundColor: '#fff', fontSize:16, fontWeight:'700', paddingTop: 5, paddingLeft:10}}>Bahan Township, Yangon, Myanmar</Text>
            </View>
            
            <View  style={{width:'100%', marginTop:0, backgroundColor:'#93E1D8', height: 30}} >
                <Text style={{backgroundColor: '#93E1D8', fontWeight:'700', color: '#EB4511', paddingTop: 5, paddingLeft:10}}>More</Text>
            </View>
            <View  style={{width:'100%', marginTop: 10, height: 40, flexDirection:'row', borderBottomWidth:1, borderBottomColor: '#C1BFB5'}} >
                <Icon size={30} name='info-outline' color={'#861657'} style={{paddingLeft: 30, marginRight: 20}}/>
                <Text style={{backgroundColor: '#fff', fontSize:16, fontWeight:'700', paddingTop: 5, paddingLeft:10}}>About US</Text>
            </View>
            <View  style={{width:'100%', marginTop: 10, height: 40, flexDirection:'row', borderBottomWidth:1, borderBottomColor: '#C1BFB5'}} >
                <Icon size={30} name='privacy-tip' color={'#861657'} style={{paddingLeft: 30, marginRight: 20}}/>
                <Text style={{backgroundColor: '#fff', fontSize:16, fontWeight:'700', paddingTop: 5, paddingLeft:10}}>Terms and Policies</Text>
            </View>
            <TouchableOpacity style={{width:'100%', height: 40, backgroundColor:'#AA4465', borderRadius:10, marginTop: 40,}} onPress={LougoutHandler} >
                <Text style={{textAlign:'center', marginTop: 10, color:'#fff', fontSize:15, fontWeight:'500'}}>
                    Logout
                </Text>
            </TouchableOpacity>
            
                
        </View>
   );
 };

 const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FEFDFF',  
        //alignItems: 'center', 
        // justifyContent: 'center', 
        width: '100%',
        height: '100%'
    }    
 });