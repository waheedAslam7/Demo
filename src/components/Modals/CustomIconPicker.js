import {StyleSheet,  View, Image} from 'react-native';
import Modal from 'react-native-modal';
import lightTheme from '~/utils/Theme';
import {TouchableOpacity} from 'react-native';
import {Images} from '~/assets/sourceFile';
import Base_Text from '../Texts/Base_Text';
import {CustomIcons} from '~/utils/Constants';
import Matrices_Listing from '../Listings/Matries/Index';
const CustomIconPicker = ({isOpen, onClose, onPickerItem, onDeviceSelect}) => {
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
          <View style={{height: 10}} />
          <Base_Text
            text={'Available Service Icons'}
            fontSize={18}
            color={lightTheme.themeColor}
            textAlign={'left'}
            left={20}
            letterSpacing={1}
            fontWeight={'bold'}
          />
          <View
            style={{
              height: '85%',
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Matrices_Listing
              data={CustomIcons}
              type={'CustomIcons'}
              onPressItem={item => {
                if (item?.LeftIcon == null) {
                  onDeviceSelect();
                } else {
                  onPickerItem();
                }
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomIconPicker;

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
