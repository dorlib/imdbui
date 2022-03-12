import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
 
function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
    <header className={classes.header}>
        <div className={classes.logo}>IMDB - Movies</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Movies</Link>
                </li>
                <li>
                    <Link to='/new-movie'>Add New Movie</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        My Favorites
                        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                </li>
                <li className={classes.sign}>
                    <Link to='/new-user'>Register</Link>
                </li>
                <li className={classes.sign}>
                    <Link to='/sign-in'>Sign In</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation;