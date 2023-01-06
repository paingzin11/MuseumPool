import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList, ScrollView, Button } from 'react-native';

const Item = ({ id, title }) => (
   <View style={styles.item}>
      <Image style={{width: 70, height: 70, marginRight: 20}} source={require('../assets/logo.png')} />
      <View style={{flexDirection:'column'}}>
         <Text style={{fontSize: 15, fontFamily: 'NotoSerifMyanmar-Regular', color:'#000000'}}>{title}</Text>
         <Text style={{fontSize: 15, fontFamily: 'NotoSerifMyanmar-Regular', color:'#000000'}}>{title}</Text>
      </View>
   </View>
 );


export default function HOME() {
   const datasample = [
      {id: '001', name: 'အမျိုးသားပြတိုက် (ရန်ကုန်)'},
      {id: '002', name: 'အမျိုးသားပြတိုက် (နေပြည်တော်)'},
      {id: '003', name: 'မန္တလေးပြတိုက်'},
      {id: '004', name: 'မန္တလေးနန်းတွင်း'}, 
      {id: '005', name: 'ပုဂံနန်းတွင်း'},
      {id: '006', name: 'မြနန်းစံကျော်ရွှေနန်းတော်'}, 
      {id: '007', name: 'ဗိုလ်ချုပ်အောင်ဆန်းနေအိမ်ပြတိုက်'},
      {id: '008', name: 'နတ်မောက်ပြတိုက်'},
      {id: '009', name: 'စလေပြတိုက်'},
      {id: '010', name: 'နောင်ချိုဟော်နန်းပြတိုက်'},
      {id: '011', name: 'ရွှေတိဂုံဘုရားပြတိုက်'},
      {id: '012', name: 'စိုက်ပျိုးရေးပြတိုက်'}
  ];
   const renderItem = ({ item }) => (
        <Item title={item.name} id ={item.id}/>
   );

   return (
      <View style={styles.container}>
         <View style={{width:'100%', flexDirection:'row', alignItems:'center', backgroundColor:'#fff', borderWidth:1, marginBottom: 10}}>
            <TextInput style={{marginLeft:5, width:'80%', height:35,marginRight:3, paddingLeft: 10, backgroundColor:'#fff'}} placeholder='Enter to find the museum'/>
            <Button title='SEARCH' style={{width:'20%',height: 50, backgroundColor: '#8EB1C7', color:'#fff' }} />
         </View>
         <FlatList
            data={datasample}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
         />
      </View>
   );
 };
 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#fff',
     width: '100%',
     backgroundColor: '#DDFFF7'
   },
   item:{
      width: '100%',
      alignItems: 'center',
      flexDirection:'row',
      marginBottom: 20, 
      padding: 20,
      backgroundColor:'#FEFDFF', 
      borderWidth:1,
      borderColor: '#AA4465'
      
   }
 });
 