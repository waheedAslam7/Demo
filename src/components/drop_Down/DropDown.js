import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Base_Text from '../Texts/Base_Text'
import React, {useState} from 'react';
import lightTheme from '~/utils/Theme';
import { style } from '~/utils/Styles';
const DropDown = ({
  label,
  Data,
  onchange,
  val,
  formStatus,
  place_holder,
  bg,
  Bw,
  place_holder_color
}) => {
const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <TouchableOpacity
        disabled={true}
        onPress={() => {}}
        style={{
          ...styles.item,
          backgroundColor:
            item.value == 'disable'
              ? lightTheme.reject
              : item.value === value
              ? lightTheme.themeColor
              : null,
          borderRadius: 5,
        }}>
        <Base_Text
          color={item.value === value ? lightTheme.white : lightTheme.black}
          text={item?.label}
        />
        {item.value === value && (
          <Text style={{fontWeight: 'bold', color: lightTheme.white}}>✓</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      {label ? (
        <View style={{width: '100%', bottom: 5}}>
          <Base_Text text={label} color={lightTheme.black} fontSize={14} />
        </View>
      ) : null}

      <Dropdown
        disable={!formStatus}
        style={{
          ...styles.dropdown,
          backgroundColor: bg || 'white',
          // borderWidth: Bw || 1.5,
          
        }}
        placeholderStyle={{
          ...styles.placeholderStyle,
          color: place_holder_color||lightTheme.lightBlue,
        }}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={Data}
        maxHeight={400}
        labelField="label"
        valueField="value"
        placeholder={place_holder || 'Select item'}
        searchPlaceholder="Search..."
        value={val || value}
        onChange={item => {
          onchange(item?.value);
          setValue(item.value);
        }}
        containerStyle={{
          // borderWidth: 1.5,
          // borderRadius: 10,
          // elevation: 0,
          // padding: 5,
        
        }}
        // renderLeftIcon={() => (
        //   <FontAwesome5Icon
        //     style={styles.icon}
        //     color="black"
        //     name="user"
        //     size={20}
        //   />
        // )}
        renderItem={renderItem}
      />
    </>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    width: '100%',
          ...style.shadowEffect,
          shadowColor: lightTheme.themeColor,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8.1,
          marginTop:15,
          shadowRadius:10,
          paddingHorizontal:10,
          borderWidth:1.5,
          borderRadius:5,
          borderColor:lightTheme.inputGrey
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    color: lightTheme.black,
  },

  placeholderStyle: {
    fontSize: 14,
    left: 10,
    fontWeight: 'bold',
  },
  selectedTextStyle: {
    fontSize: 12,
    left: 10,
    color: lightTheme.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: lightTheme.black,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    color: lightTheme.black,
  },
});
