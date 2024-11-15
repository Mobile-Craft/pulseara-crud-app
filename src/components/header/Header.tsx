
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <div className="header">
            <Link to='/procedimientos'
                className={`title ${location.pathname === '/procedimientos' ? 'active' : ''}`}>
                Procedimientos
            </Link>
            <Link to='/estudios'
                className={`title ${location.pathname === '/estudios' ? 'active' : ''}`}>
                Estudios
            </Link>
        </div>

    )
}

export default Header