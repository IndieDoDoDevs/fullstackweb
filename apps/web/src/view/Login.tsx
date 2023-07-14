import React from "react";
import LoginForm from "../components/LoginForm";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default Login;
