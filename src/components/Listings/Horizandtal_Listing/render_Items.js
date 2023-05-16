import {View} from 'react-native';
import {Images} from '~/assets/sourceFile';
import Base_Text from '~/components/Texts/Base_Text';
import {style} from '~/utils/Styles';
import lightTheme from '~/utils/Theme';

export const Tracking_History = ({item}) => {

  return (
    <View
      style={{
        height: 100,
        width: 100,
        borderRadius: 10,
        backgroundColor:lightTheme.inputGrey,
        ...style.shadowEffect,
        justifyContent: 'space-around',
        
      }}>
      <View
        style={{
          height: 40,
          width: 100,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 30,
            width: 30,
            backgroundColor: lightTheme.themeColor,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            left: 5,
          }}>
          {item?.type == 'Revenue' ? (
            <Images.Revenue fill={"red"} />
          ) : item?.type == 'Closed Task' ? (
            <Images.ClosedTask />
          ) : item?.type == 'Open Task' ? (
            <Images.OpenTaks />
          ) : (
            <Images.OpenTaks />
          )}
        </View>
        <Base_Text
          text={item.persent}
          color={lightTheme.lightBlack}
          fontSize={14}
        />
      </View>
      <Base_Text
        text={item.total}
        color={lightTheme.lightBlack}
        fontSize={14}
        textAlign={'left'}
        left={10}
      />
      <Base_Text text={item.type} fontSize={11} textAlign={'left'} left={10} />
    </View>
  );
};
