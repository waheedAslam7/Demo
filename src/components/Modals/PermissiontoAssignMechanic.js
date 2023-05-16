import {StyleSheet, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import lightTheme from '~/utils/Theme';
import {TouchableOpacity} from 'react-native';
import {Images} from '~/assets/sourceFile';
import Base_Text from '../Texts/Base_Text';
import {useState} from 'react';
import {height, width} from '~/utils/Layouts';
import {CheckBox} from 'react-native-elements';

const PermissiontoAssignMechanic = ({isOpen, onClose, onConfirm,isDisableMultipleMCH,onDisable}) => {
  const [isMultiple, setisMultiple] = useState(false);

  return (
    <View>
      <Modal
        isVisible={isOpen}
        animationIn="slideInUp"
        swipeDirection="left"
        backdropOpacity={0.7}
        useNativeDriver={true}
        animationOutTiming={200}
        animationInTiming={200}>
        <View
          style={{
            height: 60,
            position: 'absolute',
            top: height / 6,
            left: width / 3,
            alignSelf: 'center',
          }}>
          <Images.UserwithCap height={80} width={80} />
        </View>
        <TouchableOpacity onPress={onClose} style={styles.crossBtn}>
          <Image source={Images.cross} style={styles.img} />
        </TouchableOpacity>

        <View style={styles.marginBlack} />
        <View style={styles.content}>
          <View style={{height: 10}} />
          <View style={{width: '95%'}}>
            <Base_Text
              text={'Make Sure An Option For Services To Assign Mechanic'}
              fontSize={18}
              color={lightTheme.black}
              textAlign={'left'}
              left={10}
              letterSpacing={1}
              fontWeight={'bold'}
            />
          </View>

          <View style={{alignItems: 'center', height: 50, marginTop: 20}}>
            <CheckBox
              checkedColor={lightTheme.themeColor}
              containerStyle={{
                height: '100%',
                width: '95%',
                alignSelf: 'center',
                backgroundColor:lightTheme.doc_First_Index_color

              }}
              title={'Assign to Single Mechanic'}
              checked={isDisableMultipleMCH?true:isMultiple ? false : true}
              onPress={() => {
                setisMultiple(false);
              }}
            />
          </View>

          <View style={{alignItems: 'center', height: 50, marginTop: 10}}>
            <CheckBox
            // disabled={isDisableMultipleMCH}
              checkedColor={lightTheme.themeColor}
              containerStyle={{
                height: '100%',
                width: '95%',
                alignSelf: 'center',
                backgroundColor:isDisableMultipleMCH?lightTheme.lightGrey:lightTheme.doc_First_Index_color
              }}
              title={'Assign to Multple Mechanic'}
              checked={isDisableMultipleMCH?false:isMultiple}
              onPress={() => {
                isDisableMultipleMCH?onDisable():
                setisMultiple(true);
              }}
            />
          </View>
          <View style={{height: 10}} />
        </View>
        <TouchableOpacity
          onPress={() => {
            onConfirm(isMultiple);
          }}
          style={{...styles.crossBtn, top: 30}}>
          <Image source={Images.rightArrow} style={styles.img} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default PermissiontoAssignMechanic;

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
    height: 250,
    width: '100%',
    backgroundColor: lightTheme.white,
    opacity: 1,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.themeColor,
  },
});
