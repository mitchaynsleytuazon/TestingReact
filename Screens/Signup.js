import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Signup(){

  const navigation = useNavigation()

  return (


    <SafeAreaView style={styles.container}>
      <Text style={styles.loginLabel}>Create Account</Text>

    <View style={styles.inputField}>

      <View >
        <TextInput style={styles.input} placeholder="Full Name"></TextInput>
      </View>

      <View>
      <TextInput style={styles.input} placeholder="Email"></TextInput>
      </View>

      <View >
        <TextInput style={styles.input} placeholder="Password"></TextInput>
      </View>

      <View >
        <TextInput style={styles.input} placeholder="Confirm Password"></TextInput>
      </View>

      <View style={styles.login}>
        <Text>
          Already Have an Account?
        </Text>

        <TouchableOpacity onPress={()=> navigation.navigate('Login')} >
          <Text style={styles.loginNav}>Login</Text>
          </TouchableOpacity>
        </View>
      
    </View>

    <TouchableOpacity style={styles.registerButton}>
      <Text style={styles.registerText}>Sign Up</Text>
    </TouchableOpacity>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FDFCF4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginLabel: {
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
    textTransform:'uppercase',
    },

  inputField: {
    alignItems: 'baseline',
    marginVertical: 20,
  },
  
  input: {
    borderBottomWidth: 1,
    width: 300,
  },
  
  login:{
    flexDirection:'row',
    marginTop: 10,
  },

  loginNav: {
    color: '#8B24CA',
    marginLeft: 10,
  },

  registerButton:{
    alignItems: 'center',
    backgroundColor: '#F3AA52',
    borderRadius: 7,
    padding: 12,
    marginTop: 20,
    width: 135,
  },

  registerText: {
    fontSize: 17,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#292D28',
  },

});
