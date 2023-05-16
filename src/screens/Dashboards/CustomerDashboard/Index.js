import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Main_Header from '~/components/headers/Main_Header';
import Main_Footer from '~/components/Footer/MainFooter/Index';
import Button from '~/components/Buttons/Button';
import Horizantal_Listing from '~/components/Listings/Horizandtal_Listing/Index';
import Service_Button from '~/components/Buttons/Service_Button';
import Base_Text from '~/components/Texts/Base_Text';
import Matrices_Listing from '~/components/Listings/Matries/Index';
import lightTheme from '~/utils/Theme';
import {style} from '~/utils/Styles';
import {onNavigate} from '~/navigation/Methods';
import {
  filter_buttons,
  popular_Services_Data,
  service_buttons,
  tracking_data,
} from '~/utils/Constants';
import {useSelector, useDispatch} from 'react-redux';
import {ServiceSelectore} from '~/components/BottomSheets/ServiceSelectores';
import {loader, onConfirmedAction} from '~/StateManagment/Redux/Actions/Index';
import SquareHeader from '~/components/headers/SquareHeader';
const Customer_Dashboard = ({navigation, route}) => {
  const [selected_filter, setselected_filter] = useState('Today');
  const [isOpenBottomSheet, setisOpenBottomSheet] = useState(false);
  const [isrefreshing, setisrefreshing] = useState(false);

  const [CustomerData, setCustomerData] = useState(null);
  const [typeSheet, settypeSheet] = useState('Customer');
  const dispatch = useDispatch();
  const onFilterjobs = label => {
    setselected_filter(label);
    dispatch(onConfirmedAction(true));
    setTimeout(() => {
      dispatch(onConfirmedAction(false));
    }, 5000);
  };

  useEffect(() => {
    if (route?.params?.isOpenOrder == true) {
      setisOpenBottomSheet(true);
    }
  }, []);

  return (
    <SafeAreaView style={{...style.safeArea_Container}}>
      <View style={{...style.root_Container}}>
        <View style={{height: '100%', width: '100%'}}>
          <ScrollView
            style={{height: '100%', marginTop: isrefreshing?'15%':"5%",marginBottom:"20%"}}
            refreshControl={
              <RefreshControl
                refreshing={isrefreshing}
                style={{marginTop: 100}}
                onRefresh={() => {
                  setisrefreshing(true);
                  setTimeout(() => {
                  setisrefreshing(false);
                  }, 10000);
                }}
              />
            }
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: '20%', paddingTop: '23%'}}>
            <View style={styles.filterButtonBox}>
              {filter_buttons?.map(button => {
                return (
                  <Button
                    label={button.label}
                    bg_color={
                      selected_filter == button.label
                        ? lightTheme.themeColor
                        : lightTheme.lightBlue
                    }
                    width={90}
                    height={35}
                    border_Radius={20}
                    OnClick={() => onFilterjobs(button?.label)}
                  />
                );
              })}
            </View>
            <View style={styles.ServicesBox}>
              <Horizantal_Listing data={tracking_data} />
            </View>

            <View
              style={{
                ...styles.ServicesBox,
                height: 170,
                justifyContent: 'space-around',
              }}>
              {service_buttons?.map(button => {
                return (
                  <Service_Button
                    item={button}
                    isShowLine
                    OnPress={() => {
                      if (button?.label == 'Create a Repair Order') {
                        setisOpenBottomSheet(true);
                      } else if (button?.label == 'Parts Counter Sale') {
                      } else {
                        onNavigate(navigation, button?.route);
                      }
                    }}
                    navigation={navigation}
                    LeftIcon={button?.leftIcon}
                    RightIcon={button?.righIcon}
                  />
                );
              })}
            </View>

            <Base_Text
              text={'Popular Services'}
              textAlign="left"
              left={10}
              fontSize={16}
            />
            <View style={styles.popolarServices}>
              <Matrices_Listing
                onPressItem={() => {}}
                data={popular_Services_Data}
              />
            </View>
          </ScrollView>
        </View>
        <SquareHeader/>

        <Main_Footer  />
      </View>
      <ServiceSelectore
        isOpen={isOpenBottomSheet}
        onClose={() => setisOpenBottomSheet(false)}
        navigation={navigation}
        onCustomerSelcet={customer => {
          setCustomerData(customer);
          setTimeout(() => {
            settypeSheet('Vehcle');
            setisOpenBottomSheet(true);
          }, 500);
        }}
        onVechleSelcet={vehicle => {
          // dispatch(loader(true))

          setTimeout(() => {
            dispatch(loader(false));
            navigation.navigate('Services', {
              vehicle: vehicle,
              customer: CustomerData,
            });
            setCustomerData(null);
            settypeSheet('Customer');
          }, 600);
        }}
        type={typeSheet}
      />
    </SafeAreaView>
  );
};

export default Customer_Dashboard;

const styles = StyleSheet.create({
  filterButtonBox: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  ServicesBox: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
  popolarServices: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
});
