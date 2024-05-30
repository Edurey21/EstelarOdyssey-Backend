const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS para permitir solicitudes desde tu frontend
const corsOptions = {
  origin: 'https://estelar-odyssey-frontend.vercel.app', // Reemplaza con la URL de tu frontend
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, 'data', 'suggestions.json');

// Helper function to read suggestions from file
const readSuggestions = () => {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
    return [];
  }
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading suggestions:', error);
    return [];
  }
};

// Helper function to write suggestions to file
const writeSuggestions = (suggestions) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(suggestions, null, 2));
  } catch (error) {
    console.error('Error writing suggestions:', error);
  }
};

// Route to get suggestions
app.get('/api/suggestions', (req, res) => {
  const suggestions = readSuggestions();
  res.json(suggestions);
});

// Route to add a suggestion
app.post('/api/suggestions', (req, res) => {
  try {
    const newSuggestion = req.body;
    const suggestions = readSuggestions();
    suggestions.push(newSuggestion);
    writeSuggestions(suggestions);
    res.status(201).json(newSuggestion);
  } catch (error) {
    console.error('Error adding suggestion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

