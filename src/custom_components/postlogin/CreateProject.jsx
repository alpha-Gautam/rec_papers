import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    editorName: "",
    mentorName: "",
    topic: "",
    keywords: "",
    objective: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic to send formData to the backend or process it
  };

  return (
    <div className="">

    <Box sx={{ padding: 4, maxWidth: 600, margin: "auto", backgroundColor: "#f9f9f9", borderRadius: 4, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 3, textAlign: "center", fontWeight: "bold" }}>
        Create a New Project
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name of the Editor"
              name="editorName"
              value={formData.editorName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mentor"
              name="mentorName"
              value={formData.mentorName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
              helperText="Separate keywords with commas"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Objective"
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
            >
              Insert Content
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                helperText=".pdf, .doc, .docx"
                hidden
                onChange={handleFileChange}
              />
            </Button>
            {formData.file && (
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                File Selected: {formData.file.name}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit Project
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="caption" sx={{ marginTop: 1 }}>
        Accepted formats: .pdf, .doc, .docx
      </Typography>
    </Box>

    </div>
  );
};

export default CreateProject;