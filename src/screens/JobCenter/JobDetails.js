import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {style} from '~/utils/Styles';
import Main_Header from '~/components/headers/Main_Header';
import Main_Footer from '~/components/Footer/MainFooter/Index';
import Base_Text from '~/components/Texts/Base_Text';
import lightTheme from '~/utils/Theme';
import RenderChat from '~/components/Chats/RenderMessages';
import FormsFields from './Formsfields';
import {dynamicsForm} from '~/utils/Constants';
const JobDetails = () => {
  return (
    <SafeAreaView style={{...style.safeArea_Container}}>
      <KeyboardAvoidingView keyboardVerticalOffset={100}>
        <View style={{...style.root_Container}}>
          <Main_Header label="View Job" isBack isAbsoulte />
          <View
            style={{
              height: '85%',
              width: '100%',
              position: 'absolute',
              marginTop: '24%',
            }}>
            <Base_Text
              text={'Job Form'}
              fontSize={18}
              textAlign={'left'}
              left={15}
              bottom={-10}
            />
            <View style={styles.listing}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 150}}>
                <FormsFields form={dynamicsForm} />
                <View style={{height: 30}} />
                <Base_Text text={'Comments'} fontSize={18} textAlign={'left'} />
                <View style={{...styles.chat, marginTop: 10}}>
                  <RenderChat />
                </View>
              </ScrollView>
            </View>
          </View>
          <Main_Footer />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  listing: {
    height: '90%',
    top: 20,
    width: '95%',
    alignSelf: 'center',
  },
  chat: {
    height: 230,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: lightTheme.themeColor,
    padding: 5,
  },
});

{
  /* {[
                  {value: 'Pending', status: false},
                  {value: 'In Progress', status: false},
                  {value: 'In review', status: true},
                  {value: 'Approved', status: false},
                  {value: 'Completed', status: false},
                ].map(value => {
                  return (
                    <View
                      style={{
                        height: 50,
                        borderBottomWidth: 2,
                        borderColor: lightTheme.lightBlue,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Check_Box
                        disabled={true}
                        height={20}
                        width={20}
                        onChange={() => {}}
                        selectediconCol={lightTheme.white}
                        selectedbgCol={lightTheme.themeColor}
                        bocCol={lightTheme.lightBlue}
                        value={value.status}
                      />
                      <Base_Text
                        text={value?.value}
                        fontSize={14}
                        textAlign={'left'}
                        left={15}
                        letterSpacing={1}
                      />
                    </View>
                  );
                })} */
}
{
  /* <View
                  style={{
                    height: 240,
                    marginTop: 20,
                    borderWidth: 2,
                    borderColor: lightTheme.lightBlue,
                    borderRadius: 5,
                  }}>
                  <RenderChat />
                </View> */
}
