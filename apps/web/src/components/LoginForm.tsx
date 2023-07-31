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
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-indigo-400 via-purple-500">
      <div className="flex w-fit h-4/6  bg-white rounded-md ">
        <div /*className="w-96 py-5 mx-6 border-x-black"*/
        /*className=" w-96   bg-cover"*/
        className=" top-0 left-0 w-96  bg-cover"
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-vector/night-scene-forest_1308-22882.jpg?w=360&t=st=1689677759~exp=1689678359~hmac=246bac23be1efb228c5abe742f445c4646d2db871cf6bef1343ac5219a7f3f06")',
        }}>
      
          <h1>Welcome</h1>
          <div>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum totam ipsum, unde iste voluptates qui dolores soluta tenetur deleniti doloremque minus vero! Laudantium laborum, illo cumque cum harum fugit.</p>
          </div>
          
        </div>
        <div>
        <h1 className="text-6xl w-full font-bold ml-6 mb-5 py-5 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          ESP
        </h1>
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={login.username}
            onChange={(e) => inputHandler(e.currentTarget.value, "username")}
            className="input input-bordered w-4/5 mx-6"
          />
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={(e) => inputHandler(e.currentTarget.value, "password")}
            className="input input-bordered w-4/5 mx-6"
          />
          <div>
            <button
              type="submit"
             // className="py-1 px-3 w-52 mx-20 my-8 bg-transparent outline outline-1 rounded-sm text-xl font-semibold hover:bg-slate-300 duration-300 hover:-translate-y-5 transition-all"
                className="bg-blue-500 w-52 text-white font-bold py-1  px-3 mx-20 my-8 border-b-4 border-blue-700 text-xl hover:bg-aqua duration-300 hover:-translate-y-5 transition-all rounded"
            >
              Login
            </button>

            
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default LoginForm;
