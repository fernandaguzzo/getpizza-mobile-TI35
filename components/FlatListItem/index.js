import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FlatListItem = ({ item }) => {
    return (
        <View>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.content}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text>{item.image}</Text>
            </View>
            

        </View>
    )

}

export default FlatListItem;