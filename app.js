const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = process.env.PORT || 3000;
const formidable = require('express-formidable');

app.use(formidable());
 
// Route to handle file uploads
app.post('/upload', (req, res) => {
  // Check if a file was uploaded
  console.log(req.files)
//   if (!req.files || !req.files.file) {
//     return res.status(400).json({ error: 'No file uploaded.' });
//   }

  // Simulate a 3-second delay
  setTimeout(() => {
    res.json({ success: true });
  }, 3000);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
