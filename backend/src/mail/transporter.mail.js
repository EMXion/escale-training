const { addLog } = require("../services/logs/logs");
const { ResHelper } = require("../helpers/res.helper");
const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');

function transporter( name, date, hour, people, comment ){
    try {
        
        console.log("Voici la reception lors de l'envoie du mail dans la méthode transporter : ", name, date, hour, people, comment);

        var transport = nodemailer.createTransport({
            service: process.env.HOST_NODEMAILER,
            auth: {
              user: process.env.USER_NODEMAILER,
              pass: process.env.PASS_NODEMAILER,
            },
          });
  
        var mailOptions = {
          from: process.env.USER_NODEMAILER, // Adresse e-mail de l'expéditeur
          to: process.env.USER_NODEMAILER, // Adresse e-mail du destinataire
          subject: 'Réservation de table pour "L\'Escale',
          text: 'Vous avez bien réservez une table le ' + date + ' à ' + hour + ' sous le nom de ' + name + ' pour ' + people + ' personne(s) avec comme information (Ou rien si vide) : ' + comment 
        };
  
        transport.sendMail(mailOptions);

        return ResHelper.send(res, 201, "Success, the contact has been created");
    } catch (e) {
        addLog("error", e, "transporter.mail.js");
    }
}

module.exports = {
    transporter
}