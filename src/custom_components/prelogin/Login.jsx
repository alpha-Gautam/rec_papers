import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import "./Login.css";


const Login = ({ open, onClose }) => {
  const [role, setRole] = useState("student"); // Default role is Student
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleLogin = () => {
    // Add your login logic here
    console.log(`Logging in as: ${role}`);
    onClose(); // Close the dialog after login
  };
  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
    // Add your Google login logic here
  };
  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
    // Redirect or implement forgot password logic
  };

  return (
    <div>

    <Dialog open={open} onClose={onClose} className="login-dialog">
      <DialogTitle className="login-title">Login</DialogTitle>
      <DialogContent className="login-content">
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="dense"
          type="email"
          className="login-input"
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="dense"
          type="password"
          className="login-input"
        />
        <Typography variant="body1" align="center" className="role-label">
          Select your role:
        </Typography>
        <RadioGroup value={role} onChange={handleRoleChange} row>
          <FormControlLabel
            value="student"
            control={<Radio />}
            label="Student"
          />
          <FormControlLabel value="mentor" control={<Radio />} label="Mentor" />
        </RadioGroup>
        <div className="login-actions">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={handleGoogleLogin}
            className="google-login"
          >
            Login with Google
          </Button>
          <Typography
            variant="body2"
            align="center"
            onClick={handleForgotPassword}
            className="forgot-password"
          >
            Forgot Password?
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
    </div>

  );
};

export default Login;