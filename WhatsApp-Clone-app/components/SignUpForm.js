import React from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { Feather, FontAwesome } from "@expo/vector-icons";

const SignUpForm = (props) => {
  return (
    <>
      <Input label="First name" icon="user-o" iconPack={FontAwesome} />

      <Input label="Last name" icon="user-o" iconPack={FontAwesome} />

      <Input label="Email" icon="mail" iconPack={Feather} />

      <Input label="Password" icon="lock" iconPack={Feather} />
      <Input label="Submit Password" icon="lock" iconPack={Feather} />

      <SubmitButton
        title="Sign up"
        onPress={() => console.log("Button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
