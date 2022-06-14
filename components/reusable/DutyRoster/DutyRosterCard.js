import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';
import { dutyData } from '../../../assets/dummydata/data';
import Duty from '../../pages/DutyRoster/Duty';

const DutyRosterCard = () => {
    return (
        <View style={styles.DutyRosterCardWrapper}>
            <TouchableOpacity
            //   key={item.id}
            //   onPress={() =>
            //     navigation.navigate('Details', {
            //       item: item,
            //     })
              >
                <View>
                    {
                        dutyData.map((i) => (
                            <Duty 
                                key={i.id}
                                startTime={i.time} 
                                personnel={i.personel}
                                dutyStatus={i.status}
                                />
                        ))
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default DutyRosterCard;



const styles = StyleSheet.create({
    DutyRosterCardWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: colors.grey,
        borderRadius: 15,
        width: Dimensions.get('window').width * 0.9,
        height: 100,
        paddingVertical: 10,
        paddingHorizontal: 20,
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