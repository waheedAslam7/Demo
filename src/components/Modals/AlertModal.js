import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import lightTheme from '~/utils/Theme';
import {height, width} from '~/utils/Layouts';
import {BlurView} from '@react-native-community/blur';

const AlertModal = ({
  isOpen,
  onClose,
  tittle,
  description,
  navigation,
  type,
  onlyShow_ConfirmButton,
  isBlur,
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
        animationInTiming={300}>
        {isBlur && (
          <BlurView style={styles.absolute} blurType="light" blurAmount={1} />
        )}
        <View
          style={{
            ...styles.container,
            height: height / 4.5,
          }}>
          <Text
            style={{
              ...styles.Tittle,
              top: 5,
              letterSpacing: 1,
              marginTop: 5,
            }}>
            {tittle}
          </Text>
          <Text
            style={{
              ...styles.Tittle,
              ...styles.description,
            }}>
            {description}
          </Text>
          <View
            style={{
              ...styles.btnView,
              height: '30%',
            }}>
            {!onlyShow_ConfirmButton && (
              <TouchableOpacity
                style={styles.cancelbtn}
                onPress={() => {
                  onClose();
                }}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                onClose();
              }}
              style={{
                width: onlyShow_ConfirmButton ? '100%' : '50%',
                ...styles.okyBTn,
              }}>
              <Text style={{...styles.btnText}}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AlertModal;

export const styles = StyleSheet.create({
  container: {
    width: width - 60,
    height: height / 4.5,
    backgroundColor: lightTheme.white,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  Tittle: {
    width: '100%',
    height: '20%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 22,
    color: lightTheme.black,
    fontWeight: 'bold',
  },
  btnView: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: lightTheme.themeColor,
    fontWeight:"bold",
    letterSpacing: 2,
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
  description: {
    fontWeight: '600',
    alignSelf: 'center',
    width: '80%',
    height: '45%',
    paddingVertical: 5,
    letterSpacing: 1,
    fontSize: 16,
  },
  cancelbtn: {
    width: '50%',
    height: '100%',
    borderTopWidth: 1,
    borderRightWidth: 2,
    justifyContent: 'center',
    borderTopColor: lightTheme.themeColor,
    borderRightColor: lightTheme.themeColor,
    borderTopWidth: 2,

  },
  okyBTn: {
    height: '100%',
    borderTopWidth: 2,
    justifyContent: 'center',
    borderTopColor: lightTheme.themeColor,
  },
});
