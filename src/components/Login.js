// src/components/Login.js
import React, { useState } from 'react';

function Login({isLoggedIn, setIsLoggedIn}) {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        try {
          const response = await fetch(`http://server-comhard/api/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: username, password: password }),
          });
          const data = await response.json();

          if (response.ok) {
            localStorage.setItem('token', data.token); // Speichert das Token
            localStorage.setItem('userId', data.userId);  // userId speichern
            setMessage('Erfolgreich eingeloggt!');
          } else {
            setMessage(data.message || 'Login fehlgeschlagen');
          }
        } catch (error) {
          console.error("Fehler beim Login:", error);
          setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
        }
    };

    return (
        <div>
            <h3>{isLoggedIn ? 'Herzlich willkommen' : 'Bitte einloggen'}</h3>
            {message && <h4>{message}</h4>}
            <form onSubmit={handleSubmit}>
                Benutzername: <input type="text" name="username" required />
                <br />
                Passwort: <input type="password" name="password" required />
                <br />
            <button type="submit">Anmelden</button>
            </form>
        </div>
    );
}

export default Login;