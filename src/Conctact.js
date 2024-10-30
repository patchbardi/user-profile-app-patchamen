
// src/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contactez-moi</h1>
            <form>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email :
                    <input type="email" name="email" />
                </label>
                <br />
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default Contact;
