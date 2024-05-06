import React, { useEffect, useState } from 'react'
import ChangeRecipe from '../ChangeRecipe/ChangeRecipe'
import Container from '../Container/Container'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient ();

const RecipeCard = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);


  useEffect(() => {   
    const fetchRandomRecipe = async () => {
      const recipe = await prisma.recipes.findFirst({
        orderBy: {rand: true},
        include: {
          ingredients: true,
        }
      });
      console.log(recipe);
      setRandomRecipe(recipe);
    };

    fetchRandomRecipe();
  }, []);

  return (
    <><Container>
      <div>
        {randomRecipe ? (
          <div>
            <h1>{randomRecipe.recipe_name}</h1>
            <div>
              <h2>Ingredients</h2>
              <ul>
                {randomRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.ingredient_name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Preparation</h2>
              <p>{randomRecipe.preparation_steps}</p>
            </div>
          </div>)
          :
        }
      </div>
      ) : (
      <p>Loading...</p>
      )}
    </div><ChangeRecipe /></>

      </Container>
    );
};


export default RecipeCard
