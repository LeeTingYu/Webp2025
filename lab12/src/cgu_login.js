// src/cgu_login.js
import React from 'react';
import {
  Avatar, Button, TextField, FormControlLabel, Checkbox,
  Link, Grid, Box, Typography, Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function CGULogin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign in</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField required fullWidth label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField required fullWidth label="Password" type="password" name="password" autoComplete="current-password" />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
          <Grid container>
            <Grid item xs><Link href="#">Forgot password?</Link></Grid>
            <Grid item><Link href="#">{"Don't have an account? Sign Up"}</Link></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}