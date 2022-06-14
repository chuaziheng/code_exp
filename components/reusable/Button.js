import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors/colors';

// export const btns = [
//   {
//     id: '1',
//     title: 'SCHEDULER',
//     src:
//   },
  
// ];

const QuickButton = ({
    navigation,
    title,
    nextPage,
    // icon
}) => {
    let icon;
    if (title == 'SCHEDULER') {
      icon = require('../../../code_exp/assets/icons/Schedule.png')
    } else if (title == 'PACKING LIST') {
      icon = require('../../../code_exp/assets/icons/Storage Box.png')
    } else if (title == 'BROADCAST') {
      icon = require('../../../code_exp/assets/icons/Megaphone.png')
    } else if (title == 'UPLOAD MC') {
      icon = require('../../../code_exp/assets/icons/Health Book.png')
    } else if (title == 'DUTY ROSTER') {
      icon = require('../../../code_exp/assets/icons/Move Dirt Around.png')
    } else if (title == 'PROFILE') {
      icon = require('../../../code_exp/assets/icons/Account.png')
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate(nextPage)}
        >   
        <View style={styles.btnContainer}>
            <View style={styles.btnWrapper}>
                <Image
                  source={icon}
                  style={styles.profileImage}
                />
                {/* <Feather name="chevron-right" size={18} color={colors.black} /> */}
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.btnText}>{title}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default QuickButton;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    profileImage: {
      width: 30,
      height: 30,
      color: '#5E7667'
    },
    btnWrapper: {
      width: 65,
      height: 65,
      backgroundColor: colors.white,
      opacity: 0.8,
      borderRadius: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnContainer: {
      // width: 70,
      height: 90,
      borderRadius: 15,
      paddingVertical: 25,
      marginVertical: 5,
      marginHorizontal: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      // fontFamily: 'Montserrats-Bold',
      fontSize: 10,
      textAlign: 'center',
      color: colors.white,
      fontWeight: '600'
    },
    textContainer:{
      marginTop: 3,
      width: 70,
      height: 20,
      alignItems: 'center',
      flexDirection: 'column'
    }
  });