import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import lightTheme from '~/utils/Theme';
import {useSelector, useDispatch} from 'react-redux';
import IconInput from '~/components/inputsFields/IconInput';
import {emp_form_data} from '~/StateManagment/Redux/Actions/Index';
import DropDown from '~/components/drop_Down/DropDown';
import DocumentPicker from 'react-native-document-picker';
import {Images} from '~/assets/sourceFile';
import Text_Icons from '~/components/Texts/Text_Icons';
import {CheckBox} from 'react-native-elements';

const FormsFields = ({form, type, name, isupdated, formStatus}) => {
  const [sectionFieldData, setsectionFieldData] = useState({});
  const dispatch = useDispatch();
  const Forms = useSelector(state => state?.user);
  let formData = new FormData();

  const onSelectFile = fieldName => {
    DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      copyTo: 'cachesDirectory',
    }).then(res => {
      dispatch(
        emp_form_data({
          ...Forms.data,
          [fieldName]: {
            uri: res?.fileCopyUri,
            name: res?.name,
            type: res?.type,
          },
        }),
      );
    });
  };
  const onCheckBoxchange = (field, item) => {
    if (
      Forms?.data[field?.name] == '' ||
      Forms?.data[field?.name]?.length == 0 ||
      Forms?.data[field?.name] == null
    ) {
      dispatch(emp_form_data({...Forms.data, [field?.name]: [item]}));
    } else {
      if (Forms?.data[field?.name]?.includes(item)) {
        let result = Forms?.data[field?.name]?.filter(pre => {
          return pre != item;
        });
        dispatch(emp_form_data({...Forms.data, [field?.name]: result}));
      } else {
        let result = Forms?.data[field?.name]?.filter(pre => {
          return pre;
        });
        result?.push(item);
        dispatch(emp_form_data({...Forms.data, [field?.name]: result}));
      }
    }
  };

  return (
    <>
      {form?.map(field => {
        if (field?.type == 'text') {
          return (
            <View
              style={{
                ...styles.ContainerInput,
                height: 'auto',
              }}>
              <IconInput
                Icon={() => <Images.Notes />}
                left={8}
                text={field?.label_name}
                onChangeValue={e => {
                  dispatch(emp_form_data({...Forms.data, [field?.name]: e}));
                }}
              />
            </View>
          );
        } else if (field?.type == 'radio') {
          return (
            <View
              style={{
                ...styles.ContainerInput,
                height: 'auto',
                marginTop: 20,
              }}>
              <Text_Icons
                left={8}
                width="100%"
                text={field?.label_name}
                Icon={() => <Images.Battary />}
              />
              <View
                style={{
                  ...styles.CheckBoxCantainer,
                  justifyContent:
                    field?.option?.length == 2 ? 'flex-start' : 'flex-start',
                }}>
                {field?.option?.map(item => {
                  return (
                    <CheckBox
                      checkedColor={lightTheme.themeColor}
                      title={item}
                      containerStyle={{
                        alignSelf: 'center',
                        marginTop: 30,
                      }}
                      checked={true}
                      onPress={() => {}}
                    />
                  );
                })}
              </View>
            </View>
          );
        } else if (field?.type == 'checkbox') {
          return (
            <View
              style={{
                ...styles.ContainerInput,
                height: 'auto',
                marginTop: 20,
              }}>
              <Text_Icons
                left={8}
                width="100%"
                text={field?.label_name}
                Icon={() => <Images.Battary />}
              />
              <View
                style={{
                  ...styles.CheckBoxCantainer,
                  justifyContent:
                    field?.option?.length == 2 ? 'flex-start' : 'flex-start',
                }}>
                {field?.option?.map(item => {
                  return (
                    <CheckBox
                      checkedColor={lightTheme.themeColor}
                      title={item}
                      containerStyle={{
                        alignSelf: 'center',
                        marginTop: 30,
                      }}
                      checked={true}
                      onPress={() => {}}
                    />
                  );
                })}
              </View>
            </View>
          );
        } else if (field?.type == 'dropdown') {
          return (
            <View
              style={{
                ...styles.ContainerInput,
                height: 'auto',
                marginTop: 20,
              }}>
              <Text_Icons
                left={8}
                width="100%"
                text={field?.label_name}
                Icon={() => <Images.MyDetailsicon />}
              />
              <DropDown
                formStatus={true}
                place_holder={' '}
                Data={field?.data}
                onchange={value => {}}
              />
            </View>
          );
        } else if (field?.type == 'file') {
          return (
            <View
              style={{
                ...styles.ContainerInput,
                height: 'auto',
                marginTop: 20,
              }}>
              <Text_Icons
                left={8}
                width="100%"
                text={field?.label_name}
                Icon={() => <Images.Helpicon />}
              />
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.fileText}>Select from Your Device</Text>
              </TouchableOpacity>
            </View>
          );
        }
      })}
    </>
  );
};

export default FormsFields;

const styles = StyleSheet.create({
  T1: {
    color: lightTheme.black,
    textAlignVertical: 'bottom',
    fontSize: 16,
    bottom: 5,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ContainerInput: {
    width: '100%',
    height: 100,
    marginTop: 10,
  },
  fileView: {
    width: '100%',
    height: 80,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileText: {
    backgroundColor: lightTheme.themeColor,
    padding: 13,
    color: lightTheme.white,
    borderRadius: 5,
    fontSize: 12,
    marginTop: 10,
  },
  ValueFLLabel: {
    color: lightTheme.black,
    textAlignVertical: 'bottom',
    fontSize: 16,
    bottom: 5,
    fontWeight: 'bold',
    marginTop: 10,
    padding: 5,
  },
  CheckBoxCantainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
