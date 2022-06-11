import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';
import ScheduleItem from './ScheduleItem';
import scheduleData from '../../../assets/dummydata/data';

const ScheduleCard = () => {
    return (
        <View style={styles.scheduleCardWrapper}>
            <View style={styles.popularCardWrapper}>
                {/* {
                    scheduleData.map((item) => {
                        <ScheduleItem 
                            key={item.id}
                            time={item.time}
                            task={item.task}
                            venue={item.venue}
                            />
                    })
                } */}
                <ScheduleItem time={'0700'} task={'REVEILLE'} venue={'BUNK'}/>
                <ScheduleItem/>
                <ScheduleItem/>
               
            </View>
        </View>
    )
}

export default ScheduleCard;



const styles = StyleSheet.create({
    popularTitle: {
        // fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
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
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        // fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        // color: colors.textDark,
    },
    popularTitlesWeight: {
        // fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        // color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
});