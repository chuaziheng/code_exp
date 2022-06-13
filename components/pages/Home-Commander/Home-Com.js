import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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

const HomeScreenCom = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          {/* Header */}
          <View style={styles.titlesWrapper}>
              <Text style={styles.titlesSubtitle}>Hello,</Text>
              <Text style={styles.titlesTitle}>MAJ Josephine</Text>
          </View>
          <Image 
            source={require('../../../assets/images/dp.png')}
            style={styles.profileImage}
          />
        </View>

        {/* Today View */}
        <View style={styles.bodyWrapper}>
          <View>
            <Text style={styles.bodyTitle}>What's happening next?</Text>
            <ScheduleCard/>
            <Text style={styles.bodyTitle}>Quick Actions</Text>
            <View style={styles.buttonGrid}>
              <View style={styles.buttonRow}>
                <QuickButton navigation={navigation} title={'Scheduler'} nextPage={'HomeMan'} />
                <QuickButton navigation={navigation} title={'Nominal Roll'} nextPage={'HomeMan'} />
                <QuickButton navigation={navigation} title={'Broadcast'} nextPage={'HomeMan'} />
              </View>
              <View style={styles.buttonRow}>
                <QuickButton navigation={navigation} title={'Packing List'} nextPage={'HomeMan'} />
                <QuickButton navigation={navigation} title={'Personal Data'} nextPage={'HomeMan'} />
                <QuickButton navigation={navigation} title={'Duty Roster'} nextPage={'HomeMan'} />
              </View>
            </View>
            <Text style={styles.bodyTitle}>Announcements</Text>
            {/* <AnnouncementCard /> */}
          </View>
        </View>
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    overflow: 'scroll'
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
    alignItems: 'right',
  },
  profileImage: {
    width: 60,
    height: 60,
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
    color: colors.textDark,
  },
  titlesTitle: {
    // fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    fontWeight: '600'
  },
  bodyWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
    alignItems: 'center',
  },
  bodyTitle: {
    // fontFamily: 'Montserrat-Regular',
    fontSize: 23,
    fontWeight: '600',
    color: colors.textDark,
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
    alignItems: 'center',
  },
  orderText: {
    // fontFamily: 'Montserrats-Bold',
    fontSize: 14,
    marginRight: 10,
  },
  buttonGrid: {
    marginTop: 10,
    flexDirection: 'column',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

export default HomeScreenCom;