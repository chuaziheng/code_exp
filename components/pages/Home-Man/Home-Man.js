import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import categoriesData from '../assets/data/categoriesData';
// import popularData from '../assets/data/popularData';
import colors from '../../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScheduleCard from '../../reusable/Schedule/ScheduleCard';

export default HomeScreenMan = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          {/* Header */}
          <View style={styles.titlesWrapper}>
              <Text style={styles.titlesSubtitle}>Hello,</Text>
              <Text style={styles.titlesTitle}>CPL Nicholas</Text>
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
            
            
          </View>
        </View>
      </SafeAreaView>
      
    </View>
  );
}

// export default HomeScreenMan = () => {
//     return (
//         <View>
//             <Text>
//                 Home Man
//             </Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
});

