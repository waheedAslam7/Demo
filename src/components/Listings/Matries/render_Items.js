import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import {width} from '~/utils/Layouts';
import {Images} from '~/assets/sourceFile';
import Base_Text from '~/components/Texts/Base_Text';
import lightTheme from '~/utils/Theme';
import {TouchableOpacity} from 'react-native';
import {style} from '~/utils/Styles';
import {useDispatch} from 'react-redux';
import {CheckBox} from 'react-native-elements';
const Popular_Services = ({
  item,
  onPressItem,
  isMultiSelect,
  index,
  selectedServiceData,
}) => {
  return (
    <>
      <TouchableOpacity
        disabled={isMultiSelect}
        onPress={() => onPressItem(item)}
        style={styles.container}>
        <View style={styles.serviceIcon}>
          {item?.label == `Check ${'\n'}Engine Light` ? (
            <Images.Engine height={18} width={18} />
          ) : item?.label == `Normal${'\n'}Service` ? (
            <Images.NormalService height={18} width={18} />
          ) : item?.label == `Wheel ${'\n'}Balancing` ? (
            <Images.Wheel height={18} width={18} />
          ) : item?.label == `Battery${'\n'}Services` ? (
            <Images.Battary height={18} width={18} />
          ) : item?.label == `A/C${'\n'}Daignosis` ? (
            <Images.Fan height={18} width={18} />
          ) : item?.label == `Wheel${'\n'}Alignment` ? (
            <Images.WheelAlignment height={18} width={18} />
          ) : item?.label == 'Transmission' ? (
            <Images.Transmission height={18} width={18} />
          ) : item?.label == 'Exhaust' ? (
            <Images.Exhaust height={18} width={18} />
          ) : item?.label == 'Brake Pads' ? (
            <Images.Brake height={18} width={18} />
          ) : null}
        </View>
        <Base_Text
          text={item?.label}
          fontWeight="700"
          fontSize={12}
          textAlign={'left'}
        />
        <Text style={styles.price}>{item?.price + ' ' + '£'}</Text>

        {isMultiSelect && (
          <View style={styles.checkBoxs}>
            <CheckBox
              checkedColor={lightTheme.themeColor}
              containerStyle={{
                height: '100%',
                width: '100%',
              }}
              checked={selectedServiceData?.includes(item?.label)}
              onPress={() => onPressItem(index)}
            />

          </View>
        )}
      </TouchableOpacity>
    </>
  );
};
export const Customer_List = ({item, onPressItem}) => {
  const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={{...styles.container, height: 190, width: '47%'}}>
        <Image source={{uri: item?.img}} style={styles.img} />
        {/* <View style={styles.status}>
        <Base_Text text={item?.status} fontWeight="700" fontSize={12} />
      </View> */}
        <Base_Text
          text={item?.name}
          fontWeight="bold"
          fontSize={14}
          textAlign={'center'}
          color={lightTheme.themeColor}
        />
        <Base_Text
          text={item?.service}
          fontWeight="700"
          fontSize={12}
          textAlign={'center'}
          color={lightTheme.lightBlue}
        />
      </TouchableOpacity>
    </>
  );
};
export const Vehcle_List = ({item, onPressItem}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={{...styles.container, height: 190, width: '47%', padding: 0}}>
      <Image
        source={{uri: item?.img}}
        style={{...styles.img, width: '98%', height: '50%', borderRadius: 5}}
      />
      {/* <View style={{...styles.status,left:-10}}>
        <Base_Text text={item?.status} fontWeight="700" fontSize={12}
        
        />
      </View> */}
      <Base_Text
        text={item?.name}
        fontWeight="bold"
        fontSize={14}
        textAlign={'left'}
        left={10}
        color={lightTheme.themeColor}
      />
      <Base_Text
        text={item?.service}
        fontWeight="700"
        fontSize={12}
        textAlign={'left'}
        left={10}
        color={lightTheme.lightBlue}
      />
    </TouchableOpacity>
  );
};
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export const CustomIcons = ({item, onPressItem, index}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={{
          ...styles.container2,
          backgroundColor: index == 0 ? null : getRandomColor(),
        }}>
        {item?.LeftIcon == null ? (
          <>
            <Image source={Images.UploadImage} style={styles.iconSelectImg} />
          </>
        ) : null}
      </TouchableOpacity>
    </>
  );
};
export const RenderTimeSlots = ({item, onPressItem, selectedSlots}) => {
  return (
    <>
      <TouchableOpacity
        // disabled={item?.isDisable}
        onPress={() => onPressItem(item)}
        style={{
          ...styles.container,
          height: 55,
          backgroundColor:
            selectedSlots == item?.label
              ? lightTheme.lightBlue
              : item?.isDisable == true
              ? lightTheme.lightGrey
              : null,
        }}>
        <Base_Text text={item?.label} color={lightTheme.themeColor} />
      </TouchableOpacity>
    </>
  );
};
export const Products_items = ({item, onPressItem, index}) => {
  return (
    <>
      <View style={{height: 'auto', width: '47%'}}>
        <TouchableOpacity
          onPress={() => onPressItem(item)}
          style={{
            ...styles.ProductBox,
          }}>
            <Image
          source={{uri:item?.img}}
          style={{width:"90%",height:"100%",resizeMode:"contain",alignSelf:"center"}}
            />
          </TouchableOpacity>
        <Base_Text
          text={item?.name}
          color={lightTheme.inputText}
          fontSize={15}
        />
        <Base_Text text={item?.price + ' ' + '£'} fontSize={13} />
      </View>
    </>
  );
};
export default Popular_Services;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: width / 3.6,
    justifyContent: 'space-around',
    padding: 10,
    ...style.shadowEffect,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 5.8,
    shadowColor: lightTheme.themeColor,
  },
  container2: {
    height: 90,
    width: 90,
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: lightTheme.lightBlue,
    alignItems: 'center',
  },
  status: {
    backgroundColor: '#F0F0F0',
    width: 50,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  img: {
    resizeMode: 'center',
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 70,
  },
  checkBoxs: {
    height: 45,
    width: 40,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 3,
    top: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceIcon: {
    backgroundColor: '#F0F0F0',
    width: 25,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSelectImg: {
    height: 50,
    width: 50,
    resizeMode: 'center',
    tintColor: lightTheme.lightBlue,
  },
  price: {
    position: 'absolute',
    right: 10,
    top: 35,
    color: lightTheme.themeColor,
    fontWeight: 'bold',
    fontSize: 12,
  },
  ProductBox: {
    width: '100%',
    height: 180,
    backgroundColor: lightTheme.lightBlue,
  },
});
