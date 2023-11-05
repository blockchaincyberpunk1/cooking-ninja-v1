import { useState } from 'react';
// Import useNavigate hook from react-router-dom v6
import { useNavigate } from 'react-router-dom';
import './Searchbar.css';

export default function Searchbar() {
  // State hook to keep track of the search term
  const [term, setTerm] = useState('');
  // useNavigate hook replaces useHistory in v6 for navigation
  const navigate = useNavigate();

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submit action
    // Navigate to the search page with the query parameter, using the navigate function
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    // Search bar container
    <div className="searchbar">
      {/* Form element with an onSubmit event handler */}
      <form onSubmit={handleSubmit}>
        {/* Accessible label for the search input */}
        <label htmlFor="search">Search:</label>
        {/* Search input field */}
        <input 
          id="search" 
          type="text" 
          onChange={(e) => setTerm(e.target.value)} // Updating the term state on every keystroke
          value={term} // Controlled component: input value is driven by the term state
          required // Making sure the input is not empty on form submission
        />
      </form>
    </div>
  );
}
