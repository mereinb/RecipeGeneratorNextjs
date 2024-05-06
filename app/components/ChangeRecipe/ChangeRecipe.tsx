//event handlers need to be rendered on client side
'use client';
import Button from '../Button/Button'


import React from 'react'

const ChangeRecipe = () => {
  return (
    <div>
      <Button onClick={() => console.log("hi")}>
        Change Recipe
      </Button>
    </div>
  )
}

export default ChangeRecipe
