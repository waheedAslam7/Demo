import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import Home from '~/screens/Dashboards/Home';
const Drawer = createDrawerNavigator();
const Drawer_Index = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Home}/>
    </Drawer.Navigator>
  );
};

export default Drawer_Index;

