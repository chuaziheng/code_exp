import * as React from 'react';
import { TextInput, StyleSheet, View, Text, Button, Alert  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';

const CreateBroadcastScreen = ()  => {
    const [titleText, onChangeTitle] = React.useState("");
    const [messageText, onChangeMessage] = React.useState("");

    return (
        <SafeAreaView>
            <View style={styles.headerWrapper}>
            {/* Header */}
                {/* <Text style={styles.titlesSubtitle}>Hello,</Text> */}
                <Text style={styles.titlesTitle}>Broadcast</Text>

            </View>
            <TextInput
                style={styles.inputTitle}
                onChangeText={onChangeTitle}
                value={titleText}
                placeholder="Title"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeMessage}
                value={messageText}
                placeholder="ENTER MESSAGE"
            />
            <View style={styles.submitButton}>
                <Button
                    title="Submit"
                    onPress={() => alert('Simple Button pressed')}
                    // onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingTop: 20,
        alignItems: "center",
        textAlign: "center"
      },
    inputTitle: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    input: {
        height: 140,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
        fontWeight: '600',
        // justifyContent: "center",
        // alignItems: "center"
      },
      submitButton: {
        flexDirection: 'row',
        width: 30,

        alignItems: 'center',

      }
  });

export default CreateBroadcastScreen;
