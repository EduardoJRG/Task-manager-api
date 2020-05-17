const sgMail = require (`@sendgrid/mail`)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  
  sgMail.send({
    to: email,
    from: `eduardojrg86@gmail.com`,
    subject: `Welcome to Task App`,
    html: `Welcome to the app, ${name}. Let me konw how you get along with the app. <div><strong>Create by. Ing. Eduardo Rodriguez </strong></div>`
  })
}

const sendCanceledEmail = (email, name) => {
  
  sgMail.send({
    to: email,
    from: `eduardojrg86@gmail.com`,
    subject: `Cancellation to Task App`,
    html: `We will miss you, ${name}. We wish you comming soons. <p><strong>Create by. Ing. Eduardo Rodriguez </strong></p>`
  })
}


module.exports = {
  sendWelcomeEmail,
  sendCanceledEmail
}



















