import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';
import colors from '../../../assets/colors/colors';
import Duty from './Duty';

const dutyRoles = ['Guard Duty Pos 1', 'CDS', 'Duty Driver']

const duties = 
    [
        [{
            id: 1,
            startTime: '0400',
            endTime: '0600',
            personnel: 'CPL IRFAN',
            dutyStatus: 'COMPLETE',
            dutyRoleId: '0'
        // },
        // {
        //     id: 4,
        //     startTime: '0400',
        //     endTime: '0600',
        //     personnel: 'CPL IRFAN',
        //     dutyStatus: 'COMPLETE',
        //     dutyRoleId: '0'
        // },
        // {
        //     id: 5,
        //     startTime: '0400',
        //     endTime: '0600',
        //     personnel: 'CPL IRFAN',
        //     dutyStatus: 'COMPLETE',
        //     dutyRoleId: '0'
        }], 

        [{
            id: 2,
            startTime: '0730',
            endTime: '0900',
            personnel: 'CFC DENNIS',
            dutyStatus: 'UPCOMING',
            dutyRoleId: '1'
        }], 

        [{
            id: 3,
            endTime: '0800',
            startTime: '0630',
            personnel: 'PTE LIJIA',
            dutyStatus: 'ON DUTY',
            dutyRoleId: '2'
        }], 

    ];

const DutyRole = ({
    role
}) => {
    const isThisRole = (element) => element==role;
    const ind = dutyRoles.findIndex(isThisRole)

    return (
        <View>
            <Text style={styles.bodyTitle}>{role}</Text>
            <View style={styles.dutyItems}>
                {
                    duties[ind].map((i) => (
                        <Duty key ={i.id} 
                        startTime={i.startTime} 
                        endTime={i.endTime}
                        personnel={i.personnel}
                        dutyStatus={i.dutyStatus}
                        dutyRoleId={i.dutyRoleId}/>
                    ))
                }
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    bodyWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 5,
        alignItems: 'center',
        color:colors.secondary
      }, 
    bodyTitle: {
        // fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        fontWeight: '600',
        color: colors.textDark,
        marginTop: 20,
        textAlign: 'center'

    },

    dutyItems: {
        backgroundColor: '#F5F5F5', 
        // height: 448,
        width: 331,
        height:100,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,

    }
});

export default DutyRole;
