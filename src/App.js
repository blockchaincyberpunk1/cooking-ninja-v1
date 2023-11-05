// Import the necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

// Import styles
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Router component to keep the UI in sync with the URL */}
      <Router>
        {/* Navbar is placed outside the Routes so it remains constant across different routes */}
        <Navbar />
        {/* Routes component replaces the Switch component from v5 to render the first Route that matches the location */}
        <Routes>
          {/* Route components to define the mapping of path to components */}
          {/* 'element' prop is used to render the component, replacing the previous method of passing components as children */}
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          {/* Using URL parameters to capture the id of the recipe */}
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
