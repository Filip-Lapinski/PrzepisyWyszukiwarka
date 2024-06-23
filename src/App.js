import './App.css';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import { getRecipies } from './api';
import { useEffect, useState } from 'react';
import RecipeList from './components/RecipeList';

function App() {

  const [recipes, setRecipes] = useState([]);
  
  const defaulttext = "turkey"
  async function onSearch(searcht){
    const res = await getRecipies(searcht);
    setRecipes(res);
  }

  useEffect(() => {
    const defaultSearch = async () => {
      setRecipes([]);
      const results = await getRecipies(defaulttext);
      setRecipes(results);
    };

    defaultSearch();
  }, []);

  return (
    <div>
      <HeaderBar/>
      <SearchBar onSearch={onSearch}/>
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
