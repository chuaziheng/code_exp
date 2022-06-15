import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../assets/colors/colors';
import Duty from './Duty'
import DutyRole from './DutyRole'
const dutyRoles = ['Guard Duty Pos 1', 'CDS', 'Duty Driver']



const DutyRoster = ({navigation}) => {
    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.backbutton} >
                        <Feather name='chevron-left' size={18} color={'black'} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>Duty Roster</Text>
            </View>
            <View style={styles.bodyWrapper}>
                {
                    dutyRoles.map((item)=>(
                        <DutyRole
                        key={item}
                        role={item}/>
                    ))

                }
            </View>

        </View>
    )  
}

export default DutyRoster;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 80,
        paddingHorizontal: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },

    bodyWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 5,
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 20
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

    dutyItems: {
        backgroundColor: '#F5F5F5',
        height: 448,
        width: 331,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
        borderRadius: 10,
    }
  });