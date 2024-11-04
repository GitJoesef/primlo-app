import React from 'react';
import { ImageComponent, StyleSheet, Text, View, Button, TouchableOpacity, TextInput, } from 'react-native';


import AppLayout from '@/modules/common/app-layout';
import HomePage from '@/modules/home';

export default function Home() {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  )
}