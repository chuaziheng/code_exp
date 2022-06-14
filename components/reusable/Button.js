import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors/colors';

const QuickButton = ({
    navigation,
    title,
    nextPage,
    icon
}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(nextPage)}
        >   
        <View style={styles.btnContainer}>
            <View style={styles.btnWrapper}>
                <Image
                  source={require(`../../../code_exp/assets/icons/${icon}`)}
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