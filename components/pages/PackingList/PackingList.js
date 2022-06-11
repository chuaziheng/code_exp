import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Item from './Item';

const items = [
    {
        id: '1',
        desc: 'Fieldpack',
        packed: false,
    },

    {
        id: '2',
        desc: 'Helmet',
        packed: false,
    },

    {
        id: '3',
        desc: 'Towel Pack',
        packed: false,
    },

    {
        id: '4',
        desc: 'Toiletries',
        packed: false,
    },

    {
        id: '5',
        desc: 'Mess Tin Pack',
        packed: false,
    },
]

const PackingList = () => {
    return (
        <View style={styles.main}>
                <View style={styles.header}>
                    <View style={styles.backbutton}> 
                    <Feather name='chevron-left' size={18} color={'black'}/>
                    </View>
                    <Text style={styles.title}>Packing List</Text>
                </View>
                <View style={styles.items}>
                    {
                        items.map((i) => (
                            <Item id ={i.id} desc={i.desc}/>
                        ))
                    }

                <Text style={styles.Emart}>
                    Add Item
                </Text>
                </View>
                    <Text style={styles.Emart}>
                        Browse Emart
                    </Text>

                
            
        </View>
    );
}

export default PackingList;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 80,
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },

    header: {
        width: 320,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },

    backbutton: {
        position: 'relative',
        top: 0,
        left: 0,
        height: 30,
        width: 30,
        borderRadius: 10,
        //borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    title: {
        position: 'relative',
        top: -5,
        left: -65,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    items: {
        backgroundColor: '#F5F5F5',
        height: 448,
        width: 331,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
        borderRadius: 10,
    },

    additem: {


    },

    Emart: {
        backgroundColor: '#639C84',
        width: 140,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontStyle: 'Lato',
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 10,
        borderRadius: 10,
    },
  });