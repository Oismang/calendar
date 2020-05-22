import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PushNotification from 'react-native-push-notification';

const ThreeDaysScreen = () => {
  const date = new Date();
  const dateRef = useRef(new Date()).current;

  let [count, setCount] = useState(0);

  const sendNotify = () => {
    PushNotification.localNotificationSchedule({
      title: "УВЕДОМЛЕНИЕ БЛЯТЬ",
      message: "АЛАЛАЛАЛААОАОАОАООАОАОААОАОАОАОАОААООААОАООА", // (required)
      date: new Date(2019, 10, 10), // in 60 secs
    });
  }

	return (
		<View>
			<Text>date: {date.toString()}</Text>
			<Text>dateRef: {dateRef.toString()}</Text>
      <Button title={"click"} onPress={() => sendNotify()}/>
		</View>
	)
}

const styles = StyleSheet.create({});

export default ThreeDaysScreen;

