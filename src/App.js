import "./App.css";
// import "./key";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "0779172c";
  const YOUR_APP_KEY = "956182f358b06a4f1bcc230cf1f5afbd";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&
  &health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  // https://www.themealdb.com/api/json/v1/1/random.php
  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app_input"
          placeholder="enter ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="search" />

        <select className="app__healthLabels">
          <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabels("vegetaranian")}>
            Vegetaranian
          </option>
          <option onClick={() => sethealthLabels("paleo")}>paleo</option>
          <option onClick={() => sethealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={() => sethealthLabels("gluten-free")}>
            gluten-free
          </option>
          <option onClick={() => sethealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={() => sethealthLabels("low-sugar")}>
            low-sugar
          </option>
          <option onClick={() => sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={() => sethealthLabels("peanut-free")}>
            peanut-free
          </option>
          <option onClick={() => sethealthLabels("tree-nut-free")}>
            tree-nut-free
          </option>
          <option onClick={() => sethealthLabels("soy-free")}>soy-free</option>
          <option onClick={() => sethealthLabels("fish-free")}>
            fish-free
          </option>
          <option onClick={() => sethealthLabels("shelfish-free")}>
            shelfish-free
          </option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
