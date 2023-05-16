import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {style} from '~/utils/Styles';
import Main_Header from '~/components/headers/Main_Header';
import Main_Footer from '~/components/Footer/MainFooter/Index';
import Vertical_Listing from '~/components/Listings/VerticalListing/Index';
import { JobsData } from '~/utils/Constants';
const JobCenter = () => {
  return (
    <SafeAreaView style={{...style.safeArea_Container}}>
      <View style={{...style.root_Container}}>
        <Main_Header label="Job Center" />
        <View style={{height: '70%', width: '100%'}}></View>
        <Main_Footer />
        <View
          style={{
            height: '78%',
            width: '100%',
            position: 'absolute',
            marginTop: '24%',
          }}>
          <View style={styles.listing}>
            <Vertical_Listing
              data={JobsData}
              type={'JobsListing'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JobCenter;

const styles = StyleSheet.create({
  listing: {
    height: '95%',
    top: 20,
    width: '95%',
    alignSelf: 'center',
  },
});
