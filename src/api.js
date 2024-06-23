const appid = "58dc4471"
const apikey = "9ce5de0975fb793df106e72a46baf583"

export async function getRecipies(searchtext){
  const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchtext}&app_id=${appid}&app_key=${apikey}`);
  const recipes = await res.json();
  return recipes.hits;
}