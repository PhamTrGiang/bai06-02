import {StyleSheet, Text, View,FlatList,Image } from 'react-native';


const ProductItem = (props) => {
    const item = props.item;
    return(
        <>  

            <View style={styles.container}>
            <Image source={item.source} style={styles.picture}/>
            <View>
                <Text>Tên : {item.name}</Text>
                <Text>Mô tả : {item.note}</Text>
            </View>
            </View>
        </>
        );
}
const ProductList = (props) =>{
    const list = props.data || [] ;
    return(
        <FlatList
        data={list}
        renderItem = {ProductItem}
        keyExtractor={(item) => item.id}
        />
    );

}

export default ProductList;

const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:5,
        flexDirection: 'row',
    },
    picture:{
        flex:1,
        maxWidth:50,
        height:50,
        borderWidth:1,
        borderColor:'black',
        borderRadius:25,
        marginEnd:5,   
    },

    
  });