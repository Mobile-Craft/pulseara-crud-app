
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const currentPath = location.pathname.replace(/\/$/, "");
    return (
        <div className="header">
            <Link to='/procedimientos'
                className={`title ${currentPath === '/procedimientos' ? 'active' : ''}`}>
                Procedimientos
            </Link>
            <Link to='/estudios'
                className={`title ${currentPath === '/estudios' ? 'active' : ''}`}>
                Estudios
            </Link>
        </div>

    )
}

export default Header