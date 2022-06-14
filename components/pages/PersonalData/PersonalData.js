import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import categoriesData from '../assets/data/categoriesData';
// import popularData from '../assets/data/popularData';
import colors from '../../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScheduleCard from '../../reusable/Schedule/ScheduleCard';
import { NavigationHelpersContext } from '@react-navigation/native';
import QuickButton from '../../reusable/Button';
import AnnouncementCard from '../../reusable/Announcement/AnnouncementCard';
import index from '../../../index';
import { useNavigation } from '@react-navigation/core';
import {
    getAuth,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'


const auth = getAuth();

const PersonalData = ({ navigation, user }) => {
    // const navigation = useNavigation()

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("signed out")
            navigation.replace("Login")
            // sign out successful
        }).catch((error) => {
            // error 
        })
    }

    return (
        <View style={styles.container}>

            <SafeAreaView>
                <View style={styles.body}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.backbutton} >
                                <Feather name='chevron-left' size={18} color={'black'} />
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.title}>Profile</Text>
                    </View>
                    <Image
                        source={require('../../../assets/images/dp.png')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.titlesTitle}>Nicholas Halim</Text>
                    <Text style={styles.titlesSubtitle}>CORPORAL</Text>
                    <TouchableOpacity
                        onPress={handleSignOut}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Personal Details</Text>
                        <Feather name="chevron-right" size={18} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSignOut}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Medical Status</Text>
                        <Feather name="chevron-right" size={18} color={colors.white} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSignOut}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Apply for Deferment</Text>
                        <Feather name="chevron-right" size={18} color={colors.white} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSignOut}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Sign out</Text>
                        <Feather name="chevron-right" size={18} color={colors.white} />

                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    topheader: {
        flexDirection: 'row'
    },
    backbutton: {
        position: 'relative',
        top: 0,
        left: 0,
        height: 30,
        width: 30,
        borderRadius: 10,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    body: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 80,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 20,
        alignItems: 'right',
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 100,
        marginLeft: 10,
        top: 10,
        borderWidth: 5,
        borderColor: colors.grey,
    },
    titlesWrapper: {
        marginLeft: 10,
        marginTop: 10,
        paddingHorizontal: 0,
    },
    titlesSubtitle: {
        // fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        fontWeight: '600',
        color: colors.textGrey,
        marginBottom: 50,
    },
    titlesTitle: {
        // fontFamily: 'Montserrat-Bold',
        marginTop: 10,
        fontSize: 30,
        color: colors.textDark,
        fontWeight: '600'
    },
    bodyWrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 5,
        alignItems: 'center',
    },
    bodyTitle: {
        // fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        fontWeight: '600',
        color: colors.textDark,
        marginTop: 20,
    },
    bodyTitleWhite: {
        // fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        fontWeight: '600',
        color: colors.white,
        marginTop: 20,
    },
    buttonText: {
        // fontFamily: 'Montserrats-Bold',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: colors.white
    },
    button: {
        marginTop: 10,
        marginHorizontal: 20,
        width: Dimensions.get('window').width * 0.9,
        height: 70,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PersonalData;