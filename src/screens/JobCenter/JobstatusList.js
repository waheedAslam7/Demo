import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '~/utils/Layouts';
import lightTheme from '~/utils/Theme';
import Base_Text from '~/components/Texts/Base_Text';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '~/components/Buttons/Button';
import {ScrollView} from 'react-native';
import {Images} from '~/assets/sourceFile';
import {CheckBox} from 'react-native-elements';
const JobstatusList = ({navigation}) => {
  const [isOpenSheet, setisOpenSheet] = useState(false);
  const [selectedspareParts, setselectedspareParts] = useState([]);

  return (
    <View
      style={{
        width: width,
        height: '100%',
        backgroundColor: lightTheme.lightGrey,
      }}>
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <View
          style={{
            height: 'auto',
            backgroundColor: lightTheme.white,
            width: '95%',
            alignSelf: 'center',
            borderRadius: 20,
            top: 20,
            paddingVertical: 25,
            paddingHorizontal:5
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: 40,
            }}>
            <Base_Text text={'Crypto'} />
            <Base_Text text={'Bist'} />
            <Base_Text text={'Forax'} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: 40,
            }}>
            <View
              style={{
                width: '48%',
                height: '100%',
                backgroundColor:"#e6e6fa",
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderRadius: 10,
              }}>
              <Base_Text text={'Forex Assist'} />
              <View>
                <Image
                  source={{
                    uri: 'https://cdn3.iconfinder.com/data/icons/arrow-shapes/24/Up-512.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/R.e454bb06eeff93e780c580399bca8236?rik=cLLBU0ASAmbzyA&pid=ImgRaw&r=0',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                width: '48%',
                height: '100%',
                backgroundColor: lightTheme.lightGrey,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderRadius: 10,
              }}>
              <Base_Text text={'0.1'} />
              <View>
                <Image
                  source={{
                    uri: 'https://cdn3.iconfinder.com/data/icons/arrow-shapes/24/Up-512.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/R.e454bb06eeff93e780c580399bca8236?rik=cLLBU0ASAmbzyA&pid=ImgRaw&r=0',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: 40,
              marginTop: 20,
            }}>
            <View
              style={{
                width: '48%',
                height: '100%',
                backgroundColor: lightTheme.white,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderRadius: 10,
                height: 60,
              }}>
              <CheckBox
                checked={true}
                title="Buy"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
              <CheckBox
                checked={false}
                title="sel"
                onPress={() => {}}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View>

            <View
              style={{
                width: '48%',
                height: '100%',
                backgroundColor:"#e6e6fa",
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderRadius: 10,
              }}>
              <Base_Text text={'Girls'} />
              <View>
                <Image
                  source={{
                    uri: 'https://cdn3.iconfinder.com/data/icons/arrow-shapes/24/Up-512.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/R.e454bb06eeff93e780c580399bca8236?rik=cLLBU0ASAmbzyA&pid=ImgRaw&r=0',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              height: 40,
              marginTop: 20,
            }}>
            <View
              style={{
                width: '48%',
                height: '100%',
                backgroundColor: '#d8bfd8',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderRadius: 10,
              }}>
              <Base_Text text={'Kar Al'} />
              <View>
                <Image
                  source={{
                    uri: 'https://cdn3.iconfinder.com/data/icons/arrow-shapes/24/Up-512.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/R.e454bb06eeff93e780c580399bca8236?rik=cLLBU0ASAmbzyA&pid=ImgRaw&r=0',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                width: '48%',
                height: '100%',
                backgroundColor: '#bb3385',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderRadius: 10,
              }}>
              <Base_Text text={'Zarar Kes'} />
              <View>
                <Image
                  source={{
                    uri: 'https://cdn3.iconfinder.com/data/icons/arrow-shapes/24/Up-512.png',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
                <Image
                  source={{
                    uri: 'https://th.bing.com/th/id/R.e454bb06eeff93e780c580399bca8236?rik=cLLBU0ASAmbzyA&pid=ImgRaw&r=0',
                  }}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'center',
                    backfaceVisibility: lightTheme.lightBlue,
                    tintColor: lightTheme.black,
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              height: 40,
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                backgroundColor: lightTheme.lightBlue,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                left: 20,
              }}>
              <FontAwesome5Icon
                name="bell"
                size={16}
                color={lightTheme.black}
              />
            </TouchableOpacity>
            <Base_Text text={'Uzman Notu..'} left={40} />
          </View>

          <View style={{alignSelf: 'center', width: '100%', left: 80, top: 20}}>
            <Button
              label={'Pozisyon Olustor'}
              height={40}
              bg_color={lightTheme.themeColor}
              width={'50%'}
              border_Radius={10}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 40,
            marginTop: 100,
            alignSelf: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              backgroundColor:"blue",
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              left: 20,
            }}>
            <FontAwesome5Icon name="bell" size={16} color={lightTheme.white} />
          </TouchableOpacity>
          <Base_Text text={'Islem gelior boldirim oluster..'} left={40} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
            alignSelf: 'center',
            backgroundColor: lightTheme.white,
            width: '90%',
            height: 80,
            borderRadius: 20,
          }}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.794593c617c99ea5d197600e9740ace3?rik=iOjCmxJ6VlhvTA&pid=ImgRaw&r=0',
            }}
            style={{
              height: 40,
              width: 40,
              resizeMode: 'center',
              tintColor: lightTheme.themeColor,
            }}
          />
          <TouchableOpacity style={{}}>
            <Base_Text text={'Bildirim'} color={'red'} fontSize={16} />
            <Base_Text text={'Alkadasler takipte Kalin. islem geliyor'} />
          </TouchableOpacity>
          <Images.Left />
        </View>
      </ScrollView>
    </View>
  );
};

export default JobstatusList;

const styles = StyleSheet.create({
  listing: {
    height: '95%',
    top: 20,
    width: '95%',
    alignSelf: 'center',
  },
});
