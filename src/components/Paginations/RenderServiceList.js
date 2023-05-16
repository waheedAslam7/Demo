import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import lightTheme from '~/utils/Theme';
import moment from 'moment/moment';
import {useSelector} from 'react-redux';

const RenderServiceList = ({item, navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => {}} style={{width: 150}}>
        <Text style={{...styles.ItemText, width: 150}}>dantig & Panting</Text>
      </TouchableOpacity>
        <Text style={{...styles.ItemText, width: 135}}>General Service</Text>
      <View
        style={{
          width: 130,
          borderRadius: 5,
          paddingVertical: 8,
        }}>
        <Text
          style={{
            ...styles.ItemText,
            width: 120,
          }}>
          {moment().format('YYYY-MM-DD')}
        </Text>
      </View>
    </>
  );
};


export const RenderServiceTypelist = ({item, navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => {}} style={{width: 150}}>
        <Text style={{...styles.ItemText, width: 150}}>dantig & Panting</Text>
      </TouchableOpacity>
        <Text
          style={{
            ...styles.ItemText,
            width: 130,
          }}>
          {moment().format('YYYY-MM-DD')}
        </Text>
    </>
  );
};
export const RenderServiceCatelist = ({item, navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => {}} style={{width: 150}}>
        <Text style={{...styles.ItemText, width: 150}}>General Service</Text>
      </TouchableOpacity>
        <Text
          style={{
            ...styles.ItemText,
            width: 130,
          }}>
          {moment().format('YYYY-MM-DD')}
        </Text>
    </>
  );
};


export const ServiceListingHeader = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={{...styles.headetText, width: 130,marginLeft:2}}>Service Type</Text>
      <Text style={{...styles.headetText, width: 130}}>Service Category</Text>
      <Text style={{...styles.headetText, width: 100}}>Created At</Text>
      <Text style={{...styles.headetText, width: 100}}>Actions</Text>
    </View>
  );
};
export const ServiceTypeListingHeader = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={{...styles.headetText, width: 130,marginLeft:2}}>Service Type</Text>
      <Text style={{...styles.headetText, width: 130}}>Created At</Text>
      <Text style={{...styles.headetText, width: 100}}>Actions</Text>
    </View>
  );
};
export const ServiceCateListingHeader = () => {
  return (
    <View style={styles.headerBox}>
      <Text style={{...styles.headetText, width: 130,marginLeft:2}}>Service Category</Text>
      <Text style={{...styles.headetText, width: 130}}>Created At</Text>
      <Text style={{...styles.headetText, width: 100}}>Actions</Text>
    </View>
  );
};
export default RenderServiceList;

const styles = StyleSheet.create({
  ItemText: {
    color: lightTheme.black,
    fontWeight: '400',
    fontSize: 14,
    paddingHorizontal: 5,
    width: 90,
    marginLeft: 10,
    textAlign: 'left',
  },
  headetText: {
    color: lightTheme.white,
    fontWeight:"bold",
    fontSize: 14,
    paddingHorizontal: 5,
    width: 90,
  },
  headerBox: {
    height: 50,
    backgroundColor: lightTheme.themeColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 5,
  },
});
