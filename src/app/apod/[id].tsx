import React, {  useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Link } from "expo-router";

const SpecialDate = () => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date(Date.now()));
  const [selectedButton, setSelectedButton] = useState("start");

  const showPicker = (type: string) => {
    setSelectedButton(type);
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    if (selectedButton === "start") {
      if (value <= endDate) {
        setStartDate(value);
      } else {
        Alert.alert("Warning", "Start date cannot be after the end date.", [
          { text: "OK" },
        ]);
      }
    }
    if (selectedButton === "end") {
      if (value <= new Date() && value >= startDate) {
        setEndDate(value);
      } else {
        Alert.alert("Warning", "End date cannot be before the start date.", [
          { text: "OK" },
        ]);
      }
    }
    setIsPickerShow(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Link href="/">
          <Icon name="arrow-back" size={30} color="black" />
        </Link>
      </View>
      <View style={styles.pickedDateContainer}>
        <TouchableOpacity onPress={() => showPicker("start")}>
          <Text style={styles.startPickedDate}>
            Selected Start Date: {startDate.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 10 }}></View>
      <View style={styles.pickedDateContainer}>
        <TouchableOpacity onPress={() => showPicker("end")}>
          <Text style={styles.endPickedDate}>
            Selected End Date: {endDate.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      </View>
      {isPickerShow && (
        <DateTimePicker
          value={startDate}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  pickedDateContainer: {
    padding: 4,
    borderRadius: 30,
    backgroundColor: "#e5e5e5",
    width: 280,
    borderWidth: 2,
    borderColor: "#cccccc",
  },
  startPickedDate: {
    fontSize: 18,
    textAlign: "center",
  },
  endPickedDate: {
    fontSize: 18,
    textAlign: "center",
  },
  btnContainer: {
    padding: 10,
    alignSelf: "flex-end",
    marginRight: 4,
  },

  datePicker: {
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default SpecialDate;
