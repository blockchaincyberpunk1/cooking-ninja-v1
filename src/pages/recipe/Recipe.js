import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Recipe.css';

export default function Recipe() {
  // Extracting the recipe ID from the URL parameters
  const { id } = useParams();
  // Constructing the URL for the fetch hook using template literals for better readability
  const url = `http://localhost:3000/recipes/${id}`;
  // Destructuring the object returned by useFetch to get the recipe data, loading status, and error
  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="recipe">
      {/* Displaying an error message if there is an error */}
      {error && <p className="error">{error}</p>}
      {/* Showing a loading message while the recipe data is being fetched */}
      {isPending && <p className="loading">Loading...</p>}
      {/* Rendering the recipe details if the recipe data is available */}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          {/* Iterating over the ingredients array to display each ingredient */}
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          {/* Displaying the cooking method */}
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}
