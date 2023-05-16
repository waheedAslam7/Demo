import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import lightTheme from '~/utils/Theme';
import RenderServiceList, {
  RenderServiceCatelist,
  RenderServiceTypelist,
  ServiceCateListingHeader,
  ServiceListingHeader,
  ServiceTypeListingHeader,
} from './RenderServiceList';
import {DeleteButton, Pencil, ViewButton} from '../Buttons/Button';

const Paginations = ({
  height,
  documents,
  ITEMS_PER_PAGE,
  pageIndex,
  onEdit,
  onView,
  navigation,
  type,
}) => {
  const ServiceListing = item => {
    return (
      <View style={styles.renderitemBox}>
        {type == 'ServiceListing' ? (
          <RenderServiceList />
        ) : type == 'Service Type' ? (
          <RenderServiceTypelist />
        ) : type == 'Service Category' ? (
          <RenderServiceCatelist />
        ) : null}
        <View style={styles.actionBox}>
          <Pencil onClick={() => {}} backgroundColor={lightTheme.themeColor} />
          <DeleteButton
            onClick={() => {}}
            backgroundColor={lightTheme.lightBlue}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{height: height || '88%'}}>
      <ScrollView horizontal style={{height: '100%', width: '100%'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() =>
            type == 'ServiceListing' ? (
              <ServiceListingHeader />
            ) : type == 'Service Type' ? (
              <ServiceTypeListingHeader />
            ) : type == 'Service Category' ? (
              <ServiceCateListingHeader />
            ) : null
          }
          data={documents.slice(
            pageIndex * ITEMS_PER_PAGE,
            (pageIndex + 1) * ITEMS_PER_PAGE,
          )}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return type == 'ServiceListing'||"Service Type"||"Service Category"
              ? ServiceListing(item):null
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Paginations;

export const PaginationFooter = ({
  height,
  width,
  totalPages,
  pageIndex,
  handlePageChange,
}) => {
  return (
    <View
      style={{
        ...styles.paginationBox,
        height: height || '8%',
        width: width || '70%',
      }}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewBox}
        style={{height: '100%', width: '100%'}}>
        {Array.from({length: totalPages}, (_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => handlePageChange(i)}
            style={{
              ...styles.paginationButton,
              backgroundColor:
                i === pageIndex ? lightTheme.themeColor : lightTheme.white,
            }}>
            <Text
              style={{
                fontWeight: i === pageIndex ? 'bold' : '300',
                color: i == pageIndex ? lightTheme.white : lightTheme.black,
              }}>
              {i + 1}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationButton: {
    width: 35,
    height: 35,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
    alignSelf: 'center',
  },
  paginationBox: {
    alignSelf: 'center',
    backgroundColor: lightTheme.minLitegrey,
    borderRadius: 10,
  },
  scrollViewBox: {flexGrow: 1, justifyContent: 'center'},

  renderitemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: lightTheme.lightGrey,
    marginTop: 13,
    alignItems: 'center',
  },
  actionBox: {
    width: 130,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom:3
  },
});
