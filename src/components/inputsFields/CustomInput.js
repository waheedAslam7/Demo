import React, {useRef} from 'react';
import {Input} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { width } from '~/utils/Layouts';
import lightTheme from '~/utils/Theme';

const CustomInput = ({
  label,
  keyboard_Type,
  font_Weight,
  bottom,
  iconName,
  onChangeIcon,
  onChangeValue,
  seureText,
  contentType,
  errorMsg,
  isEdit,
  WD,
  val,
  col,
  bg,
  borderCol,
  noOfline,
  font_Size,
  bottomLabel,
  place_holder,
  right_Pos,
  Bradious,
  label_left,
  Place_Holder_Color,
  disabled,
  labelCol,
  iconCol
}) => {
  return (
    <Input
    disabled={disabled}
      value={val}
      numberOfLines={noOfline}
      placeholder={place_holder}
      placeholderTextColor={Place_Holder_Color}
      onChangeText={e => onChangeValue(e)}
      label={label}
      errorStyle={{color: 'red'}}
      errorMessage={errorMsg}
      textContentType={contentType}
      secureTextEntry={seureText}
    
      keyboardType="default"
      labelStyle={{
        fontSize: font_Size || 14,
       
        fontWeight: font_Weight,
        bottom: bottomLabel || 3,
        left: label_left || 10,
        color:labelCol|| lightTheme.input_label,
      }}
      //   leftIcon={
      //     <FontAwesome5 name={'envelope'} size={20} color={"red"} />
      //   }
      rightIcon={
        <FontAwesome5
          onPress={onChangeIcon}
          name={iconName}
          size={16}
          color={iconCol||lightTheme.inputText}
          style={{right: 5}}
        />
      }
      inputStyle={{color: col || lightTheme.black, fontSize: 14,fontWeight:"bold"}}
      containerStyle={{
        width: isEdit ? '95%' : WD || width - 30,
        alignSelf: 'center',
        bottom: bottom,
        right: right_Pos,
      
      
       
      }}
      inputContainerStyle={{
        borderWidth: 1.5,
        paddingLeft: 10,
        borderRadius: Bradious || 5,
        backgroundColor: bg || '#D7DEED',
        borderColor: borderCol || '#CECECE',
        height: 40,
        
        // padding:10,
      }}
    />
  );
};

export default CustomInput;
