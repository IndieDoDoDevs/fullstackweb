import React from "react";
import LoginForm from "../components/LoginForm";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="mx-auto h-screen w-full flex items-center justify-center border border-red-600">
      <LoginForm />
    </div>
  );
};

export default Login;
