import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {style} from '~/utils/Styles';
import {Menu_Button} from '../Buttons/Button';
import Base_Text from '../Texts/Base_Text';
import {Images} from '~/assets/sourceFile';
import lightTheme from '~/utils/Theme';
import BackButton from '../Buttons/BackButton';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Lottie from 'lottie-react-native';
import {Badge} from 'react-native-elements';
import {onNavigate} from '~/navigation/Methods';
import {useNavigation} from '@react-navigation/native';

const SquareHeader = ({
  isBack,
  label,
  isBlue,
  isShowNotification,
  isAbsoulte,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          ...style.topLayer,
          justifyContent: 'center',
          position: isAbsoulte && 'absolute',
          height: '15%',
          backgroundColor: lightTheme.themeColor,
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }}>
        <View style={styles.buttonBox}>
          <Menu_Button />
        </View>

        <View
          style={{
            height: '70%',
            width: '50%',
            alignSelf: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            bottom: 10,
          }}>
          <Base_Text text={'cakdar c'} color={lightTheme.white} />
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              backgroundColor: lightTheme.white,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5Icon name="user" size={16} color={lightTheme.black} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              backgroundColor: lightTheme.white,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FontAwesome5Icon name="bell" size={16} color={lightTheme.black} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            left: 20,
          }}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.1c75547f74d8aa7720a495f208c9b1c8?rik=cm6kaKgbGRM6Cg&pid=ImgRaw&r=0',
            }}
            style={{height: 30, width: 30, tintColor: lightTheme.white}}
          />
          <Base_Text text={'Uz.Fardi'} color={lightTheme.white} left={20} />
        </View>
      </View>
    </>
  );
};

export default SquareHeader;

const styles = StyleSheet.create({
  buttonBox: {width: '15%', position: 'absolute'},
  noti: {
    height: 35,
    width: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    position: 'absolute',
    alignSelf: 'flex-end',
    // bottom: 58,
    right: 20,
    borderWidth: 1,
  },
});
