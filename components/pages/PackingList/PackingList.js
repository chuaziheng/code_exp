import * as React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, Keyboard, Linking, TouchableOpacity, ScrollView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Item from './Item';

// const items = [
//     {
//         id: '1',
//         desc: 'Fieldpack',
//         packed: false,
//     },

//     {
//         id: '2',
//         desc: 'Helmet',
//         packed: false,
//     },

//     {
//         id: '3',
//         desc: 'Towel Pack',
//         packed: false,
//     },

//     {
//         id: '4',
//         desc: 'Toiletries',
//         packed: false,
//     },

//     {
//         id: '5',
//         desc: 'Mess Tin Pack',
//         packed: false,
//     },
// ]

const PackingList = () => {
    const [item, setItem] = React.useState();
    const [Itemlist, setItemlist] = React.useState([]);

    const handleAddItem = () => {
        Keyboard.dismiss();
        setItemlist([...Itemlist, item])
        setItem(null);
    }

    const openEmart = () => Linking.canOpenURL("https://www.ns.sg/nsp/portal/site/mindef/shop-at-emart/info").then(() => {
        Linking.openURL("https://www.ns.sg/nsp/portal/site/mindef/shop-at-emart/info");
    });

    return (
        <View style={styles.main}>
            {/* <ScrollView 
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            ></ScrollView> */}
                <View style={styles.header}>
                    <View style={styles.backbutton}> 
                        <Feather name='chevron-left' size={18} color={'black'}/>
                    </View>
                    <Text style={styles.title}>Packing List</Text>
                </View>
                <View style={styles.items}>
                    {
                        Itemlist.map((item, index) => {
                                return <Item id={index} desc={item}/>
                            })
                    }
                    <KeyboardAvoidingView 
                        behavior={Platform.OS === "ios" ? "padding" : "height"} 
                        style={styles.addItemWrapper}
                        >
                        <TextInput style={styles.input} placeholder={'Add an Item'} value={item} onChangeText= {text => setItem(text)} />
                        <TouchableOpacity onPress={() => handleAddItem()}>
                            <Text style={styles.Add}>Add</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                </View>
                <TouchableOpacity onPress={() => openEmart()}>
                    <Text style={styles.Emart}>
                        Browse Emart
                    </Text>
                </TouchableOpacity>
                    

                
            
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

    Add: {
        backgroundColor: '#639C84',
        width: 100,
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

    addItemWrapper: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
    },
  });