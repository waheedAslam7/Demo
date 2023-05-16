import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Images} from '~/assets/sourceFile';
import {style} from '~/utils/Styles';
import {ImageBackground} from 'react-native';
import {bottom_Tabs} from '~/utils/Constants';
import {TouchableOpacity} from 'react-native';
import Base_Text from '~/components/Texts/Base_Text';
import lightTheme from '~/utils/Theme';
import {useNavigation} from '@react-navigation/native';
import {onNavigate} from '~/navigation/Methods';
const Main_Footer = ({isShowTabs}) => {
  const [layout_Height, setlayout_Height] = useState(95);
  const navigation = useNavigation();
  const onPlus = () => {
    onNavigate(navigation, 'CreateNewService');
  };

  return (
    <View
      style={{
        ...style.topLayer,
        position: 'absolute',
        bottom: 0,
      }}>
      <ImageBackground
        source={Images.Bottom_Layer_Blue_Png}
        style={{...style.header_Image, justifyContent: 'center'}}>
        {isShowTabs && (
          <View
            onLayout={event =>
              setlayout_Height(event?.nativeEvent?.layout?.height)
            }
            style={styles.TabsBox}>
            {bottom_Tabs?.map(tab => {
              return (
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => tab?.isplus && onPlus()}
                    style={{
                      height: tab?.isplus ? 68 : 25,
                      width: tab?.isplus ? 68 : 25,
                      borderRadius: tab?.isplus ? 68 : 5,
                      backgroundColor: tab?.isplus
                        ? lightTheme.lightGrey
                        : lightTheme.tabs,
                      bottom: tab?.isplus ? layout_Height / 4 : 3,
                      borderWidth: tab?.isplus ? 4 : 0,
                      borderColor: lightTheme.tabs,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {tab?.isplus && <Images.Plus />}
                  </TouchableOpacity>

                  {!tab?.isplus && (
                    <Base_Text
                      letterSpacing={1.2}
                      text={tab?.label}
                      fontSize={8}
                      textAlign={'left'}
                      fontWeight={'300'}
                      color={lightTheme.white}
                    />
                  )}
                </View>
              );
            })}
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Main_Footer;

const styles = StyleSheet.create({
  TabsBox: {
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});
