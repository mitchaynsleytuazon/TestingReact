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

export default function Login(){

  const navigation = useNavigation()

  return (


    <SafeAreaView style={styles.container}>
      <Text style={styles.loginLabel}>Sign in</Text>

    <View style={styles.inputField}>

      <View >
        <TextInput style={styles.input} placeholder="Username"></TextInput>
      </View>

      <View>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      </View>

      <View style={styles.register}>
        <Text>
          Don't have an account?
        </Text>

        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
          <Text style={styles.registerNav}>Register Here</Text>
          </TouchableOpacity>
        </View>
      
    </View>

    <TouchableOpacity style={styles.loginButton} >
      <Text style={styles.loginText}>Login</Text>
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
  
  register:{
    flexDirection:'row',
    marginTop: 10,
  },

  registerNav: {
    color: '#8B24CA',
    marginLeft: 10,
  },

  loginButton:{
    alignItems: 'center',
    backgroundColor: '#7CF73E',
    borderRadius: 7,
    padding: 12,
    marginTop: 20,
    width: 135,
  },

  loginText: {
    fontSize: 17,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#292D28',
  },

});
