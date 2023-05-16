import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Base_Text from '../Texts/Base_Text';
import CustomInput from './CustomInput';
import lightTheme from '~/utils/Theme';
import {TextInput} from 'react-native';
import {style} from '~/utils/Styles';

const IconInput = ({
  Icon,
  color,
  text,
  fontSize,
  left,
  width,
  onChangeValue,
  value,
  height,
  ismultiline,
  numberOfLines,
  keyboardType,
  handleFocus,
  shadowColor,
  handleBlur
}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width || '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'flex-start',
          
        }}>
        <View
          style={{
            width: 25,
            height: 25,
            backgroundColor: lightTheme.inputGrey,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Icon />
        </View>
        <Base_Text color={color} text={text} fontSize={fontSize} left={left} />
      </View>
      <TextInput
      onChangeText={onChangeValue}
      numberOfLines={numberOfLines}
      multiline={ismultiline}
      keyboardType={keyboardType}
      onFocus={handleFocus}
      onBlur={handleBlur}
        style={{
          width: '100%',
          ...style.shadowEffect,
          shadowColor: shadowColor||lightTheme.themeColor,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8.1,
          marginTop:15,
          shadowRadius:10,
          height:height||43,
          paddingHorizontal:10
        }}
      />
    </View>
  );
};

export default IconInput;

const styles = StyleSheet.create({});
