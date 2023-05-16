import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Service_Button from '~/components/Buttons/Service_Button';
import Base_Text from '~/components/Texts/Base_Text';
import {DownArrow} from '~/assets/components/Icons';
import {useNavigation} from '@react-navigation/native';
import {sideBar_Data} from '~/utils/Constants';
import {Images} from '~/assets/sourceFile';
import lightTheme from '~/utils/Theme';
import {onNavigate} from '../Methods';
const CustomDrawer = props => {
  const [selectedName, setselectedName] = useState('Home');
  const [expand, setexpand] = useState(false);
  const [layoutHeight, setlayoutHeight] = useState(20);
  const [updatedHeight, setupdatedHeight] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const expand_collapse_Function = () => {
    const animationConfig = {
      duration: 130,
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    };
    LayoutAnimation.configureNext(animationConfig);
    if (expand == false) {
      setupdatedHeight(layoutHeight);
      setexpand(true);
    } else {
      setupdatedHeight(0);
      setexpand(false);
    }
  };

  const getHeight = height => {
    setlayoutHeight(height);
  };

  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            height: '12%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.ProfileBox}>
            <View style={{justifyContent: 'space-around', width: '80%'}}>
              <Base_Text
                text={'Katy Peiree'}
                fontSize={14}
                fontWeight={'bold'}
                color={lightTheme.themeColor}
                letterSpacing={1}
                textAlign={'left'}
                left={10}
              />
              <Base_Text
                text={'askdjahskjd@ps.com'}
                fontSize={14}
                fontWeight={'400'}
                color={lightTheme.themeColor}

                textAlign={'left'}
                left={10}
              />
            </View>

            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
        <DrawerContentScrollView
          style={{zIndex: -1}}
          {...props}
          showsVerticalScrollIndicator={false}>
          <View style={{height: 20}} />
          {sideBar_Data.map(Root => {
            return (
              <>
              {
                Root?.type?<View style={{height:50,borderTopWidth:2,width:"100%"}}>
                 <Base_Text text={"Communicate"}
                    width={"100%"}
                    textAlign={"left"}
                    left={40}
                    
                    bottom={-20}
                    fontSize={15}
                    />
                </View>
              :

                <View
                  style={{width: '90%'}}
                  onLayout={event =>
                    getHeight(event?.nativeEvent?.layout?.height)
                  }
                  useNativeDriver={true}>
                  <TouchableOpacity
                  onPress={()=>{
                    setselectedName(Root.label)
                  }}
                    style={{
                      height: 45,
                      backgroundColor: selectedName==Root.label?"#b19cd9":lightTheme.white,
                      borderBottomRightRadius: 20,
                      borderTopRightRadius: 20,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                    }}>
                    <Image
                      source={{
                        uri:Root.img,
                      }}
                      style={{width:30,height:30,resizeMode:"center",tintColor:lightTheme.themeColor}}
                    />
                    <Base_Text text={Root.label}
                    width={"70%"}
                    textAlign={"left"}
                color={lightTheme.themeColor}

                    />
                  </TouchableOpacity>
                </View>
          }
                <View style={{height: 10}} />
              </>
            );
          })}
        </DrawerContentScrollView>
      
      </View>
    </>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  BTN2: {
    width: '80%',
    height: 40,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: lightTheme.inputGrey,
  },
  ProfileBox: {
    height: 100,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:"#b19cd9",
    borderBottomRightRadius: 50,
  },
});
