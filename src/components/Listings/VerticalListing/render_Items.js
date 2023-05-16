import {Images} from '~/assets/sourceFile';
import Service_Button from '~/components/Buttons/Service_Button';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Image} from 'react-native';
import {style} from '~/utils/Styles';
import lightTheme from '~/utils/Theme';
import Base_Text from '~/components/Texts/Base_Text';
import Button, {ButtonWithIcon, Save} from '~/components/Buttons/Button';
import {onNavigate} from '~/navigation/Methods';
import { TouchableOpacity } from 'react-native';
import Base_label_Text from '~/components/Texts/Base_label_Text';
export const CustomerList_Items = ({item}) => {
  const navigation = useNavigation();
  return (
    <Service_Button
      isShowLine
      isRightClick={true}
      item={{label: 'Waheed Aslam'}}
      OnPress={() => {}}
      LeftIcon={Images.UserwithCap}
      RightIcon={Images.Detail}
      width="60%"
    />
  );
};
export const VehicleList_Items = ({item}) => {
  const navigation = useNavigation();
  return (
    <Service_Button
      isShowLine
      isRightClick={false}
      item={{label: 'Waheed Aslam'}}
      OnPress={() => {}}
      LeftIcon={Images.UserwithCap}
      RightIcon={() => null}
      width="85%"
    />
  );
};
export const JobsList_Items = ({item,onItemPress}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...styles.jobBox,
        backgroundColor: lightTheme.white,
        justifyContent: 'space-between',
        paddingVertical:20,
        height:"auto"
      }}>
         
      <View style={{height:"80%",width:"20%",left:5,}}>
        <ButtonWithIcon
        height={50}
        width={50}
        onClick={()=>{
          onItemPress(item)
          // onNavigate(navigation,"JobDetails")
        }}
      
        />
{/* <Button
        width={'80%'}
        OnClick={() => {
          onNavigate(navigation,"JobDetails")
        }}
        color={lightTheme.white}
        height={40}
        label={'Start Job'}
        bg_color={lightTheme.themeColor}
        border_Radius={5}
        fontSize={12}
      /> */}
      </View>
      <View style={{width:"75%",justifyContent:"space-around",padding:3}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center',}}>
          <Base_Text
            numberOfLines={1}
            text={item?.vihicle + '-'}
            textAlign={'left'}
            fontSize={16}
            color={lightTheme.black}
            fontWeight={'bold'}
          />
          <Base_Text
            numberOfLines={1}
            text={item?.customer}
            textAlign={'left'}
            fontSize={14}
            color={lightTheme.black}
            fontWeight={'bold'}
          />
        </View>

        <View
          style={{width: '75%', flexDirection: 'row', alignItems: 'center',padding:3}}>
          <Base_Text
            numberOfLines={1}
            text={768335 + '-'}
            textAlign={'left'}
            fontSize={14}
            color={lightTheme.black}
            fontWeight={'600'}
          />
          <Base_Text
            numberOfLines={1}
            text={"VLC5273"}
            textAlign={'left'}
            fontSize={14}
            color={lightTheme.black}
            fontWeight={'600'}
          />
        </View>

        <View
          style={{width: '75%', flexDirection: 'row', alignItems: 'center',justifyContent:"space-between",padding:3}}>
          <Base_label_Text
              text={"High"}
              textAlign={'left'}
              fontSize={13}
              fontWeight={'900'}
              color={lightTheme.DarkGreen}
            />
            <Base_label_Text
              text={"Quick placed job"}
              textAlign={'left'}
              fontSize={13}
              fontWeight={'900'}
              color={lightTheme.lightBlue}
            />
        </View>

        <View
          style={{width: '75%', flexDirection: 'row', alignItems: 'center'}}>
          
       
        </View>
      </View>

     
    </View>
  );
};
export const Notification_Item = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    
    onPress={()=>{
      onNavigate(navigation,"NotificationDetails",item)
    }}
    style={{...styles.jobBox, height: 80, marginBottom: 15}}>
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.d228b0b25a91cc3b76cebbc69963b4dc?rik=%2fPewfG1wcxJsTQ&pid=ImgRaw&r=0',
        }}
        style={{height: 60, width: 60, resizeMode: 'center'}}
      />
      <View style={{width: '55%'}}>
        <Base_Text
          numberOfLines={1}
          text={'Job Alert'}
          textAlign={'left'}
          left={5}
          fontSize={16}
          color={lightTheme.black}
          fontWeight={'bold'}
          letterSpacing={1}
        />
        <Base_Text
          numberOfLines={1}
          text={'You have a new job from manager tab to view'}
          textAlign={'left'}
          left={5}
          fontSize={12}
          color={lightTheme.black}
          fontWeight={'300'}
          letterSpacing={1}
        />
      </View>

      <Save
        onClick={() => {}}
        backgroundColor={lightTheme.white}
        color={lightTheme.themeColor}
        solid={index == 3 || index == 5 ? true : false}
        size={18}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  jobBox: {
    height: 60,
    width: '100%',
    ...style.shadowEffect,
    shadowRadius: 5,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 9,
    elevation: 1.3,
    shadowColor: lightTheme.themeColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
