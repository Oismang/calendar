import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import PushNotification from 'react-native-push-notification';
import AppDropdown from '../../components/appdropdown/AppDropdown';
import AppHeaderText from '../../components/appheadertext/AppHeaderText';
import AppText from '../../components/apptext/AppText';
import AppTextInput from '../../components/apptextinput/AppTextInput';
import AppTimeInput, { Time } from '../../components/apptimeinput/AppTimeInput';
import { GRAY } from '../../constants/colors';
import { REPEAT_DATA, Repeat } from '../../constants/common';
import { MonthDate } from '../../utils/types';

interface CreateNotificationScreenProps {
  date: MonthDate;
}

const CreateNotificationScreen: React.FC<CreateNotificationScreenProps> = (props) => {
  const date = new Date();

  const [text, setText] = useState("");
  const [time, setTime] = React.useState<Time>({
    hours: `${date.getHours()}`,
    minutes: `${date.getMinutes()}`
  });
  const [repeat, setRepeat] = useState(Repeat.NOT);

  const onButtonPress = () => {
    PushNotification.localNotificationSchedule({
      title: "УВЕДОМЛЕНИЕ БЛЯТЬ",
      message: text, // (required)
      date: new Date(2019, 10, 10), // in 60 secs
    });
  }

  return (
    <ScrollView style={styles.container}>
      <AppHeaderText style={styles.header}>
        Дата: {props.date.day}.{props.date.month}.{props.date.year}г.
      </AppHeaderText>
      <View style={styles.form}>
        <View style={styles.inputWrap}>
          <AppText style={styles.inputLabel}>Текст уведомления:</AppText>
          <AppTextInput
            value={text}
            placeholder={"Напомнить о..."}
            multiline
            numberOfLines={4}
            onChangeText={text => setText(text)} />
        </View>
        <View style={styles.inputWrap}>
          <AppText style={styles.inputLabel}>Время:</AppText>
          <AppTimeInput
            onHoursChange={(value: string) => setTime({ ...time, hours: value})}
            onMinutesChange={(value: string) => setTime({ ...time, minutes: value})}
            value={time} />
        </View>
        <View style={styles.inputWrap}>
          <AppText style={styles.inputLabel}>Повтор: </AppText>
          <AppDropdown
            selectedValue={repeat}
            onValueChange={(value: Repeat) => setRepeat(value)}
            data={REPEAT_DATA} />
        </View>
        <Button title={"Создать уведомление"} onPress={onButtonPress}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GRAY,
    paddingTop: 70
  },
  header: {
    textAlign: "center",
    marginBottom: 10
  },
  form: {
    marginLeft: "10%",
    marginRight: "10%"
  },
  inputWrap: {
    marginBottom: 10
  },
  inputLabel: {
    marginBottom: 5
  }
});

CreateNotificationScreen.options = {
  topBar: {
    visible: true,
    title: {
      text: "Создание уведомления"
    }
  },
  bottomTabs: {
    visible: false
  }
}

export default CreateNotificationScreen;
