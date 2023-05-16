import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Input} from 'react-native-elements';
import lightTheme from '~/utils/Theme';
import {Images} from '~/assets/sourceFile';
import {width} from '~/utils/Layouts';
const SearchBar = ({
  label,
  bottom,
  onChangeValue,
  val,
  col,
  borderCol,
  noOfline,
  place_holder,
  right_Pos,
  Bradious,
  Place_Holder_Color,
}) => {
  return (
    <Input
      value={val}
      numberOfLines={noOfline}
      placeholder={place_holder}
      placeholderTextColor={Place_Holder_Color}
      onChangeText={e => onChangeValue(e)}
      label={label}
      keyboardType="default"
      leftIcon={() => (
        <View
          style={{
            height: '80%',
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRightWidth: 2,
            borderColor: lightTheme.inputGrey,
          }}>
          <Images.Search />
        </View>
      )}
      inputStyle={{
        color: col || lightTheme.black,
        fontSize: 14,
        fontWeight: 'bold',
      }}
      containerStyle={{
        width: width - 20,
        alignSelf: 'center',
        bottom: bottom,
        right: right_Pos,
      }}
      inputContainerStyle={{
        borderWidth: 1.5,
        paddingLeft: 10,
        borderRadius: Bradious || 5,
        backgroundColor: lightTheme.white,
        borderColor: lightTheme.inputGrey,
        height: 45,
        shadowColor: lightTheme.inputGrey,
        shadowOpacity: 0.5,
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 5,
        elevation: 1,
      }}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
