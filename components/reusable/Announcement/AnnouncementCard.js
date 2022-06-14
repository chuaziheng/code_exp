import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';
import { announcementData } from '../../../assets/dummydata/data';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementCard = () => {
    return (
        <View style={styles.AnnouncementCardWrapper}>
            <TouchableOpacity
            //   key={item.id}
            //   onPress={() =>
            //     navigation.navigate('Details', {
            //       item: item,
            //     })
              >
                <View>
                    {
                        announcementData.map((item) => (
                            <AnnouncementItem 
                                key={item.id}
                                title={item.title}
                                author={item.author}
                                />
                        ))
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AnnouncementCard;



const styles = StyleSheet.create({
    AnnouncementCardWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: colors.grey,
        borderRadius: 15,
        width: Dimensions.get('window').width * 0.9,
        height: 160,
        paddingVertical: 10,
        paddingHorizontal: 20,
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
    
});