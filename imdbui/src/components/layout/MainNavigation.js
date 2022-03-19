import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";

const grid = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 12,
  xl: 12,
};

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item {...grid}>
          <header className={classes.header}>
            <div className={classes.logo}>IMDB - Movies</div>
            <nav>
              <ul>
                <li>
                  <Link to="/">All Movies</Link>
                </li>
                <li>
                  <Link to="/new-movie">Add New Movie</Link>
                </li>
                <li>
                  <Link to="/favorites">
                    My Favorites
                    <span className={classes.badge}>
                      {favoritesCtx.totalFavorites}
                    </span>
                  </Link>
                </li>
                <li className={classes.sign}>
                  <Link to="/new-user">Register</Link>
                </li>
                <li className={classes.sign}>
                  <Link to="/sign-in">Sign In</Link>
                </li>
              </ul>
            </nav>
          </header>
            <div className={classes.wrap}>
              <div className={classes.search}>
                <input
                  type="text"
                  className={classes.searchTerm}
                  placeholder="What are you looking for?"
                />
                <button type="submit" className={classes.searchButton}></button>
              </div>
            </div>
          <FormControl>
            <RadioGroup className={classes.by} row>
              <FormControlLabel
                value="movie"
                control={<Radio />}
                label="By Movie"
              />
              <FormControlLabel
                value="director"
                control={<Radio />}
                label="By Director"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainNavigation;
