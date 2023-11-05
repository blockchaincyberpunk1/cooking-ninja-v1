import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import './Search.css';

export default function Search() {
  // Extract the query string from the URL
  const queryString = useLocation().search;
  // Use URLSearchParams to handle the query string
  const queryParams = new URLSearchParams(queryString);
  // Get the search query parameter 'q'
  const query = queryParams.get('q');

  // Construct the URL for fetching recipes that include the search query
  const url = `http://localhost:3000/recipes?q=${query}`;
  // Destructure the useFetch hook's returned object to get the necessary states
  const { error, isPending, data } = useFetch(url);

  return (
    <div className="search">
      {/* Display the search query within the page title */}
      <h2 className="page-title">Recipes including "{query}"</h2>
      {/* Show an error message if there is an error */}
      {error && <p className="error">{error}</p>}
      {/* Show a loading message while the data is being fetched */}
      {isPending && <p className="loading">Loading...</p>}
      {/* Render the RecipeList component with the fetched data */}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
