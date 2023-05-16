import {StyleSheet,View, FlatList} from 'react-native';
import React from 'react';
import {Tracking_History} from './render_Items';

const Horizantal_Listing = ({data}) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{padding: 6, justifyContent: 'center'}}
      ItemSeparatorComponent={() => <View style={{height: 20, width: 20}} />}
      renderItem={({item}) => {
        return <Tracking_History item={item} />
      }}
    />
  );
};

export default Horizantal_Listing;

const styles = StyleSheet.create({});
