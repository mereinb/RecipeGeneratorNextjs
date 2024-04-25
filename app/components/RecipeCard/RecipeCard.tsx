import React from 'react'
import ChangeRecipe from '../ChangeRecipe/ChangeRecipe'
import styles from '../RecipeCard/RecipeCard.module.css'
import Container from '../Container/Container'

const RecipeCard = () => {
  return (
    <Container>
    <div>
      <h1>Recipe Title</h1>
      <div>
        <div>
           <h2>Ingredients</h2>
           <ul>
            <li>Ingredient</li>
            <li>Ingredient</li>
           </ul>
        </div>
        <div>
          <h2>Preparation</h2>
          <p>Preparation steps</p>
        </div>
       


      </div>
      


      <ChangeRecipe />

    </div>

    </Container>
  )
}

export default RecipeCard
