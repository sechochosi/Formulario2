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
    <Container maxWidth="sm" sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      padding: '20px',
      borderRadius: '8px',
    }}>
      <Box sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          color: '#FFD700',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '4rem', 
          fontWeight: 'bold',
          fontFamily: 'Times New Roman, Times, serif' 
        }}
      >Registrate como Cliente
      </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            margin="normal"
            required
            sx={{
              backgroundColor: '#a5a5a5',
              borderRadius: '4px',
              marginBottom: '10px'
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            sx={{
              backgroundColor: '#a5a5a5',
              borderRadius: '4px',
              marginBottom: '10px'
            }}
          />
          <TextField
            fullWidth
            label="Edad"
            name="edad"
            type="number"
            value={formData.edad}
            onChange={handleChange}
            margin="normal"
            required
            sx={{
              backgroundColor: '#a5a5a5',
              borderRadius: '4px',
              marginBottom: '10px'
            }}
          />
          <FormControl fullWidth margin="normal" sx={{
            backgroundColor: 'a5a5a5',
            borderRadius: '4px',
            marginBottom: '10px'
          }}>
            <InputLabel id="genero-label">Género</InputLabel>
            <Select
              labelId="genero-label"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
              sx={{
                backgroundColor: '#a5a5a5',
                borderRadius: '4px',
                marginBottom: '10px'
              }}
            >
              <MenuItem value="masculino">Masculino</MenuItem>
              <MenuItem value="femenino">Femenino</MenuItem>
            </Select>
          </FormControl>
          <center>
            <Button 
            type="submit" variant="contained" color="primary" 
            sx={{ mt: 2, backgroundColor: '#a5a5a5	','&:hover': {
                backgroundColor: '#FFD700'}}}
            > REGISTRATE YA!
          </Button>
          </center>
        </form>
      </Box>
    </Container>
  );
}

export default FormularioCliente;