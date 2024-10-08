import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            
                <nav className="nav-container">
                    <p>😂👌</p>
                    <ul className="navbar">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
        </>
    )
}

export default Header;