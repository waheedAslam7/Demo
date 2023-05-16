import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {height} from '~/utils/Layouts';
import Drawer_Index from './Drawer_Navigation/Index';

const Stack = createNativeStackNavigator();

const RootStack = () => {

  return (
    <View style={{height: height}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            animationTypeForReplace: 'push',
            animationDuration: 1000,
          }}>
          <Stack.Screen name="Customer_Dashboard" component={Drawer_Index} />
        </Stack.Navigator>
      </NavigationContainer>
     
    </View>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
