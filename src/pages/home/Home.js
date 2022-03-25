import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import './Home.css';

const Home = () => {
  const { data, isPending, error } = useFetch(
    'https://api.npoint.io/6e647fb47ccb374fbc60'
  );
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
