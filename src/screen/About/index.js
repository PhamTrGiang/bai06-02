import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

const About = (props) =>{
    const route = props.route;
    const name = route.params?.name||'Null';
    const msv = route.params?.msv||'Null';
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Họ tên : {name}</Text>
            <Text style={styles.text}>MSV : {msv}</Text>
        </View>
);
}

export default About;

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center',
        paddingTop:50
    },
    text:{
        fontSize:20,
        color: 'red',
    },
  });