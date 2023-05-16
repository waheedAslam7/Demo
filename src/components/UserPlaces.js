import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {style} from '~/utils/Styles';
import Main_Header from './headers/Main_Header';
import Main_Footer from './Footer/MainFooter/Index';
import SearchBar from './inputsFields/SearchBar';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import lightTheme from '~/utils/Theme';
import Text_Icons from './Texts/Text_Icons';
import {Images} from '~/assets/sourceFile';
const UserPlaces = () => {
  return (
    <SafeAreaView style={{...style.safeArea_Container}}>
      <View style={{...style.root_Container}}>
        <Main_Header label="Search Address" isBack />
        <View style={{...styles.ContentBox, width: '89%', alignSelf: 'center'}}>
          <Text_Icons text={'Location'} Icon={Images.Location} left={10} />
          <View style={{height: 15}} />
          <SearchBar onChangeValue={() => {}} 
          place_holder={"Enter your Location"}
          />
          {/*     
          <GooglePlacesAutocomplete
            placeholder="Enter Your Location"
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyDLHvDUVrZUChLn-aOnkFV42QaHw-Iw794',
              language: 'en',
            }}
            fetchDetails={false}
            styles={{
              textInputContainer: {
                backgroundColor: 'grey',
              },
              textInput: {
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
                bottom: 20,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              container: {
                width: '90%',
                alignSelf: 'center',
                borderWidth: 2,
                padding: 25,
                borderRadius: 5,
                borderColor: lightTheme.lightBlue,
              },
            }}
          /> */}
        </View>
        <Main_Footer />
      </View>
    </SafeAreaView>
  );
};

export default UserPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    height: 44,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#c8c7cc',
    borderTopWidth: 0.5,
  },
  powered: {},
  listView: {},
  row: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  },
  description: {},
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
});
