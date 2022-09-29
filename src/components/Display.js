import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'



const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 0,
        justifyContent: 'center',
        backgroundColor: '#D8D8D8' ,
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 100,
        color: '#fff',
    },
})




export default props =>
            <View style={styles.display}>
                 <Text style={styles.displayValue}
                 numberOfLines={1}>{props.value} </Text>
            </View>