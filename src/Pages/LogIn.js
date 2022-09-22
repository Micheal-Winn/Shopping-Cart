import React,{useState} from 'react';
import {  Box, Button,  TextField, Typography } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { useNavigate } from 'react-router-dom';


 const LogIn = () => {
    const direct = useNavigate();
    const [isSignup, setisSignup] = useState(false);
    console.log(isSignup)

    const [input, setinput] = useState({
        name: '', email: '', password:''
    })

    const handleChange = (e)=>{
        setinput(prevState=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(input)
        fetch("http://localhost:3000/auth/regime",{
            method: "POST",
            crossDomain:true,
            headers:{
                "Content-Type" : "application/json",
                Accept :"application/json",
                "Access-Control-Allow-Origin" : "*",
            },
            body:JSON.stringify({
                name : input.name,
                email : input.email,
                password : input.password
            })
        }).then((res)=>res.json())
            .then((data)=>{
                console.log(data,"userRegister")
            })
    }

    const resetState = ()=>{
        setisSignup(!isSignup);
        setinput({name: '', email:'',password:''})


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box
            display={"flex"}
             flexDirection={"column"}
             maxWidth={400}
             alignItems="center" 
            justifyContent={"center"}
            margin="auto" marginTop={7} padding={3} borderRadius={5} boxShadow={"5px 5px 10px #ccc"}
            sx={{
                ":hover": {
                    boxShadow:"10px 10px 20px #ccc"
                }
            }}>
                <Typography variant='h2' padding={3} textAlign="center">
                    {isSignup ? "signup" : "login"}
                </Typography>
               {isSignup && <TextField name='name'
               onChange={handleChange}
                value={input.name}
                margin='normal'
                type={'text'}
                variant='outlined'
                placeholder='Name'/>}
                <TextField name='email' value={input.email}
                onChange={handleChange}
                 margin='normal'
                 type={'email'}
                 variant='outlined'
                 placeholder='Email'/>
                <TextField name='password'
                 value={input.password}
                 onChange={handleChange}
                 margin='normal'
                 type={'password'}
                 variant='outlined'
                 placeholder='Password'/>
                <Button endIcon={isSignup ? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon/>} type='submit' variant='contained' color='warning' sx={{marginTop: 3,borderRadius:3}}>
                {isSignup ? "signup" : "login"}
                </Button>
                <Button  sx={{marginTop: 3,borderRadius:3}} onClick={resetState}>
                    Change to {isSignup ? "login" : "signup"}
                </Button>
            </Box>
        </form>
    </div>
  )
}


export default LogIn;
