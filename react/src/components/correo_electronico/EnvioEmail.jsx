import React from 'react';
import nodemailer from 'nodemailer';

function EmailSender({ name, email, subject, message }) {
    const handleSendEmail = () => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tucorreo@gmail.com',
                pass: 'tupassword',
            },
        });

        const mailOptions = {
            from: email,
            to: 'destinatario@gmail.com',
            subject: subject,
            text: message,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                // Si se produce un error al enviar el correo electrónico, se llama a la función onError
                onError(error);
            } else {
                console.log('Email enviado: ' + info.response);
                // Si el correo electrónico se envió correctamente, se llama a la función onSuccess
                onSuccess();
            }
        });
    };

    return (
        <button onClick={handleSendEmail}>Enviar correo electrónico</button>
    );
}
