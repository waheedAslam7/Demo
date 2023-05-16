import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import lightTheme from '~/utils/Theme';
import {width, height} from '~/utils/Layouts';
import Lottie from 'lottie-react-native';
import Base_Text from '../Texts/Base_Text';
const Loader = ({isOpen,isConfirmed}) => {


const loader_Item=()=>{
  return(
    <>
      <View style={{height:100}}>
            <Lottie
            cacheComposition={true}
            useNativeLooping={true}
            cacheStrategy="strong"
              source={require('~/assets/Lottle/LoaderBlue.json')}
              autoPlay={true}
              style={styles.LoaderStyle}
            />
          </View>
          <Base_Text
            text={'Please wait ...'}
            textAlign="left"
            left={0}
            color={lightTheme.themeColor}
            fontSize={16}
          />
    </>
  )
}
const onConfirm_Item=()=>{
  return(
    <>
      <View style={{height:100}}>
            <Lottie
            cacheComposition={true}
            useNativeLooping={true}
            cacheStrategy="strong"
              source={require('~/assets/Lottle/Checkmark.json')}
              autoPlay={true}
              style={styles.LoaderStyle}
            />
          </View>
    </>
  )
}



  return (
    <View>
      <Modal
        isVisible={isOpen}
        animationIn="slideInUp"
        swipeDirection="left"
        backdropOpacity={0.4}
        useNativeDriver={true}
        animationOutTiming={200}
        animationInTiming={600}>
        <View style={styles.container}>
        {
          isConfirmed?onConfirm_Item()
          :loader_Item()
        }
        </View>
      </Modal>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.white,
    width: 160,
    height: 160,
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  LoaderStyle: {
    position: 'absolute',
    height: 100,
    alignSelf: 'center',
  },
});
