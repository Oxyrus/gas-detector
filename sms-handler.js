const accountSid = 'AC1ec1db562c85f2e2b43a81f04b6a5a09';
const authToken = 'e87b7355418bc730a78d8b57858cf120';
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
