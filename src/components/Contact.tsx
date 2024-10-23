import React from "react";
import { useEffect } from "react";

const Contact: React.FC = () => {
    useEffect(() => {
        document.title = "Contact | Resume";
    }, []);
    return (
        <main>
            <h2>Contact</h2>
            <p>Feel free to contact me at randomEmail123@gmail.com</p>
            <p>Or you can call me at 350-333-3333</p>
            <p>My PO box is at:</p>
            <p>308 Negra Aroyo Lane, Albuquerque, New Mexico 97104</p>
        </main>
    );
};

export default Contact;