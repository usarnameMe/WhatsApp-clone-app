import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { Feather, FontAwesome } from "@expo/vector-icons";
import validate from "validate.js";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { signUp } from "../utils/actions/authActions";
import { getFirebaseApp } from "../utils/firebaseHelper";

console.log(getFirebaseApp());

const initialState = {
  inputValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },

  formIsValid: false,
};

const SignUpForm = (props) => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = () => {
    signUp(
      formState.inputValues.firstName,
      formState.inputValues.lastName,
      formState.inputValues.email,
      formState.inputValues.password
    );
  };

  return (
    <>
      <Input
        id="firstName"
        label="First name"
        icon="user-o"
        iconPack={FontAwesome}
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["firstName"]}
      />

      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        autoCapitalize="none"
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["lastName"]}
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
      />

      <Input
        id="password"
        label="Password"
        icon="lock"
        autoCapitalize="none"
        secureTextEntry
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["password"]}
      />

      <SubmitButton
        title="Sign up"
        onPress={authHandler}
        style={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
