import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import index from '../../../index';
import { useNavigation } from '@react-navigation/core';
import {
  getAuth, 
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

const auth = getAuth();

const HomeScreen = ({user}) => {

  const navigation = useNavigation()
  
  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //       navigation.replace("Login")
  //       }
  //   });
  
  //     // return unsubscribe
  // }, [])

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
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})