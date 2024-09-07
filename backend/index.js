const express = require('express');
const multer = require('multer');
const app = express();
const port = 5000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../src/components/adminf/stock');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/admin/controll', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ filename: req.file.filename });
  } else {
    res.status(400).json({ message: 'No file uploaded' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
