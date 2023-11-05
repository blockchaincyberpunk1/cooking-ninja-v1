import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import './Home.css';

export default function Home() {
  // Destructuring the object returned by useFetch to get data, loading status, and error
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

  return (
    <div className="home">
      {/* Conditional rendering to display an error message if there is an error */}
      {error && <p className="error">{error}</p>}
      {/* Conditional rendering to show a loading state while the data is being fetched */}
      {isPending && <p className="loading">Loading...</p>}
      {/* Conditional rendering of the RecipeList component only if data is available */}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
