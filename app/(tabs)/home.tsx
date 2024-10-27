import React from 'react';
import { ImageComponent, StyleSheet, Text, View, Button, TouchableOpacity, TextInput, } from 'react-native';


import EditScreenInfo from '@/components/EditScreenInfo';
import AppLayout from '@/modules/common/app-layout';
import HomePage from '@/modules/home';
import ImagePickerExample from '@/modules/common/im';

export default function Home() {
  return (
    <AppLayout>
      <ImagePickerExample />
    </AppLayout>
  )
}