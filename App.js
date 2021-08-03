/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator1 from './navegacion/StackNavigator1';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <StackNavigator1 />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
