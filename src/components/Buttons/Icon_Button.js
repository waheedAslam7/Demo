import {StyleSheet, View} from 'react-native';
import React from 'react';
import Base_Text from '../Texts/Base_Text';
import {Images} from '~/assets/sourceFile';
import {style} from '~/utils/Styles';
import lightTheme from '~/utils/Theme';
import {TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Icon_Button = ({
  text,
  fontSize,
  color,
  width,
  Icon,
  isRightLine,
  bottom,
  borderWidth,
  top,
  shadowColor,
  onPress,
  isRightIcon,
  onRightIconPress
}) => {

  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: width,
        alignSelf: 'center',
        height: 55,
        alignItems: 'center',
        borderColor: lightTheme.inputGrey,
        bottom: bottom,
        top:top,
        ...style.shadowEffect,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5.1,
        shadowColor:shadowColor||lightTheme.themeColor,

      }}>
      <View
        style={{
          height:35,
          width: 38,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isRightLine ? null : lightTheme.inputGrey,
          borderRadius: isRightLine ? null : 5,
          borderRightWidth: isRightLine ? 3 : 0,
          marginLeft: 12,
          borderColor:lightTheme.inputGrey
        }}>
        <Icon height={'80%'} width={'80%'} />
      </View>
      <Base_Text text={text} fontSize={fontSize} color={color} left={15} />
      {
        isRightIcon&&
        <TouchableOpacity 
        onPress={onRightIconPress}
        style={styles.trashbtn}>
        <FontAwesome5Icon
        name='trash'
        color={lightTheme.red}
        size={16}
        />
        </TouchableOpacity>
      }
  
    </TouchableOpacity>
  );
};

export const Icon_Button_Simple = ({
  text,
  fontSize,
  color,
  width,
  Icon,
  bottom,
  borderWidth,
  top,
  onPress,
  borderRadius,
  alignSelf,
  left
}) => {

  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: width,
        alignSelf: alignSelf||'center',
        height:40,
        alignItems: 'center',
        borderColor: lightTheme.lightBlue,
        bottom: bottom,
        top:top,
       borderRadius:borderRadius||10,
       borderWidth:borderWidth,
       left:left

      }}>
      <View
        style={{
          height:25,
          width: 25,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 12,
          borderColor:lightTheme.inputGrey
        }}>
        <Icon height={'80%'} width={'80%'} />
      </View>
      <Base_Text text={text} fontSize={fontSize} color={color} left={15} />
    </TouchableOpacity>
  );
};

export default Icon_Button;

const styles = StyleSheet.create({
  trashbtn:{width:25,height:25,position:"absolute",right:10,justifyContent:"center",alignItems:"center"}
});
