import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';
import ScheduleItem from './ScheduleItem';
import { scheduleData } from '../../../assets/dummydata/data';

const ScheduleCard = () => {
    return (
        <View style={styles.scheduleCardWrapper}>
            <TouchableOpacity
            //   key={item.id}
            //   onPress={() =>
            //     navigation.navigate('Details', {
            //       item: item,
            //     })
              >
                <View>
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
            </TouchableOpacity>
        </View>
    )
}

export default ScheduleCard;



const styles = StyleSheet.create({
    scheduleCardWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: colors.grey,
        borderRadius: 15,
        width: Dimensions.get('window').width * 0.9,
        height: 230,
        paddingVertical: 10,
        paddingHorizontal: 20,
        overflow: 'scroll',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        
    },
});