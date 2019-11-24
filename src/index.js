const express = require('express');
const cors = require('cors');
const sendMail = require('./emailService');

const app = express();
const port = process.env.PORT || 80;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
  res.send('Brisbuy is live');
});

app.post('/order', async function(req, res) {
  try {
    await sendMail(req.body);
    return res
      .status(200)
      .json({ message: 'Order successfull. We will contact you shortly to confirm your order' });
  } catch ({ message: error }) {
    res.status(400).json({ message: 'Order was not successfull' });
  }
});
app.listen(port, function() {
  console.log(`App is running on ${port}`);
});
