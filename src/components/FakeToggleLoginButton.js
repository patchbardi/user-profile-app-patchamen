import { Button } from 'react-bootstrap';

/**
* Simple React-Component to toggle login state.
* @component
* @param {Object} props - properties of the compoment.
* @param {boolean} props.isLoggedIn - State of the login.
* @param {function} props.onToggle - Function to toggle the login.
* @returns {JSX.Element} Button to toggle login.
*/
// ToggleButton-Komponente für den Login-Status
function FakeToggleLoginButton({ isLoggedIn, onToggle }) {
    return (
      <Button variant="secondary" onClick={onToggle} style={{position:"absolute", right:100, top:100}}>
        {isLoggedIn ? 'Ausloggen' : 'Einloggen'}
      </Button>
    );
}


export default FakeToggleLoginButton;