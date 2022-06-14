import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';

const ScheduleItem = ({
    time,
    task,
    venue
}) => {
    return (
        <View style={styles.scheduleItemWrapper}>
            
            <Text style={styles.timeText}>
                {time}
            </Text>
            <Text style={styles.taskText}>
                {task}
            </Text>
            <Text style={styles.venueText}>
                {venue}
            </Text>
        </View>
    )
}

export default ScheduleItem;



const styles = StyleSheet.create({
    timeText: {
        // fontFamily: 'Montserrat-Bold',
        color: colors.textAccent,
        fontSize: 16,
        width: 50,
        fontWeight: '500',
    },
    venueText: {
        // fontFamily: 'Montserrat-Bold',
        color: colors.textAccent,
        fontSize: 16,
        width: 80,
        fontWeight: '500',
        textAlign: 'center'
    },
    taskText: {
        color: colors.textDark,
        fontSize: 16,
        width: 150,
        fontWeight: '500',
        textAlign: 'center'
    },
    scheduleItemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.85,
        height: 60,
        paddingVertical: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        overflow: 'hidden',
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