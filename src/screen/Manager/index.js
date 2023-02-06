import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, FlatList } from 'react-native';
import ProductList from '../ProductList';

const Manager = (props) =>{
    const route = props.route;
    const list = route.params?.list;
    return (
        <View>
            <ProductList data={list}></ProductList>
        </View>
);
}

export default Manager;

const styles = StyleSheet.create({

  });