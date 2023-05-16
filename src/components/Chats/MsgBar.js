import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import lightTheme from '~/utils/Theme';
import ReactNativeBlobUtil from 'react-native-blob-util';
import DocumentPicker from 'react-native-document-picker';
const MsgBar = ({onFocus, triggerMessage, submitted_Form_Id}) => {
  const [msg, setText] = useState('');
  const [loading, setloading] = useState(false);
  const [isError, setisError] = useState(false);
  const [modelTittle, setmodelTittle] = useState('');
  const [modeldesc, setmodeldesc] = useState('');
  const [attachment, setattachment] = useState('');
  const textinputRef = useRef();
  const user = useSelector(state => state?.user?.data);

  const onSend = () => {
    if (msg == '') {
      setloading(false);
      setmodelTittle('Alert !');
      setmodeldesc('Please type your comment first to send about your form');
      setisError(true);
    } else if (attachment != '' && msg == '') {
      setloading(false);
      setmodelTittle('Alert !');
      setmodeldesc('Please type your comment also to send attachment');
      setisError(true);
    } else if (user?.data?.type == null || user?.data?.type == undefined) {
    } else {
      setloading(true);
      const messagetoSend = [];
      messagetoSend.push({
        name: 'user_type',
        data: user?.data?.type,
      });
      messagetoSend.push({
        name: 'submitted_form_id',
        data: JSON.stringify(submitted_Form_Id),
      });
      messagetoSend.push({name: 'comments', data: msg});
      if (attachment != '') {
        messagetoSend.push({
          name: 'fileToUpload',
          filename: attachment.name,
          type: attachment.type,
          data: ReactNativeBlobUtil.wrap(attachment.fileCopyUri),
        });
      }
      ReactNativeBlobUtil.fetch(
        'POST',
        `${API_BASE_URL}${API_VERSION}user_form_comments`,
        {
          Authorization: `Bearer ${user?.token}`,
          'Content-Type': 'multipart/form-data',
        },
        messagetoSend,
      )
        .then(res => {
          if (res.respInfo.status == 200) {
            setText('');
            triggerMessage();
            setattachment('');
            setloading(false);
          }
        })
        .catch(eror => {
          setloading(false);
          setmodelTittle('Alert !');
          setmodeldesc('Something Gone Wrong Please Try Again');
          setisError(true);
        });
    }
  };

  const onSelect = async () => {
    DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      copyTo: 'cachesDirectory',
    }).then(res => {
      setattachment(res);
    });
  };

  return (
    <View style={style.line}>
      <View style={style.line1} />
      <TextInput
        onFocus={() => onFocus()}
        ref={textinputRef}
        multiline={true}
        style={style.textInput}
        underlineColorAndroid={'transparent'}
        onChangeText={text => setText(text)}
        value={msg}
        placeholder={'Type Comments . . .'}
      />
      <View
        style={{
          width: '100%',
          height: 20,
          backgroundColor: lightTheme.lightGrey,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={() => {}} style={style.attach}>
          <Text style={{color: lightTheme.white}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MsgBar;
const style = StyleSheet.create({
  container: {
    borderColor: lightTheme.themeColor,

    backgroundColor: lightTheme.white,
    margin: 8,
    borderWidth: 1,
    width: '100%',
  },
  textInput: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 10,
    backgroundColor: lightTheme.lightGrey,
    marginTop: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  sendIcon: {
    margin: 4,
    borderRadius: 100,
    backgroundColor: lightTheme.themeColor,
    padding: 8,
  },
  rendersendImg: {
    resizeMode: 'center',
    tintColor: lightTheme.themeColor,
    padding: 13,
    alignSelf: 'center',
  },
  camerTouch: {
    width: '10%',
    margin: 8,
    borderRadius: 5,
    justifyContent: 'center',
  },
  line: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    padding: 5,
  },
  line1: {
    height: 1,
    width: '100%',
    borderWidth: 2,
    alignSelf: 'center',
    borderColor: lightTheme.lightBlue,
    borderRadius: 5,
  },
  attach: {
    width: 60,
    height: 30,
    backgroundColor: lightTheme.themeColor,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  sent: {
    width: '30%',
    height: '25%',
    backgroundColor: lightTheme.DarkGreen,
    alignItems: 'center',
    borderRadius: 10,
    top: 5,
  },
  sendText: {
    color: lightTheme.white,
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
  },
});
