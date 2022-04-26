import { Box, Button, FormHelperText, Grid, TextField } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { set } from "firebase/database";
import { useState } from "react";
import { getUserRefById } from "../../services/firebase";

export const LoginForm = ({ isSignUp, onSubmit, error }) => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const auth = getAuth();

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    };
    const handleChangePass = (e) => {
        setPass(e.target.value);
    };
    const handleChangePass2 = (e) => {
        setPass2(e.target.value);
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(login);
        setName(name);
        setPhoneNumber(phoneNumber);

        onSubmit({ login, pass });

        //Create new User
        if (isSignUp) {
          onAuthStateChanged(auth, (user) => {
            if(user){
              console.log('LoginForm');
              const newUser = {
                email: login,
                name: name,
                phone: phoneNumber,
                showEditProfile: false
              }; 
              set(getUserRefById(user.uid), newUser);
            }
          });
        }

        setLogin("");
        setName("");
        setPhoneNumber("");
        setPass("");
        setPass2("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isSignUp ? 'Sign Up' : 'Please sign in'}</h2>
            {error && !isSignUp && <FormHelperText error sx={{ mb: 2 }}>{error}</FormHelperText>}
            <Box sx={{ flexGrow: 1 }} >
                {!isSignUp
                    ? <Grid container spacing={2}>
                        <Grid item xs={6}>
                            {error
                                ? <TextField type="email" error value={login} onChange={handleChangeLogin} label="Email" variant="outlined" sx={{ width: '100%' }} />
                                : <TextField type="email" value={login} onChange={handleChangeLogin} label="Email" variant="outlined" sx={{ width: '100%' }} />
                            }
                        </Grid>
                        <Grid item xs={6}>
                            {error
                                ? <TextField type="password" error value={pass} onChange={handleChangePass} label="Password" variant="outlined" sx={{ width: '100%' }} />
                                : <TextField type="password" value={pass} onChange={handleChangePass} label="Password" variant="outlined" sx={{ width: '100%' }} />
                            }
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" sx={{ width: '100%', }}> {isSignUp ? 'Sign Up' : 'Login'} </Button>
                        </Grid>
                    </Grid>
                    : <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField type="email" value={login} onChange={handleChangeLogin} label="Email" variant="outlined" sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="text" value={name} onChange={handleChangeName} label="Name" variant="outlined" sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="text" value={phoneNumber} onChange={handleChangePhoneNumber} label="phone number" variant="outlined" sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="password" value={pass} onChange={handleChangePass} label="Password" variant="outlined" sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="password" value={pass2} onChange={handleChangePass2} label="Confirm password" variant="outlined" sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" sx={{ width: '100%', }}> {isSignUp ? 'Sign Up' : 'Login'} </Button>
                        </Grid>
                    </Grid>
                }
            </Box>
        </form>
    );
};