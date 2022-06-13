import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';

const AnnouncementItem = ({
    title,
    author
}) => {
    return (
        <View style={styles.ItemWrapper}>
            <Image 
              source={require('../../../assets/images/dp.png')}
              style={styles.profileImage}
            />
            <View style={styles.texts}>
                <Text style={styles.titleText}>
                    {title}
                </Text>
                <Text style={styles.authorText}>
                    {author}
                </Text>
            </View>
        </View>
    )
}

export default AnnouncementItem;

const styles = StyleSheet.create({
    titleText: {
        // fontFamily: 'Montserrat-Bold',
        color: colors.textAccent,
        fontSize: 16,
        width: 50,
        fontWeight: '500',
    },
    authorText: {
        // fontFamily: 'Montserrat-Bold',
        color: colors.textAccent,
        fontSize: 16,
        width: 110,
        fontWeight: '500',
        textAlign: 'center'
    },
    ItemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        width: 350,
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
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginLeft: 10,
        marginTop: 10,
        borderColor: colors.grey,
        borderWidth: 2,
      },
});