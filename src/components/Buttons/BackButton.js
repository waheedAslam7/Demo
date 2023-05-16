import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import lightTheme from '~/utils/Theme';
import {useNavigation} from '@react-navigation/native';
const BackButton = ({height, width, text, textCol, borCol, onPress}) => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignSelf: 'center',
          alignItems: 'center',
          width: width || '100%',
          height: height || '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.btn}>
          <FontAwesome5Icon
            name="chevron-left"
            color={lightTheme.themeColor}
            size={18}
            style={{fontWeight: 'bold'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          height: height || '100%',
          width: width || '100%',
        }}>
        <Text
          style={{
            color: textCol || lightTheme.black,
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize:18
          }}>
          {text}
        </Text>
      </View>
    </>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  btn:{
    height: 25,
    width: 25,
    borderRadius: 20,
    backgroundColor: lightTheme.white,
    justifyContent: 'center',
    alignItems: 'center',
    left: 20,
  }
});
