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

const HomeScreenMan = ({ navigation, user }) => {
  // const navigation = useNavigation()

  const handleSignOut = () =>{
    const auth = getAuth();
    signOut(auth).then(()=>{
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
        <ScrollView>

        <View style={styles.headerWrapper}>
            {/* Header */}
            <Image 
              source={require('../../../assets/images/header.png')}
              style={styles.headerImg}
            />
            <View>
              <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Hello,</Text>
                <Text style={styles.titlesSubtitle}>CPL Nicholas</Text>
              </View>
            </View>
            <Image 
              source={require('../../../assets/images/nic.jpg')}
              style={styles.profileImage}
            />
          </View>

          {/* Today View */}
          <View style={styles.header}></View>
          <View style={styles.bodyWrapper}>
            <View>
              
              {/* <Text style={styles.bodyTitleWhite}>Quick Actions</Text> */}
              
              <View style={styles.buttonRow}>
                  <QuickButton navigation={navigation} title={'SCHEDULER'} nextPage={'HomeCom'} />
                  <QuickButton navigation={navigation} title={'PACKING LIST'} nextPage={'PackingList'}/>
                  <QuickButton navigation={navigation} title={'UPLOAD MC'} nextPage={'HomeCom'} />
                  <QuickButton navigation={navigation} title={'DUTY ROSTER'} nextPage={'DutyRoster'} />
                  <QuickButton navigation={navigation} title={'PROFILE'} nextPage={'PersonalData'} />
              </View>
                          
              <Text style={styles.bodyTitle}>What's happening next?</Text>
              <ScheduleCard/>
              <View style={styles.textWrapper}>
                <Text style={styles.bodyTitle}>Announcements</Text>
                <TouchableOpacity
                  // onPress={() => navigation.navigate()}
                >
                  <Text style={styles.Add}>View All</Text>
                </TouchableOpacity>
              </View>
              <AnnouncementCard />
              <TouchableOpacity
                  onPress={handleSignOut}
                  style={styles.button}
                >
                  <Text style={styles.orderWrapper}>Sign out</Text>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5E7667",
    // backgroundColor: colors.white
    overflow: 'scroll'
  },
  topheader: {
    flexDirection: 'row'
  },
  headerImg: {
    height: 200,
    // backgroundColor: colors.white,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  header: {
    height: '80%',
    backgroundColor: colors.white,
    width: '100%',
    position: 'absolute',
    top: 205,
    left: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
    alignItems: 'right',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginLeft: 10,
    marginTop: 10,
  },
  titlesWrapper: {
    marginLeft: 5,
    paddingHorizontal: 0,
  },
  titlesSubtitle: {
    // fontFamily: 'Montserrat-Regular',
    fontSize: 25,
    fontWeight: '600',
    color: colors.white,
  },
  titlesTitle: {
    // fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.white,
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
  
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '600',

  },
  orderText: {
    // fontFamily: 'Montserrats-Bold',
    fontSize: 14,
    marginRight: 10,
    textAlign: 'center'
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'scroll',
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 25,
  },
  Add: {
    color: colors.textAccent,
    fontSize: 15,
    marginTop: 15,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default HomeScreenMan;