import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { GRAY_LIGHT, YELLOW, GRAY, WHITE } from '../../constants/colors';
import AppText from '../apptext/AppText';

export interface DropdownData {
  label: string;
  value: string | number;
}

interface AppDropdownProps {
  data: DropdownData[];
  selectedValue: string | number;
  onValueChange: Function;
}

const AppDropdown: React.FC<AppDropdownProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onItemPress = (value: string | number) => {
    props.onValueChange(value);
    setModalVisible(false);
  }

  const renderItems = () => {
    return props.data.map((item, i) =>
      <TouchableNativeFeedback key={i} onPress={() => onItemPress(item.value)}>
        <View style={[styles.item, i !== props.data.length - 1 ? styles.borderBottom : {}]}>
          <AppText>{item.label}</AppText>
        </View>
      </TouchableNativeFeedback>
    )
  }

  return (
    <>
      <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.dropdownContainer}>
          <AppText>
            {props.data.find(item => item.value === props.selectedValue)?.label}
          </AppText>
          <Icon style={styles.icon} size={20} name={"caretdown"} />
        </View>
      </TouchableNativeFeedback>
      <Modal
        visible={modalVisible}
        transparent>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              {renderItems()}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  dropdownContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 7,
    borderWidth: 1,
    borderColor: YELLOW,
    borderRadius: 5,
  },
  icon: {
    color: YELLOW
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modal: {
    backgroundColor: GRAY_LIGHT,
    width: "85%",
    borderRadius: 5,
  },
  item: {
    width: "100%",
    paddingVertical: 12,
    paddingLeft: 25
  },
  borderBottom: {
    borderBottomColor: GRAY,
    borderBottomWidth: 1
  }
});

export default AppDropdown;

