import React from 'react';
import { ImageComponent, StyleSheet, Text, View, Button, TouchableOpacity, TextInput, } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import EditScreenInfo from '@/components/EditScreenInfo';


  export default function TabOneScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create Account</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            
            />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          />
          <TextInput
          style={styles.input}
          placeholder="Phone Number"
          />
          <TextInput
          style={styles.input}
          placeholder="Password"
          />
          <Text style={styles.label}>
            I agree to the Terms of Service and Privacy Policy
          </Text>
          <Button title="Create Account" onPress={() => { /* Handle create account */ }} />
          <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="#fff" />
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={20} color="#fff" />
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.headerText}></Text>
        <Text style={styles.title}></Text>
        <View style={styles.separator} />
        
      </View>
    );
  }



const styles = StyleSheet.create({
  
  headerContainer: {
    padding: 15,
    paddingTop: 15,
  },
  
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left', 
    
  },
 input:{
borderWidth: 1,
borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    
    marginBottom: 15,
 },
 socialButton: {
  flexDirection: 'row',
  backgroundColor: '#fff', // Change color for different social buttons
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  margin: 20,
  marginBottom: 10, 
 },
 label: {
  margin: 8,
 },
 socialButtonText: {
  color: '#000000',
  marginLeft: 10,
},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
