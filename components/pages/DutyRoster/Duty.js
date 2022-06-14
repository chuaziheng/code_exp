import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import colors from '../../../assets/colors/colors';


const dutyRoles = ['Guard Duty Pos 1', 'CDS', 'Duty Driver']

const Duty = ({
    id, 
    startTime, 
    endTime,
    personnel,
    dutyStatus, 
    dutyRoleId, 

}) => {
    return (
        <View style={styles.dutyRoleWrapper}>
            {/* <View style={packed ? styles.circle : styles.circlepacked}></View> */}
            <Text style={styles.startTimeText}> {startTime}</Text>
            <Text style={styles.personnelText}> {personnel}</Text>
            <Text style={styles.dutyStatusText}> {dutyStatus}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    // mainpacked: {
    //     backgroundColor: '#8FAC99',
    //     // backgroundColor: '#FFF',
    //     padding: 10,
    //     borderRadius:10,
    //     width: 300,
    //     marginBottom: 10,
    // },

    dutyRoleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
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

    // main: {
    //     backgroundColor: '#FFF',
    //     padding: 10,
    //     borderRadius:10,
    //     width: 300,
    //     marginBottom: 10,
    // },

    // item: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     flexWrap: 'wrap',
    // },

    startTimeText: {
        // fontFamily: 'Montserrat-Bold',
        color: colors.textAccent,
        fontSize: 16,
        width: 50,
        fontWeight: '500',
    },

    personnelText: {
        color: colors.textDark,
        fontSize: 16,
        width: 150,
        fontWeight: '500',
        textAlign: 'center'
    },

    dutyStatus: {
        // fontFamily: 'Montserrat-Bold',
        color: colors.textAccent,
        fontSize: 16,
        width: 80,
        fontWeight: '500',
        textAlign: 'center'
    },

    // circle: {
    //     height: 10,
    //     width: 10,
    //     borderRadius: 40,
    //     backgroundColor: '#F5CA48',
    //     opacity: 0.8,
    // },

    // circlepacked: {
    //     height: 10,
    //     width: 10,
    //     borderRadius: 40,
    //     backgroundColor: '#F5F5F5',
    //     opacity: 0.8,
    // },

    // textpacked: {
    //     fontStyle: 'Lato',
    //     fontSize: 16,
    //     color: 'white',
    //     opacity: 0.8,
    // },

    // text: {
    //     fontStyle: 'Lato',
    //     fontSize: 16,
    // },

    // textRight: {
    //     fontStyle: 'Lato',
    //     fontSize: 16,
    // },

});

export default Duty;