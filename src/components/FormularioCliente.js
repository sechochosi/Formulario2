// ./src/components/FormularioCliente.js

'use client'

import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

function FormularioCliente() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    genero: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Formulario de Registro
        </Typography>
        <form onSubmit={handleSubmit}>
          {}
          {}
        </form>
      </Box>
    </Container>
  );
}

export default FormularioCliente;