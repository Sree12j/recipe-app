const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipelist1 = document.getElementById("recipe-list");

function displayrecipes(recipes) {
    recipelist1.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeitem = document.createElement("li");
        recipeitem.classList.add("recipe-item");

        const recipeimage1 = document.createElement("img");
        recipeimage1.src = recipe.image;
        recipeimage1.alt = "recipe image";

        const recipehead = document.createElement("h2");
        recipehead.innerText = recipe.title;

        const recipeingredients = document.createElement("p");
        recipeingredients.innerHTML = `
            <strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;

        const recipelink = document.createElement("a");
        recipelink.href = recipe.sourceUrl;
        recipelink.innerText = "View Recipe";

        recipeitem.appendChild(recipeimage1);
        recipeitem.appendChild(recipehead);
        recipeitem.appendChild(recipeingredients);
        recipeitem.appendChild(recipelink);
        recipelist1.appendChild(recipeitem);
    });
}

async function getrecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes;
}

async function init() {
    const recipes = await getrecipes();
    displayrecipes(recipes);
}

init();
