import React, { useState } from 'react';
import ContactForm from './ContactForm';
import EmailSender from './EmailSender';

function ContactPage() {
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = ({ name, email, subject, message }) => {
        setIsSending(true);

        EmailSender({ name, email, subject, message },
            () => {
                setIsSending(false);
                setIsSuccess(true);
            },
            (error) => {
                setIsSending(false);
                setIsError(true);
            }
        );
    };

    return (
        <div>
            <h1>Contacto</h1>
            {isSuccess && <p>El correo electrónico se envió correctamente</p>}
            {isError && <p>Se produjo un error al enviar el correo electrónico</p>}
            <ContactForm onSubmit={handleSubmit} />
            {isSending}
        </div>
    );
}
