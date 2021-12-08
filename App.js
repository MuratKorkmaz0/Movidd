/**
 * Sample React Native App
 * 
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//navigation para controlar las pantallas
import {NavigationContainer} from '@react-navigation/native'
import MainScreen from './src/components/MainScreen'
import { View } from 'react-native';

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" />
      <Image
       source={
         require('./assets/header.png')}
         style={{width: 412, height:65, alignItems:'center'}}
         />
         <View style={{ alignItems: 'center', flex: 0.6 }}></View>
        <View style={{  flex: 0.6, width:'412', height:'232'}}></View>
        <Swiper
      loop
      autoplay >
         <Image source={require('./assets/1.jpeg')}
         style={{width: 412, height:232}}
         />
         <Image source={require('./assets/2.jpg')}
         style={{width: 412, height:232}}
         />
         <Image source={require('./assets/3.jpg')}
         style={{width: 412, height:232}}
         />
         <Image source={require('./assets/4.jpg')}
         style={{width: 412, height:232}}
         />
         </Swiper>
         <View>
         <Image source={require('./assets/title_.png')} style={{width: 168, height:71, alignItems:'center'}}/>
         <Image source={require('./assets/line.png')} style={{width: 400, height:2, alignItems:'center', flex: 0.1}}/>
         </View>

      <MainScreen></MainScreen>

    </NavigationContainer>

  );
};



export default App;