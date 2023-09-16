import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../constants/colors";
import { useState } from "react";

const Input = (props) => {
  const onChangeText = (text) => {
    setValue(text);
    props.onInputChanged(props.id, text);
  };
  const [value, setValue] = useState(props.initialValue);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        {props.icon && props.iconPack && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 20}
            style={styles.icon}
          />
        )}
        <TextInput
          {...props}
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {props.errorText && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText[0]}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginVertical: 10,
    fontFamily: "Bold",
    letterSpacing: 0.3,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "red",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: colors.nearlyWhite,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: colors.grey,
  },
  input: {
    fontFamily: "Regular",
    flex: 1,
    paddingTop: 0,
    letterSpacing: 0.3,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontFamily: "Regular",
  },
});

export default Input;
