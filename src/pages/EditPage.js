import React from 'react'
import {useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const EditPage = () => {
    const [price, setprice] = useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
    // const handleFormSubmit = () => {
    //   // Formun başarılı bir şekilde gönderildiğini varsayalım
    //   toast.success('Form başarıyla gönderildi!', {
    //     position: 'top-right',
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined
    //   });
    };
  return (
    <>
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5">
            Teklif ver
          </Typography>
          <Box  noValidate sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit}>
            <TextField
            value={price}
              margin="normal"
              fullWidth
              name="price"
              label="Fiyat"
           
              onChange={(e)=>setprice(e.target.value)}

            />
             <Link to={`/homepage`} variant="body2">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Teklif ver
            </Button>
            </Link>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </>
  );
};

export default EditPage;