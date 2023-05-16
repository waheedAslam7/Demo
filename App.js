import {StyleSheet, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import lightTheme from '~/utils/Theme';
import RootStack from '~/navigation/RootStack';
import {Provider} from 'react-redux';
import Store from '~/StateManagment/Redux/Store/Index';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <StatusBar
          animated={true}
          backgroundColor={lightTheme.themeColor}
          barStyle="default"
        />
        <RootStack />
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
