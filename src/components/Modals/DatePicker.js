import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import lightTheme from '~/utils/Theme';
import {height, width} from '~/utils/Layouts';
import Date_Calender from '../Callenders/Date_Callender';
import {Images} from '~/assets/sourceFile';
import Base_Text from '../Texts/Base_Text';
const DatePickerModel = ({
  isOpen,
  onClose,
  onChange,
  type,
  markedDates,
  onConfirm,
}) => {
  return (
    <View>
      <Modal
        isVisible={isOpen}
        animationIn="slideInUp"
        swipeDirection="left"
        backdropOpacity={0.5}
        useNativeDriver={true}
        animationOutTiming={300}
        animationInTiming={100}>
        <TouchableOpacity onPress={onClose} style={styles.crossBtn}>
          <Image source={Images.cross} style={styles.img} />
        </TouchableOpacity>
        <View style={{height: 40}} />
        <View
          style={{
            ...styles.container,
            height: height / 1.7,
          }}>
            <Base_Text
            text={"Select available Slot"}
            color={lightTheme.white}
            fontSize={15}
            letterSpacing={1}
            />
          <Date_Calender
            markedDates={markedDates}
            onChange={val => onChange(val)}
          />
        </View>
        <TouchableOpacity onPress={onConfirm} style={styles.crossBtn}>
          <Image source={Images.rightArrow} style={styles.img} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DatePickerModel;

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    height: height / 2.6,
    backgroundColor: lightTheme.themeColor,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 30,
    padding: 20,
  },
  BTN: {
    width: 20,
    height: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: lightTheme.white,
    top: 5,
    right: 5,
    borderRadius: 5,
  },
  absolute: {
    position: 'absolute',
    width: width,
    height: height + 10,
    top: -20,
    left: -20,
    bottom: 0,
    right: 0,
  },
  img: {
    height: '60%',
    width: '60%',
    resizeMode: 'center',
    tintColor: lightTheme.white,
  },
  crossBtn: {
    height: 50,
    width: 50,
    backgroundColor: lightTheme.themeColor,
    opacity: 1,
    borderWidth: 2,
    alignSelf: 'flex-end',
    top: 0,
    borderRadius: 50,
    borderColor: lightTheme.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
