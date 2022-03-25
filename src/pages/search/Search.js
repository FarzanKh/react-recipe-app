import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import './Search.css';

const Search = () => {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = 'https://api.npoint.io/6e647fb47ccb374fbc60?q=' + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipe={data} />}
    </div>
  );
};

export default Search;
