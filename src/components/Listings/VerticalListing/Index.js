import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {
  CustomerList_Items,
  JobsList_Items,
  Notification_Item,
  VehicleList_Items,
} from './render_Items';

const Vertical_Listing = ({data, type,onItemPress}) => {
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding: 6, justifyContent: 'center'}}
      ItemSeparatorComponent={() => (
        <View style={{height: type == 'Notification' ? 2 : 14, width: 20}} />
      )}
      renderItem={({item, index}) => {
        return type == 'CustomerListing' ? (
          <CustomerList_Items item={item} />
        ) : type == 'VehicleListing' ? (
          <VehicleList_Items item={item}  onItemPress={(item)=>onItemPress(item)} />
        ) : type == 'JobsListing' ? (
          <JobsList_Items item={item}onItemPress={(item)=>onItemPress(item)}  />
        ) : type == 'Notification' ? (
          <Notification_Item item={item} index={index} />
        ) : (
          <CustomerList_Items item={item} index={index} />
        );
      }}
    />
  );
};

export default Vertical_Listing;

const styles = StyleSheet.create({});
