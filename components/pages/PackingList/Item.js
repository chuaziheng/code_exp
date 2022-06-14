import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Item = ({
    id,
    desc
}) => {
    const [packed, setPacked] = React.useState(false)
    const [deleted, setDeleted] = React.useState(false)

    const handleClick = (packed) => {
        setPacked(!packed)
    }

    const handleDelete = (deleted) => {
        setDeleted(!deleted)
    }

    return (
        
        <TouchableOpacity onPress={() =>
            handleClick(packed)
        }>
        <View style={deleted ? styles.deleted : (packed ? styles.mainpacked : styles.main)}>
            <View style={styles.item}>
                <View style={packed ? styles.circle : styles.circlepacked}></View>
                <Text style={packed ? styles.textpacked : styles.text}> {desc}</Text>
                <TouchableOpacity onPress={() =>
                    handleDelete(deleted)
                }>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainpacked: {
        backgroundColor: '#8FAC99',
        padding: 10,
        borderRadius:10,
        width: 300,
        marginBottom: 10,
    },

    main: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius:10,
        width: 300,
        marginBottom: 10,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    circle: {
        height: 10,
        width: 10,
        borderRadius: 40,
        backgroundColor: '#F5CA48',
        opacity: 0.8,
    },

    circlepacked: {
        height: 10,
        width: 10,
        borderRadius: 40,
        backgroundColor: '#F5F5F5',
        opacity: 0.8,
    },

    textpacked: {
        fontStyle: 'Lato',
        fontSize: 16,
        color: 'white',
        opacity: 0.8,
        overflow: 'hidden'
    },

    text: {
        fontStyle: 'Lato',
        fontSize: 16,
        overflow: 'hidden'
    },

    deleted: {
        padding: 0,
        borderRadius: 0,
        width: 0,
        marginBottom: 0,
    }
});

export default Item;