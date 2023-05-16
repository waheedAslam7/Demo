import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import lightTheme from '~/utils/Theme';
import moment from 'moment/moment';
const Date_Calender = ({markedDates, onChange}) => {
  const [markedDate, setMarkedDate] = useState({
    [moment().format('YYYY-MM-DD')]: {
      customStyles: {
        container: {
          backgroundColor: 'white',
          elevation: 2,
        },
        text: {
          color: lightTheme.DarkGreen,
          fontWeight: 'bold',
        },
      },
      marked: true,
      dotColor: lightTheme.red,
    },
  });

  return (
    <View style={{height: '100%', width: '100%', alignSelf: 'center'}}>
      <Calendar
        selected={new Date()}
        horizontal={true}
        pagingEnabled={true}
        minDate={moment().format('YYYY-MM-DD')}
        maxDate={'2050-01-23'}
        onDayPress={days => {
          onChange(days);
          setMarkedDate({
            [days.dateString]: {
              customStyles: {
                container: {
                  backgroundColor: 'white',
                  elevation: 2,
                },
                text: {
                  color: lightTheme.DarkGreen,
                  fontWeight: 'bold',
                },
              },
              marked: true,
              dotColor: lightTheme.red,
            },
          });
        }}
        onVisibleMonthsChange={months => {
          console.log('now these months are visible', months);
        }}
        pastScrollRange={0}
        showScrollIndicator={true}
        enableSwipeMonths={true}
        hideExtraDays={true}
        style={{
          width: '100%',
          height: 360,
          alignSelf: 'center',
          backgroundColor: lightTheme.themeColor,
          
        }}
        markingType={'custom'}
        markedDates={markedDate}
        theme={{
          calendarBackground: lightTheme.themeColor,
          textSectionTitleColor: lightTheme.white,
          textSectionTitleDisabledColor: lightTheme.lightGrey,
          selectedDayBackgroundColor: lightTheme.white,
          todayTextColor: lightTheme.DarkGreen,
          dayTextColor: lightTheme.white,
          textDisabledColor: lightTheme.black,
          dotColor: lightTheme.Accept,
          selectedDotColor: lightTheme.themeColor,
          arrowColor: lightTheme.white,
          disabledArrowColor: lightTheme.lightGrey,
          selectedDayTextColor: lightTheme.white,
          monthTextColor: lightTheme.white,
          // "stylesheet.day.single"
        }}
      />
    </View>
  );
};

export default Date_Calender;

const styles = StyleSheet.create({});
