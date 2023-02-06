import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

const Home = (props) =>{
    const nav = props.navigation;
    const list =  [
        {id:1,name:'Tên',note:'Mô tả',source:{uri: 'https://picsum.photos/51'}},
        {id:2,name:'Tên',note:'Mô tả',source:{uri: 'https://picsum.photos/49'}},
        {id:3,name:'Tên',note:'Mô tả',source:{uri: 'https://picsum.photos/52'}}
            ];
    return (
        <View style={styles.container}>
        <Image source={{uri: 'https://picsum.photos/100'}} style={styles.image}></Image>
        <View style={styles.buttons}>
            <View style={styles.button}>
            <Button title='Quản lý'
                onPress={()=>nav.navigate(
                    'Manager',
                    {list:list}
                )}
            ></Button>
            </View>
            <View style={styles.button}>
            <Button title='About'
                onPress={()=>nav.navigate(
                    'About',
                    {name: 'Phạm Trường Giang',msv:'PH28126'}
                )} 
            ></Button>
            </View>
        </View>
        </View>
);
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      marginBottom:20,
      marginTop:10
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button:{
      width:100,
      margin:20,
    },    
  });