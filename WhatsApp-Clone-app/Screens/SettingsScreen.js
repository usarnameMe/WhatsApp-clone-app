import React, { useCallback, useReducer, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import Input from "../components/Input";
import { useSelector } from "react-redux";
import { isLoading } from "expo-font";
import colors from "../constants/colors";
import SubmitButton from "../components/SubmitButton";
import { updateSignedInUser } from "../utils/actions/authActions";
import { update } from "firebase/database";

const SettingsScreen = (props) => {
  const userData = useSelector((state) => state.auth.userData);

  const initialState = {
    inputValues: {
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      email: userData.email || "",
      about: userData.about || "",
    },
    inputValidities: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      about: undefined,
    },
    formIsValid: false,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const saveHandler = async () => {
    const updatedValues = formState.inputValues;
    try {
      setIsLoading(true);
      await updateSignedInUser(userData.userId, updatedValues);
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer styles={styles.container}>
      <PageTitle text="Settings" />
      <Input
        id="firstName"
        label="First name"
        icon="user-o"
        iconPack={FontAwesome}
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["firstName"]}
        initialValue={userData.firstName}
      />
      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["lastName"]}
        initialValue={userData.lastName}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
        keyboardType="email-address"
        errorText={formState.inputValidities["email"]}
        initialValue={userData.email}
      />
      <Input
        id="about"
        label="About"
        icon="user-o"
        iconPack={FontAwesome}
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["about"]}
        initialValue={userData.about}
      />
      {isLoading ? (
        <ActivityIndicator
          size={"small"}
          color={colors.primary}
          style={{ marginTop: 20 }}
        />
      ) : (
        <SubmitButton
          title="Save"
          onPress={saveHandler}
          style={{ marginTop: 30 }}
          disabled={!formState.formIsValid}
        />
      )}
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
