import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
// import { signInWithGoogle } from '../../../index'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const navigation = useNavigation()
  
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
            navigation.replace("Home")
            }
        });
    
        // return unsubscribe
    }, [])

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log('Google Sign in with: ', user.email)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

  
    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Registered user with email: ', user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, " error ", errorMessage)
        });
    }
  
    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }
  
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleGoogleSignIn}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign in with Google</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
            </View>
    
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
  }
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })