import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {style} from '~/utils/Styles';
import lightTheme from '~/utils/Theme';
import {useNavigation} from '@react-navigation/native';
import Base_Text from '../Texts/Base_Text';
const SqureFooter = ({isAbsolute,isShowCopyRight}) => {


  return (
    <View
   
        style={{
            ...style.topLayer,
            justifyContent: 'center',
            height:"10%",
            backgroundColor:lightTheme.themeColor,
            position:isAbsolute&&"absolute",
            bottom:0
      }}>
       {isShowCopyRight&&<><Base_Text
         text={"Copyrights TecMCH. © 2023 All Rights Reserved."}
         color={lightTheme.white}
         fontSize={10}
         letterSpacing={1}
         fontWeight={"300"}
         />
         <Base_Text
         text={"Powered By Tech Vezoto"}
         color={lightTheme.white}
         fontSize={10}
         letterSpacing={1}
         fontWeight={"300"}
         />
       </>}
    </View>
  );
};

export default SqureFooter;

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
