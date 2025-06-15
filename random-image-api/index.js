const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const images = [
  "https://i.imgur.com/xjUEn5O.jpg",
  "https://i.imgur.com/mg6cRbn.jpeg"
];

app.get('/random', (req, res) => {
  const url = images[Math.floor(Math.random() * images.length)];
  res.json({ url });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
