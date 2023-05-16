import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import Popular_Services, {
  CustomIcons,
  Customer_List,
  Products_items,
  RenderTimeSlots,
  Vehcle_List,
} from './render_Items';

const Matrices_Listing = ({
  data,
  type,
  onPressItem,
  isMultiSelect,
  selectedServiceData,
  noOfcoulmns
}) => {
  return (
    <FlatList
      data={data}
      numColumns={noOfcoulmns||type == 'Customer' ? 2 : type == 'Vehcle' ? 2 : 3}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{}}
      columnWrapperStyle={{
        justifyContent: type == 'Customer' ? 'space-around' : noOfcoulmns==2?"space-around": 'space-between',
        paddingVertical: 5,
      }}
      ItemSeparatorComponent={() => <View style={{height: 1, width: 10}} />}
      renderItem={({item, index}) => {
        return type == 'Customer' ? (
          <Customer_List item={item} onPressItem={item => onPressItem(item)} />
        ) : type == 'Vehcle' ? (
          <Vehcle_List item={item} onPressItem={item => onPressItem(item)} />
        ) : type == 'TimeSlot' ? (
          <RenderTimeSlots
            item={item}
            index={index}
            selectedSlots={selectedServiceData}
            onPressItem={item => onPressItem(item)}
          />
        ): type == 'CustomIcons' ? (
          <CustomIcons
            item={item}
            index={index}
            onPressItem={item => onPressItem(item)}
          />
        )
        
        : 
        type == 'Products' ? (
          <Products_items
            item={item}
            index={index}
            onPressItem={item => onPressItem(item)}
          />
        )
        
        : (
          <Popular_Services
            item={item}
            index={index}
            onPressItem={item => onPressItem(item)}
            selectedServiceData={selectedServiceData}
            isMultiSelect={isMultiSelect}
          />
        );
      }}
    />
  );
};

export default Matrices_Listing;

const styles = StyleSheet.create({});
