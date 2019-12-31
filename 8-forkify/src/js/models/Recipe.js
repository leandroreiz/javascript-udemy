import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    };

    async getRecipe() {
        try {
            const results = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = results.data.recipe.title;
            this.author = results.data.recipe.publisher;
            this.img = results.data.recipe.image_url;
            this.url = results.data.recipe.source_url;
            this.ingredients = results.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('Something went wrong!');
        }
    };

    calcTime() {
        // Assuming that we need 15 min to each 3 ingredients
        const numIngredients = this.ingredients.length;
        const periods = Math.ceil(numIngredients / 3);
        this.time = periods * 15;
    };

    calcServings() {
        this.servings = 4;
    };

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tpsp', 'tpsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsShort, 'kg', 'g'];
        
        const newIngredients = this.ingredients.map(element => {
            // 1. Uniform units
            let ingredient = element.toLowerCase();
            
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });
            
            // 2. Remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3. Parse ingredients into count, unit and ingredient // ?
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el => units.includes(el));

            let objIng;
            if (unitIndex > -1) {
                // There is a unit
                // Ex.: 4 1/2 cups, arrCount is [4, 1/2 ] --> eval("4+1/2") --> 4.5
                // Ex.: 4 cups, arrCount is [4]
                const arrCount = arrIng.slice(0, unitIndex);

                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                };

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex+1).join(' ')
                };

            } else if (parseInt(arrIng[0], 10)) {
                // There is NO unit, but the first element is a number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                };
            } else if (unitIndex === -1) {
                // There is NO unit and NO number in the first position
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                };
            };

            return objIng;

        });
        this.ingredients = newIngredients;
    };

    updateServings (type) {
        // Servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;


        // Ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        });
        
        this.servings = newServings;
    };

};