import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View as Container,
} from 'react-native';
import {height} from '~/utils/Layouts';
import lightTheme from '~/utils/Theme';
import Base_Text from '../Texts/Base_Text';
import Lottie from 'lottie-react-native';
import Matrices_Listing from '../Listings/Matries/Index';
import {Customer_Data, Vehcle_Data, servicesTypes} from '~/utils/Constants';
import {onNavigate} from '~/navigation/Methods';
import {CheckBox} from 'react-native-elements';
import {useSelector} from 'react-redux';
import SearchBar from '../inputsFields/SearchBar';
import RawBottomSheet from 'react-native-raw-bottom-sheet';
import Button from '../Buttons/Button';
export const ServiceSelectore = ({
  isOpen,
  type,
  onClose,
  navigation,
  onCustomerSelcet,
  onVechleSelcet,
  screentype,
}) => {
  const [CustomerData, setCustomerData] = useState(null);
  const refRBSheet = useRef();
  //   const {create_Order_Service} = useSelector(state => state);

  if (isOpen) {
    refRBSheet.current.open();
  }

  const gotoCraete = route => {
    refRBSheet.current.close();
    onClose();
    onNavigate(navigation, route);
    setCustomerData(null);
  };
  return (
    <Container style={styles.box}>
      <RawBottomSheet
        animationType="slide"
        onClose={onClose}
        ref={refRBSheet}
        closeOnPressBack={true}
        closeOnDragDown={true}
        keyboardAvoidingViewEnabled={false}
        closeOnPressMask={false}
        openDuration={1000}
        customStyles={{
          wrapper: {},
          draggableIcon: {
            backgroundColor: lightTheme.themeColor,
            width: 100,
          },
          container: {
            height: height / 1.2,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
        }}>
        <View style={styles.container}>
          <View style={styles.Title}>
            <Base_Text
              text={CustomerData == null ? 'Select Customer' : 'Select Vehicle'}
              fontSize={17}
              fontWeight={'bold'}
              color={lightTheme.themeColor}
              letterSpacing={1}
            />
            <TouchableOpacity
              onPress={() =>
                gotoCraete(
                  CustomerData == null ? 'AddNewCustomer' : 'AddNewVehicle',
                )
              }
              style={styles.arrowBTN}>
              <Lottie
                source={require('..//..//assets/Lottle/Plus.json')}
                autoPlay
                loop
              />
            </TouchableOpacity>
          </View>
          {CustomerData != null && (
            <Button
              label={'Go Back'}
              width={60}
              height={26}
              OnClick={() => {
                setCustomerData(null);
              }}
              bg_color={lightTheme.themeColor}
              border_Radius={10}
              left={2}
              fontSize={11}
            />
          )}
          <SearchBar
            place_holder={'Search'}
            onChangeValue={() => {}}
            Place_Holder_Color={lightTheme.inputGrey}
            bottom={-13}
          />

          <View
            style={{
              ...styles.popolarServices,
              height: CustomerData == null ? '82%' : '79%',
            }}>
            <Matrices_Listing
              data={CustomerData == null ? Customer_Data : Vehcle_Data}
              type={type}
              onPressItem={item => {
                if (CustomerData == null) {
                  setCustomerData(item);
                } else if (screentype == 'ServisesPage') {
                  onVechleSelcet({vehicle: item, customer: CustomerData});
                  setCustomerData(null);
                  refRBSheet.current.close();
                } else {
                  refRBSheet.current.close();
                  navigation.navigate('Services', {
                    vehicle: item,
                    customer: CustomerData,
                  });
                  setCustomerData(null);
                  onClose();
                }
              }}
            />
          </View>
        </View>
      </RawBottomSheet>
    </Container>
  );
};
export const ChooseSpareParts = ({
  isOpen,
  type,
  onClose,
  navigation,
  selected,
  onContinue,
  onSelect
}) => {
  const [CustomerData, setCustomerData] = useState(null);
  const refRBSheet = useRef();
  //   const {create_Order_Service} = useSelector(state => state);

  if (isOpen) {
    refRBSheet.current.open();
  }

  
  return (
    <Container style={styles.box}>
      <RawBottomSheet
        animationType="slide"
        onClose={onClose}
        ref={refRBSheet}
        closeOnPressBack={true}
        closeOnDragDown={true}
        keyboardAvoidingViewEnabled={false}
        closeOnPressMask={false}
        openDuration={1000}
        customStyles={{
          wrapper: {},
          draggableIcon: {
            backgroundColor: lightTheme.themeColor,
            width: 100,
          },
          container: {
            height: height / 1.7,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          },
        }}>
        <View style={styles.container}>
          <View style={styles.Title}>
            <Base_Text
              text={'Choose Spare Parts'}
              fontSize={17}
              fontWeight={'bold'}
              color={lightTheme.themeColor}
              letterSpacing={1}
            />
          </View>
          <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={{paddingBottom: 20}}>
            <View style={{height: '60%'}}>
              {servicesTypes.map(item => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() => {
                        onSelect(item)
                      }}
                      style={{
                        ...styles.listingBox,
                        backgroundColor:
                          selected == type ? lightTheme.themeColor : null,
                        height: 50,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        checkedColor={lightTheme.themeColor}
                        containerStyle={{
                          height: '100%',
                          width: '100%',
                          alignSelf: 'center',
                        }}
                        title={item}
                        checked={selected?.includes(item)}
                        onPress={() => {
                        onSelect(item)

                          // onServiceTypeSelect(type);
                        }}
                      />
                    </TouchableOpacity>
                  </>
                );
              })}
            </View>
          </ScrollView>
          <Button
            label={'Continue'}
            OnClick={()=>{
              onContinue()
            }}
            height={45}
            width={'100%'}
            bg_color={lightTheme.themeColor}
            border_Radius={10}
          />
        </View>
      </RawBottomSheet>
    </Container>
  );
};
const styles = StyleSheet.create({
  popolarServices: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 2,
    height: '82%',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    height: '90%',
  },
  Title: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  dropdownBox: {height: 60, width: '95%', alignSelf: 'center', bottom: 15},
  box: {
    height: height,
  },
  arrowBTN: {
    width: 70,
    height: 80,
    justifyContent: 'flex-end',
    left: 20,
  },
});
