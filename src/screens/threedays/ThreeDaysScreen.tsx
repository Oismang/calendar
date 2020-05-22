import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';

const ThreeDaysScreen = () => {
  const date = new Date();
  const dateRef = useRef(new Date()).current;

  let [count, setCount] = useState(0);

	return (
		<View>
			<Text>date: {date.toString()}</Text>
			<Text>dateRef: {dateRef.toString()}</Text>
      <Button title={"click"} onPress={() => setCount(count++)}/>
		</View>
	)
}

const styles = StyleSheet.create({});

export default ThreeDaysScreen;

