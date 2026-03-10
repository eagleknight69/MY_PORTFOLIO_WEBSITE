import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API Endpoint for contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log('Received contact form submission:', { name, email, message });

  // Here you would typically send an email or save to a database
  // For now, we'll just simulate success
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  res.status(200).json({ 
    message: 'Thank you for your message! I will get back to you soon.',
    received: { name, email }
  });
});

// Serve static files from the Angular app
const distPath = path.join(__dirname, 'dist/portfolio/browser');
app.use(express.static(distPath));

// For all other routes, serve index.html (Angular routing)
app.get('/:path*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
