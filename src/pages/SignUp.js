import {React, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {SignUpApi} from "../redux/actions/Auth"
const theme = createTheme();
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const state = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const signUpFonk = async (body) =>{
    try {
    
        dispatch(SignUpApi(body));
        toast.success("Kayıt Başarılı Lütfen Giriş Yapınız ", {
            position: toast.POSITION.TOP_RIGHT,
          });
        console.log(state.user);
          navigate("/");
    } catch (error) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        
    }
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(password === confirmPassword){
      await signUpFonk({
       
        userName:userName,
        password:password,
        email:email,
      
      
      });
    }
    else{
        toast.error("Şifre kontrolü sağlanamadı", {
            position: toast.POSITION.TOP_RIGHT,
          });
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box  noValidate sx={{ mt: 1 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={userName}
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="User name"
                  name="text"
                  autoComplete="text"
                  autoFocus
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  value={email}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  value={password}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  value={confirmPassword}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password Tekrar"
                  type="password"
                  id="ConfirmPassword"
                  autoComplete="current-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

              
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign up
                  </Button>
             
              </form>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SignUp;
