import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const DataItem = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.subTitle}>Subtitle</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  textContainer: {},
  title: {},
  subTitle: {},
});

export default DataItem;
