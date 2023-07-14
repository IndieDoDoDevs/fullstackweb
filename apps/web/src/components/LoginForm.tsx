import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (value: string, name: string) => {
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setLogin({
      password: "",
      username: "",
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const authUser: {
      data: Record<string, any>;
      message: string;
    } = (
      await axios.post("http://localhost:3000/auth/login", {
        ...login,
      })
    ).data;

    console.log({ authUser });

    const { data, message } = authUser;

    if (data && data?.id) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      sessionStorage.setItem("userid", data.id);
      clearForm();
      navigate("/dashboard");
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-6xl w-full font-bold mb-5 py-5 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          Login
        </h1>
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={login.username}
            onChange={(e) => inputHandler(e.currentTarget.value, "username")}
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={(e) => inputHandler(e.currentTarget.value, "password")}
            className="input input-bordered w-full"
          />
          <div>
            <button
              type="submit"
              className="py-1 px-3 w-52 bg-transparent outline outline-1 rounded-sm text-xl font-semibold hover:bg-slate-300 duration-300 hover:-translate-y-5 transition-all"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
