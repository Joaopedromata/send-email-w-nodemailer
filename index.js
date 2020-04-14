const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'meuemail@gmail.com',
        pass: 'minhasenha'
    }
});     

transporter.sendMail({
    from: "João Pedro Mata <meumail@gmail.com>",
    to: "outroemail@gmail.com, outroemail2@yahoo.com.br, outroemail3@gmail.com",
    subject: "Teste nodemailer",
    html: "<h1>Veja meu Github</h1><br><a href='https://github.com/Joaopedromata'>meu Github</a>"


}).then(message => {
    console.log(message);

}).catch(err => {
    console.log(err);
})
