const express = require('express');
const sendSMS = require('./sms-handler');

const app = express();
const port = 3000;

app.post('/smoke-alert', (req, res) => {
  sendSMS('Se ha detectado humo', '+573207426197');
  res.send('Recibido');
});

app.post('/gas-alert', (req, res) => {
  sendSMS('Se ha detectado gas', '+573207426197');
  res.send('Recibido');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
