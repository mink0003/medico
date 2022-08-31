import React, {useState} from "react";
import { TextField, Typography} from "@mui/material";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Sheet from '@mui/joy/Sheet';

export default function Login(){

	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const navigate = useNavigate();

   const signIn = (email,password) => {
        setTimeout(() => {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              console.log("Logged In Successfully");
              const user = userCredential.user;
			  navigate("/DoctorChat"); 
            })
            .catch((error) => {
              console.log("Wrong Email/Password.");
            });
        }, 2000); 
    };

    return (
    <Sheet
    sx={{
        maxWidth: 400,
        mx: 'auto', // margin left & right
        my: 4, // margin top & botom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}
    >
        <div>
          <Typography level="h4" component="h1">
            <b>Login Here</b>
          </Typography>
          <Typography level="body2">Sign in to continue</Typography>
        </div>
        <TextField
            // html input attribute
            type="email"
            placeholder="medico@email.com"
            // pass down to FormLabel as children
            label="Email"
            onChange={(event) => {setEmail(event.target.value)}}
        />
        <TextField
            type="password"
            placeholder="password"
            label="Password"
            onChange={(event) => {setPassword(event.target.value)}}
         />
        <button
            sx={{
            mt: 10, // margin top
            }}
            onClick={() => signIn(email,password)}
        >
        Log In
        </button>
     </Sheet>
    );
}