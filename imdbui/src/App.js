import { Route, Routes } from 'react-router-dom'

import AllMoviesPage from './pages/AllMovies';
import NewMoviePage from './pages/NewMovie';
import NewUserPage from './pages/NewUser';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMoviesPage />} />
        <Route path="/new-movie" element={<NewMoviePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/new-user" element={<NewUserPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
