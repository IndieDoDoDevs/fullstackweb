import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";



function RegisterForm() {
  const [register, setRegister] = useState({
    email:"",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (value: string, name: string) => {
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setRegister({
      password: "",
      username: "",
      email: ""
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const RegUser: {
      data: Record<string, any>;
      message: string;
    } = (
      await axios.post("http://localhost:3000/v1/register", {
        ...register,
      })
    ).data;

    console.log({ RegUser });

    const { data, message } = RegUser;

    console.log({ RegUser })

    if (data && data?.id && message) {
 // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      alert(message);
      clearForm();
      navigate("/login");
    } else {
      alert("Creation Unscuccessful");
    }
  };

  return (
    <Container
    maxWidth="sm"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}
  >
    <div
      style={{
        background: "#f1f1f1",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "5px",
      }}
    >
      <Typography variant="h4" align="center" color="primary" style={{ background: "#f1f1f1" }}>
        Sign In
      </Typography>
    </div>

    <form onSubmit={onSubmit} style={{ width: "75%" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TextField
        type="email"
        label="Email"
        value={register.email}
        onChange={(e) => inputHandler(e.currentTarget.value, "email")}
        variant="outlined"
        margin="normal"
        size ='small'
        style={{ width: '80%' }}
      />

      <TextField
        type="text"
        label="Username"
        value={register.username}
        onChange={(e) => inputHandler(e.currentTarget.value, "username")}
        variant="outlined"
        style={{ width: '80%' }}
        margin="normal"
        size ='small'
       
      />
      

      <TextField
        type="password"
        label="Password"
        
        value={register.password}
        onChange={(e) => inputHandler(e.currentTarget.value, "password")}
        variant="outlined"
        size ='small'
        style={{
           width: '80%',
              
      }}
        margin="normal"
      />
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          size = "small"
          style={{
            width: "50%", // Adjusted button width to 90%
            transition: "background-color 0.3s, transform 0.3s",
          }}
          sx={{
            "&:hover": {
              backgroundColor: "#4caf50", // Success (green) color on hover
              transform: "scale(1.05)",
            },
          }}
          fullWidth
          type="submit"
        >
          Sign In
        </Button>
      </div>
    </form>
  </Container>

);
}
export default RegisterForm;
