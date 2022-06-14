import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../assets/colors/colors';

const QuickButton = ({
    navigation,
    title,
    nextPage,
}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(nextPage)}
        >
            <View style={styles.btnWrapper}>
                <Text style={styles.btnText}>{title}</Text>
                {/* <Feather name="chevron-right" size={18} color={colors.black} /> */}
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
    btnWrapper: {
      width: 110,
      height: 110,
      backgroundColor: colors.primary,
      borderRadius: 15,
      paddingVertical: 25,
      marginVertical: 5,
      marginHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      // fontFamily: 'Montserrats-Bold',
      fontSize: 16,
      textAlign: 'center',
      color: colors.white,
      fontWeight: 500
    },
  });