import Aux from '../../containers/hoc/auxilliary';
import './Navbar.css';

const navbar = props => (
    <Aux>
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-list-item">
                    <a href="/add-article">Add Article</a>
                </li>
                <li className="nav-list-item">
                    <a href="/articles">Show Articles</a>
                </li>
            </ul>
        </nav>
    </Aux>
);

export default navbar;