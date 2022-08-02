import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const Form = () => {
    const form = useRef();
    const [pending, setPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page from refreshing
        setPending(true);

        emailjs.sendForm('service_ou93xxm', 'template_lycb60b', form.current, 'KkPLvj1TMeVPZgb6F')
            .then((result) => {
                setPending(false);
                alert("Thank you for your message! I will get back to you as soon as possible!");
                form.current.reset();
            }
            , (error) => {
                setPending(false);
                console.log(error.text);
                alert("Something went wrong. Please try again later.");
                form.current.reset();
            }
            );

    }

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" required/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required/>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10" required></textarea>
            <button type="submit" value="Send" disabled={pending}>{pending ? 'Sending...' : 'Send'}</button>
        </form>
    )
}

export default Form;