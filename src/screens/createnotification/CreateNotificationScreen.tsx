import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import AppHeaderText from '../../components/appheadertext/AppHeaderText';
import { GRAY } from '../../constants/colors';
import { MonthDate } from '../../utils/types';
import AppTextInput from '../../components/apptextinput/AppTextInput';
import AppText from '../../components/apptext/AppText';

interface CreateNotificationScreenProps {
  date: MonthDate;
}

const CreateNotificationScreen: React.FC<CreateNotificationScreenProps> = (props) => {

  return (
    <View style={styles.container}>
      <AppHeaderText style={styles.header}>Дата: {props.date.day}/{props.date.month}/{props.date.year}г.</AppHeaderText>
      <View style={styles.form}>
        <AppText>Текст напоминания:</AppText>
        <AppTextInput placeholder={"Текст напоминания"} multiline />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: GRAY,
    paddingTop: 70
  },
  header: {
    textAlign: "center"
  },
  form: {
    width: "85%"
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
