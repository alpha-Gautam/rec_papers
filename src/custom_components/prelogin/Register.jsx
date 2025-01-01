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
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./Register.css";



const Register = ({ open, onClose }) => {
  const [role, setRole] = useState("student"); // Default role is Student
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleRegister = () => {
    console.log("Registering...");
    // Add your registration logic here
    onClose(); // Close the dialog after registration
  };
  return (
    <Dialog open={open} onClose={onClose} className="register-dialog">
      <div className="register-header">
        <DialogTitle className="register-title">Register</DialogTitle>
        <IconButton onClick={onClose} className="close-button">
          <CloseIcon />
        </IconButton>
      </div>
      <DialogContent className="register-content">
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="dense"
          className="register-input"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="dense"
          type="email"
          className="register-input"
        />
        <TextField
          fullWidth
          label="Create Password"
          variant="outlined"
          margin="dense"
          type="password"
          className="register-input"
        />
        <Typography variant="body1" className="role-label">
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
        <div className="register-actions">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleRegister}
          >
            Register
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default Register;