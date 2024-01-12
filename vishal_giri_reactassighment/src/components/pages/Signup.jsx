import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography } from '@material-ui/core';
import useForm from '../hooks/useForm';

const Signup = () => {
   const { values, errors, handleChange, handleSubmit } = useForm(
      { username: '', email: '', password: '' },
      validate
    );
  
    function validate(values) {
      let errors = {};
  
      // Add your validation logic here
  
      return errors;
    }
  
    function signupUser() {
      // Implement your signup logic here
      console.log('Signup form submitted:', values);
      // You can make API calls or any other signup related actions
    }
  
  return (
    <div className="container mx-auto mt-10">
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={signupUser} className="max-w-md mx-auto">
        <TextField
          label="Username"
          name="username"
          type="text"
          value={values.username || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          error={Boolean(errors.username)}
          helperText={errors.username}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={values.password || ''}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <div className="mt-3 text-center">
        <Typography>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Signup;
