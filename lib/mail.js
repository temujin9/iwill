import Mailgun from 'mailgun-js';

export default function mailself(subj, body) {
  var mailgun = new Mailgun({apiKey: process.env.MAILGUN_KEY, 
                             domain: process.env.MAILGUN_DOMAIN})
  var data = {
    from:    process.env.MAILGUN_FROM,
    to:      process.env.EMAILS_TO_NOTIFY,
    subject: subj,
    text:    body,
  }
  
  var msg = mailgun.messages().send(data, (err, body) => {
    console.log('mailself result', err, body)
  })
  
  console.log('mailself', data, msg)
}