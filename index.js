const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const images = [
  "https://i.imgur.com/xjUEn5O.jpg",
  "https://i.imgur.com/mg6cRbn.jpeg",
  "https://i.pinimg.com/564x/98/37/12/983712827beff24729da51c493cb2e76.jpg"
];

// Trang welcome
app.get('/', (req, res) => {
  res.send('🎉 Welcome to the Random Image API! Try <a href="/random">/random</a>');
});

// API trả ảnh random
app.get('/random', (req, res) => {
  const url = images[Math.floor(Math.random() * images.length)];
  res.json({ url });
});

// Dùng đúng PORT của Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
