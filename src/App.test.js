import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import FakeToggleLoginButton from './components/FakeToggleLoginButton';

test('App should render', () => {
    render(
        <Router>
            <App />
        </Router>,
    );
    const text = screen.getByText(/Anmelden/i);
    expect(text).toBeInTheDocument();
});

test('Fake login button should render', () => {
    render(
        <>
            <FakeToggleLoginButton />
        </>
    );
    let text = screen.getByText(/Einloggen/i);
    expect(text).toBeInTheDocument();

    render(
        <>
            <FakeToggleLoginButton isLoggedIn={true} />
        </>
    );
    text = screen.getByText(/Ausloggen/i);
    expect(text).toBeInTheDocument();
});