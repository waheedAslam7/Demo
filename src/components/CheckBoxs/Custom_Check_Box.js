import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import lightTheme from '~/utils/Theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
const Check_Box = ({value, height, width, item, onChange, mleft,bocCol,selectedbgCol, selectediconCol,disabled}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5,
        borderColor: lightTheme.lightGrey,
        marginLeft: mleft,
      }}>
      <TouchableOpacity
      disabled={disabled}
        onPress={() => onChange()}
        style={{
          backgroundColor:value==true?selectedbgCol:bocCol,
          height:height||26,
          width:width||26,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems:"center"
        }}>
          {
            value==true? <FontAwesome5
            name={'check'}
            size={16}
            color={value==true?selectediconCol:lightTheme.themeColor}
          />:null
          }
       
      </TouchableOpacity>

      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{
          color: lightTheme.black,
          textAlign: 'left',
          fontSize: 14,
          textAlignVertical: 'center',
          left: 5,
        }}>
        {item}
      </Text>
    </View>
  );
};

export default Check_Box;

const styles = StyleSheet.create({});
