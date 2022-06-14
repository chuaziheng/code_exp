import * as React from 'react';
import { TextInput, StyleSheet, View, Text, Button, Alert, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';


const CreateBroadcastScreen = ({ navigation }) => {
  const [titleText, onChangeTitle] = React.useState("");
  const [messageText, onChangeMessage] = React.useState("");

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backbutton} >
              <Feather name='chevron-left' size={18} color={'black'} />
            </View>
          </TouchableOpacity>

          <Text style={styles.title}>Create Broadcast</Text>
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
        
          {/* <Button
            title="Submit"
            onPress={() => alert('Simple Button pressed')}
          // onPress={() => Alert.alert('Simple Button pressed')}
          /> */}
          <TouchableOpacity>
            <Text style={styles.submitButton}>Publish</Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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

  inputTitle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    height: 40,
    marginBottom: 10,
  },
  input: {
    textAlignVertical: 'top',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    height: 200,
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
    backgroundColor: '#639C84',
    width: 100,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontStyle: 'Lato',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    borderRadius: 10,

  }
});

export default CreateBroadcastScreen;