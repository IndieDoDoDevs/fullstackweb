import axios from "axios";
import React, { FormEvent, useState } from "react";
import { TextField, Button, Badge, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";


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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    if (data && data?.id &&message) {
      alert(message)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      sessionStorage.setItem("userid", data.id);
      clearForm();
      navigate("/dashboard");
    } else {
      alert("User not found");
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
      minHeight: "80vh",
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
        Log In
      </Typography>
    </div>
    <form onSubmit={onSubmit} style={{ width: "75%" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      <TextField
        type="text"
        label="Username"
        value={login.username}
        onChange={(e) => inputHandler(e.currentTarget.value, "username")}
        variant="outlined"
        style={{ width: '80%' }}
        margin="normal"
        size ='small'
       
      />

<div style={{ position: "relative", width: "80%" }}>
            <TextField
              type="password"
              label="Password"
              value={login.password}
              onChange={(e) => inputHandler(e.currentTarget.value, "password")}
              variant="outlined"
              size="small"
              helperText = {!login.password ?'Required Password':" Do not share your password with anyone"}
              style={{
                width: "100%",
              }}
              margin="normal"
            />
            <Badge
              badgeContent={login.password.length}
              color="primary"
              style={{ position: "absolute", top: 14, right: 4 }}
            />
          </div>
      </div>  
      

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          size = "small"
          style={{
            width: "40%", // Adjusted button width to 90%
            transition: "background-color 0.3s, transform 0.3s",
          }}
          sx={{
            "&:hover": {
              backgroundColor: "#4caf50", // Success (green) color on hover
              transform: "scale(1.05)",
            },
          }}
          type="submit"
          endIcon={<KeyboardArrowRight/>}
        >
           &nbsp;Sign in
        </Button>
      </div>
    </form>
    </Container>
    
  );
}

export default LoginForm;
