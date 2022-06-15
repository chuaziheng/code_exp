import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { scheduleData } from '../../../assets/dummydata/data';
import ScheduleItem from '../../reusable/Schedule/ScheduleItem';


const ScheduleMan = ({navigation}) => {
    return (
        <View style={styles.main}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.backbutton}> 
                            <Feather name='chevron-left' size={18} color={'black'}/>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.title}>Daily Schedule</Text>
                </View>
                
                <View style={styles.items}>
                    {
                        scheduleData.map((item) => (
                            <ScheduleItem 
                                key={item.id}
                                time={item.time}
                                task={item.task}
                                venue={item.venue}
                                />
                        ))
                    }

                </View>
        </View>
    );
}

export default ScheduleMan;

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
        left: -40,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    items: {
        backgroundColor: '#F5F5F5',
        height: 448,
        width: Dimensions.get('window').width * 0.9,
        flexDirection: 'column',
        alignItems: 'center',
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

    submitButton: {
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
  });