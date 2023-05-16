import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import React from 'react';
import {style} from '~/utils/Styles';
import Main_Header from '~/components/headers/Main_Header';
import Main_Footer from '~/components/Footer/MainFooter/Index';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import lightTheme from '~/utils/Theme';
import {Badge} from 'react-native-elements';
import JobstatusList from '~/screens/JobCenter/JobstatusList';
import Base_Text from '~/components/Texts/Base_Text';
import H1 from '~/screens/H1';
export const JobcenterTab = () => {


  const Tab = createMaterialTopTabNavigator();
  return (
        <View style={{...style.root_Container}}>
          <View style={{height: '81%', width: '100%'}}>
            <Tab.Navigator
              tabBarScrollEnabled={true}
              screenOptions={{
                tabBarLabelStyle: {
                  fontSize: 14,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  textTransform: 'capitalize',
                },
                tabBarItemStyle: {width: 'auto'},
                tabBarStyle: {backgroundColor: lightTheme.themeColor},
                tabBarScrollEnabled: true,
                tabBarActiveTintColor: lightTheme.white,
                tabBarInactiveTintColor: lightTheme.lightGrey,
                tabBarGap: 5,
                tabBarIndicatorStyle: {backgroundColor: lightTheme.white},
                tabBarPressColor: lightTheme.lightBlue,
              }}>
              <Tab.Screen
                name="Pending"
                component={JobstatusList}
                options={{
                  tabBarLabel: () => (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Base_Text
                        text={'Yeni Islem'}
                        color={lightTheme.lightGrey}
                        fontSize={14}
                      />
                     
                    </View>
                  ),
                }}
              />
              <Tab.Screen
                name="InProgress"
                component={H1}
                options={{tabBarLabel:()=>{
                  return(
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Base_Text
                    text={'Acik'}
                    color={lightTheme.white}
                    fontSize={14}
                  />
                </View>)
                }}}
              />
              <Tab.Screen
                name="InReview"
                component={H1}
                options={{tabBarLabel:()=>{
                  return(
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Base_Text
                    text={'Kapanan'}
                    color={lightTheme.white}
                    fontSize={14}
                  />
                 
                </View>)
                }}}
              />
              <Tab.Screen name="Rejected" component={H1}
              options={{tabBarLabel:()=>{
                return(
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Base_Text
                  text={'Bildiremle'}
                  color={lightTheme.white}
                  fontSize={14}
                />
                <Badge
                  value={<View style={{height:20,width:20,backgroundColor:lightTheme.white,backgroundColor:lightTheme.white,borderRadius:10,}}>
                    <Base_Text
                    text={"2"}
                    />
                    </View>}
                  // status={'primary'}
                  containerStyle={{bottom:5}}
                  
                />
              </View>)
              }}}
              
              />
            
            </Tab.Navigator>
          </View>
        </View>
    
  );
};
