import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Button, TextField, Container } from '@mui/material';
import './Content.css';

interface FormData {
  name: string;
  publisher: string;
  description: string;
}

const initialFormData: FormData = {
  name: '',
  publisher: '',
  description: '',
};

function Content() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newContent = {
      name: formData.name,
      publisher: formData.publisher,
      description: formData.description,
    };

    axios
      .post('http://localhost:80/api/contents/post', newContent, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Data posted successfully:', response.data);
        // Reset the form
        setFormData(initialFormData);
      })
      .catch((error) => console.error('Error posting data:', error));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container className="content-form-container">
      <h2>Create New Content</h2>
      <form onSubmit={handleSubmit} className="content-form">
        <TextField
          className="form-control"
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          className="form-control"
          label="Publisher"
          type="text"
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          className="form-control"
          label="Description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
        />
        <Button className="submit-button" type="submit" variant="contained">
          Create Content
        </Button>
      </form>
    </Container>
  );
}

export default Content;
