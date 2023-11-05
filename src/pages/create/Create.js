import { useState, useRef, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
// Import useNavigate hook from react-router-dom v6
import { useNavigate } from 'react-router-dom';
import './Create.css';

export default function Create() {
  // State hooks for form fields
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  // Ref for the ingredient input to focus after adding an ingredient
  const ingredientInput = useRef(null);

  // Custom hook for posting data
  const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST');
  // useNavigate hook replaces useHistory in v6 for navigation
  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: `${cookingTime} minutes`
    });
  };

  // Handler for adding ingredients
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    // Add ingredient if it's not empty and not already in the list
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    // Focus back on the ingredient input after adding an ingredient
    ingredientInput.current.focus();
  };

  // Effect for redirecting after successful data submission
  useEffect(() => {
    // If data is returned from the post request, navigate to the home page
    if (data) {
      navigate('/');
    }
  }, [data, navigate]);

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required 
          />
        </label>

        <button type="submit" className="btn">submit</button>
      </form>
    </div>
  );
}
