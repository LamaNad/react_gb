import { Box, Button, FormHelperText, Grid, TextField } from "@mui/material";
import { useState } from "react";

export const LoginForm = ({ isSignUp, onSubmit, error }) => {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    };
    const handleChangePass = (e) => {
        setPass(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ login, pass });

        setLogin("");
        setPass("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{ isSignUp ? 'Sign Up' : 'Please sign in' }</h2>
            {error && <FormHelperText error sx={{ mb: 2 }}>{error}</FormHelperText>}
            <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    { error 
                        ? <TextField type="email" error value={login} onChange={handleChangeLogin} label="Email" variant="outlined"  sx={{ width: '100%' }}/>
                        : <TextField type="email" value={login} onChange={handleChangeLogin} label="Email" variant="outlined"  sx={{ width: '100%' }}/>
                    }
                </Grid>
                <Grid item xs={6}>
                    { error 
                        ? <TextField type="password" error value={pass} onChange={handleChangePass} label="Password" variant="outlined"  sx={{ width: '100%' }}/>
                        : <TextField type="password" value={pass} onChange={handleChangePass} label="Password" variant="outlined"  sx={{ width: '100%' }}/>
                    }
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" sx={{ width: '100%', }}> { isSignUp ? 'Sign Up' : 'Login' } </Button>
                </Grid>
            </Grid>
            </Box>
        </form>
    );
};