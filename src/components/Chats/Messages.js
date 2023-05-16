import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import lightTheme from '~/utils/Theme';
import moment from 'moment';
import { Images } from '~/assets/sourceFile';
const Messages = ({Item}) => {
  const user = useSelector(state => state?.user?.data);

  //receive msg
  const receiverMsgView = Item => {
    return (
      <>
        <View
          style={{
            height: 50,
            alignSelf: 'flex-start',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{color: lightTheme.lightGrey, fontSize: 12, paddingLeft: 5}}>
            {moment.utc(Item?.updated_at).local().startOf('seconds').fromNow()}
          </Text>
          <Text
            style={{
              color: lightTheme.black,
              fontWeight: 'bold',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
            Admin
          </Text>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              backgroundColor: lightTheme.lightGrey,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
           <Images.UserPic/>
          </View>
        </View>
        {Item?.attachment != null ? (
          <>
            <View
              style={[
                styles.balloon,
                {backgroundColor: lightTheme.lightGrey, width: '35%'},
              ]}>
              {/* <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    Uri_employee_satisfaction_form_chat_attachments +
                      '/' +
                      Item?.attachment,
                  )
                }>
                <Text
                  numberOfLines={1}
                  style={{
                    color: lightTheme.black,
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>
                  Tap to open
                </Text>
              </TouchableOpacity> */}
            </View>
          </>
        ) : null}

        <View style={[styles.item, styles.itemIn]}>
          <View
            style={[
              styles.balloon,
              {padding: 4, backgroundColor: lightTheme.lightGrey},
            ]}>
            <Text style={{color: lightTheme.black}}>{Item?.text}</Text>
            <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
              <Svg
                style={styles.arrowLeft}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5">
                <Path
                  d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                  fill={lightTheme.lightGrey}
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>
      </>
    );
  };
  //send message
  const senderMsgView = Item => {
    return (
      <>
        <View
          style={{
            height: 50,
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: lightTheme.eyeIcon_col,
              fontSize: 12,
              paddingLeft: 5,
            }}>
            {
              moment.utc(Item?.updated_at).local().startOf('seconds').fromNow()
            }
          </Text>
          <Text
            style={{
              color: lightTheme.black,
              fontWeight: 'bold',
              paddingLeft: 5,
              paddingRight: 5,
            }}>
            You
          </Text>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              backgroundColor: lightTheme.eyeIcon_col,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
           
              <Images.UserPic/>
          
          
          </View>
        </View>
        <View style={[styles.item, styles.itemOut, {flexDirection: 'column'}]}>
          {Item?.attachment != null ? (
            <>
              <View
                style={[
                  styles.balloon,
                  {backgroundColor: lightTheme.eyeIcon_col,width:"35%",alignSelf:"flex-end"},

                ]}>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      Uri_employee_satisfaction_form_chat_attachments +
                        '/' +
                        Item?.attachment,
                    )
                  }>
                  <Text
                    style={{
                      color: lightTheme.black,
                      fontWeight: 'bold',
                      fontSize: 12,
                    }}>
                    Tap to open
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
          <View
            style={[
              styles.balloon,
              {
                backgroundColor: lightTheme.eyeIcon_col,
                marginTop: Item?.attachment != null ? 10 : 0,
              },
            ]}>
            <Text style={{color: lightTheme.black}}>{Item?.text}</Text>
            <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
              <Svg
                style={styles.arrowRight}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.485 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5">
                <Path
                  d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                  fill={lightTheme.eyeIcon_col}
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {Item?._id == 1
        ? senderMsgView(Item)
        : receiverMsgView(Item)}
    </View>
  );
};

export default Messages;
const styles = StyleSheet.create({
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: 'row',
  },
  itemIn: {
    marginLeft: 20,
  },
  itemOut: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  arrowRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
  userImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: lightTheme.DarkGreen,
  },
  container:{
    // height:"70%",borderWidth:1
  }
});
