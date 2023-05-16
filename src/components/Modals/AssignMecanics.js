import {StyleSheet, Text, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import lightTheme from '~/utils/Theme';
import {TouchableOpacity} from 'react-native';
import {Images} from '~/assets/sourceFile';
import Base_Text from '../Texts/Base_Text';
import Check_Box from '../CheckBoxs/Custom_Check_Box';
import {useState} from 'react';
import DropDown from '../drop_Down/DropDown';
import {mechanicdropDown} from '~/utils/Constants';
import Button from '../Buttons/Button';
const AssignMecanic = ({isOpen, onClose, onshedule_Job, onQuickPlace}) => {
  const [Periorty, setPeriorty] = useState('');
  return (
    <View>
      <Modal
        isVisible={isOpen}
        animationIn="slideInUp"
        swipeDirection="left"
        backdropOpacity={0.7}
        useNativeDriver={true}
        animationOutTiming={300}
        animationInTiming={600}>
        <TouchableOpacity onPress={onClose} style={styles.crossBtn}>
          <Image source={Images.cross} style={styles.img} />
        </TouchableOpacity>

        <View style={styles.marginBlack} />
        <View style={styles.content}>
          <View style={styles.circle}>
            <Base_Text text={'!'} fontSize={30} color={lightTheme.themeColor} />
          </View>
          <View style={{height: 10}} />
          <Base_Text
            text={'Job Periorty'}
            fontSize={18}
            color={lightTheme.black}
            textAlign={'left'}
            left={10}
            letterSpacing={1}
            fontWeight={'bold'}
          />
          <View
            style={{
              height: '10%',
              width: '80%',
              alignSelf: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              left: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Check_Box
                height={20}
                width={20}
                onChange={() => {
                  setPeriorty('High');
                }}
                selectediconCol={lightTheme.white}
                selectedbgCol={lightTheme.themeColor}
                bocCol={lightTheme.lightBlue}
                value={Periorty == 'High' ? true : false}
              />
              <Base_Text
                text={'High'}
                fontSize={15}
                color={lightTheme.black}
                left={5}
                fontWeight={'400'}
              />
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', left: 10}}>
              <Check_Box
                height={20}
                width={20}
                onChange={() => {
                  setPeriorty('Medium');
                }}
                selectediconCol={lightTheme.white}
                selectedbgCol={lightTheme.themeColor}
                bocCol={lightTheme.lightBlue}
                value={Periorty == 'Medium' ? true : false}
              />
              <Base_Text
                text={'Medium'}
                fontSize={15}
                color={lightTheme.black}
                left={5}
                fontWeight={'400'}
              />
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', left: 20}}>
              <Check_Box
                onChange={() => {
                  setPeriorty('Low');
                }}
                height={20}
                width={20}
                selectediconCol={lightTheme.white}
                selectedbgCol={lightTheme.themeColor}
                bocCol={lightTheme.lightBlue}
                value={Periorty == 'Low' ? true : false}
              />
              <Base_Text
                text={'Low'}
                fontSize={15}
                color={lightTheme.black}
                left={5}
                fontWeight={'400'}
              />
            </View>
          </View>
          <View style={{height: 10}} />
          <View style={{width: '95%', alignSelf: 'center', bottom: 5}}>
            <DropDown
              formStatus={true}
              Data={mechanicdropDown}
              place_holder={'Select Mechanic'}
              onchange={() => {}}
              place_holder_color={lightTheme.black}
            />
          </View>
          <View style={{height: 20}} />
          <View style={{width: '95%', alignSelf: 'center', height: 45}}>
            <Button
              bg_color={lightTheme.themeColor}
              width={'100%'}
              height={'100%'}
              label={'Schedule Job'}
              border_Radius={10}
              OnClick={() => {
                onshedule_Job();
              }}
            />
          </View>
          <View style={{height: 20}} />
          <View style={{width: '95%', alignSelf: 'center', height: 45}}>
            <Button
              bg_color={lightTheme.themeColor}
              width={'100%'}
              height={'100%'}
              label={'Quick Place Job'}
              border_Radius={10}
              OnClick={() => {
                onQuickPlace();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AssignMecanic;

const styles = StyleSheet.create({
  crossBtn: {
    height: 50,
    width: 50,
    backgroundColor: lightTheme.white,
    opacity: 1,
    borderWidth: 2,
    alignSelf: 'flex-end',
    top: 0,
    borderRadius: 50,
    borderColor: lightTheme.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '60%',
    width: '60%',
    resizeMode: 'center',
    tintColor: lightTheme.themeColor,
  },
  marginBlack: {
    height: 60,
    width: '90%',
    backgroundColor: lightTheme.white,
    opacity: 0,
    borderWidth: 2,
    alignSelf: 'center',
  },
  content: {
    height: '65%',
    width: '100%',
    backgroundColor: lightTheme.white,
    opacity: 1,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.themeColor,
  },
  circle: {
    height: 80,
    width: 80,
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 50,
    borderColor: lightTheme.themeColor,
    justifyContent: 'center',
  },
});
