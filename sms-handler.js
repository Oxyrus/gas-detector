// Obtener credenciales en https://www.twilio.com/console
const accountSid = 'ACCOUNT_SID';
const authToken = 'AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

const sendSMS = (message, number) => {
  client.messages
    .create({
      body: message,
      from: '+12052094823',
      to: number
    })
    .then(message => console.log(message.sid))
    .catch(err => console.error(err));
}

module.exports = sendSMS;
