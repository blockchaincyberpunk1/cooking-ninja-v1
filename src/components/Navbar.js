// Importing the Link component from react-router-dom to enable navigation
import { Link } from 'react-router-dom';

// Importing the Navbar styles for styling the component
import './Navbar.css';

// Importing the Searchbar component to be used within the Navbar
import Searchbar from './Searchbar';

// Defining the Navbar component as a functional component
export default function Navbar() {
  // The return statement contains the JSX for the Navbar
  return (
    // Using a semantic <header> element instead of <div> for better accessibility and SEO
    <header className="navbar">
      {/* The <nav> element is used to wrap navigation links, indicating that these are major navigation blocks */}
      <nav>
        {/* The Link component is used for client-side navigation without a page refresh */}
        <Link to="/" className="brand">
          {/* Wrapping the site title in a <h1> tag for SEO purposes, indicating it's the top-level heading on the page */}
          <h1>Cooking Ninja</h1>
        </Link>
        {/* Including the Searchbar component which likely contains an input for searching recipes */}
        <Searchbar />
        {/* Another Link component for navigating to the recipe creation page */}
        <Link to="/create" className="nav-link">
          {/* Adding a descriptive text for the link for better user experience */}
          Create Recipe
        </Link>
      </nav>
    </header>
  );
}
