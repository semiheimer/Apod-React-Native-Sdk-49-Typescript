import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

type Props = {};

const Loading = (props: Props) => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator size={94} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
