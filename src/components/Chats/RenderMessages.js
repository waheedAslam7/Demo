import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Messages from './Messages';
import MsgBar from './MsgBar';
import {useSelector} from 'react-redux';


const RenderChat = ({route, navigation,submitted_Form_Id}) => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      userId: 1,
    },
    {
      _id: 2,
      text: 'Hello developer',
      createdAt: new Date(),
      userId: 2,
    },
  ]);
  const [sentMessage, setsentMessage] = useState({
    _id: 1,
    text: 'Hello developer',
    createdAt: new Date(),
    userId: 1,
  });
  const user = useSelector(state => state?.user?.data);
  const flatListRef = useRef();
 
const get_Massages=async()=>{
  const params={
    user_type:user.data.type,
    submitted_form_id:submitted_Form_Id
  }
 await get_user_form_Comments(user?.token,params).then((response)=>{
  if(response.status==200){
    setMessages(response?.data?.comments)
  }
 })
}



  useEffect(() => {
  get_Massages()
  },[]);


  return (
    <View style={{flex: 1}}>
        
      <FlatList
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        ref={flatListRef}
        data={messages}
        renderItem={({item}) => <Messages Item={item} />}
        keyExtractor={(item, index) => item.key}
        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({animated: true})
        }
      />
      <MsgBar
        submitted_Form_Id={submitted_Form_Id}
        triggerMessage={e =>get_Massages()}
        onFocus={() => flatListRef.current.scrollToEnd()}
      />
    </View>
  );
};

export default RenderChat;

const styles = StyleSheet.create({});
