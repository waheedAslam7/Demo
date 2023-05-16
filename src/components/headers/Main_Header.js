import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {style} from '~/utils/Styles';
import {Menu_Button} from '../Buttons/Button';
import Base_Text from '../Texts/Base_Text';
import {Images} from '~/assets/sourceFile';
import lightTheme from '~/utils/Theme';
import BackButton from '../Buttons/BackButton';
import {useNavigation} from '@react-navigation/native';
import {onNavigate} from '~/navigation/Methods';
import Lottie from 'lottie-react-native';
import {Badge} from 'react-native-elements';

const Main_Header = ({
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
        }}>
        <ImageBackground
          source={Images.Top_Layer_Blue_Png}
          style={{
            ...style.header_Image,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '100%'}}>
            <Base_Text
              color={lightTheme.white}
              bottom={20}
              text={label}
              fontSize={17}
              letterSpacing={1.3}
            />
          </View>
        </ImageBackground>
        <View style={styles.buttonBox}>
          {isBack ? <BackButton /> : <Menu_Button />}
        </View>
        {isShowNotification && (
          <TouchableOpacity
            onPress={() => {
              onNavigate(navigation, 'NotificationIndex');
            }}
            style={{
              ...styles.noti,
              backgroundColor: isBlue
                ? lightTheme.white
                : lightTheme.themeColor,
              flexDirection: 'row',
            }}>
            <Lottie
              source={require('~/assets/Lottle/BellJson.json')}
              autoPlay={true}
              loop
              style={styles.LoaderStyle}
            />
            {/* <FontAwesome5Icon
              name={'bell'}
              size={20}
              color={isBlue ? lightTheme.themeColor : lightTheme.white}
            /> */}
            <Badge
              value={'12'}
              status={'error'}
              containerStyle={{right: -15, bottom: 10}}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Main_Header;

const styles = StyleSheet.create({
  buttonBox: {width: '15%', bottom: 60, position: 'absolute'},
  noti: {
    height: 35,
    width: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 58,
    right: 20,
  },
  LoaderStyle: {
    position: 'absolute',
    height: 100,
    alignSelf: 'center',
  },
});
