import { Link } from 'react-router-dom';
import './RecipeList.css';

// Destructuring recipes directly in the function parameter for cleaner code
export default function RecipeList({ recipes }) {
  // Handling the case where there are no recipes
  if (recipes.length === 0) {
    // Using a more semantic <p> tag instead of <div> for text content
    return <p className="error">No recipes to load...</p>;
  }

  // Function to truncate the method description to a specified length
  const truncateMethod = (method, length) => {
    // Ensure method is a string and truncate with ellipsis if it's too long
    return typeof method === 'string' && method.length > length
      ? method.substring(0, length) + '...'
      : method;
  };

  // The main return statement for when recipes are present
  return (
    // Using a <section> tag for a section of related content
    <section className="recipe-list">
      {recipes.map(recipe => (
        // Each recipe card is a separate article, which is more semantic
        <article key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          {/* Using the truncateMethod function to handle the method description */}
          <p>{truncateMethod(recipe.method, 100)}</p>
          {/* Using a button element inside the Link for better accessibility */}
          <Link to={`/recipes/${recipe.id}`}>
            <button className="btn">Cook This</button>
          </Link>
        </article>
      ))}
    </section>
  );
}
