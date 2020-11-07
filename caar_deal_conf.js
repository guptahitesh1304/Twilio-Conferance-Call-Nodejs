var accountSid = 'YOUR_TWILIO_ACC_ID';
var authToken = 'YOUR_TWILIO_AUTH_CODE';
const client = require('twilio')(accountSid, authToken);

// client.calls
//       .create({
//         record: true,
//          url: 'http://demo.twilio.com/docs/voice.xml',
//          to: '+919982349009',
//          from: '+12242053334',
//          statusCallback: 'https://cinnamon-lion-3202.twil.io/status-callback',
//          statusCallbackMethod: 'POST',
//          statusCallbackEvent: ['initiated', 'ringing']
//        })
//       .then(call => console.log(call));

var number2 = '+XXXXXXXXXXX';
var number1 = '+XXXXXXXXXX';
var number3 = '+XXXXXXXXXX';
connectNumbers(number1, number2, number3);

function connectNumbers(number3,number1, number2) {
  [number1, number2, number3].forEach(function(number) {
    client.calls.create({
      url: 'YOUR_APPLICATION_URL',
      to: number,
      from: '+YOUR_TWILIO_NUMBER',
    })
    .then((call) => process.stdout.write(`Called ${number}`));
  })
}