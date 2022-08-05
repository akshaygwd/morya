import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';
import './header.css';

const Header = () => {
    return(
        <div className='header'>
            <Container>
                <div className='header__container'>
                    <h1><img className='header__image' src="images/morya-logo.jpeg" alt="logo" /></h1>
                    <ul className='header__navlinks'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Header;