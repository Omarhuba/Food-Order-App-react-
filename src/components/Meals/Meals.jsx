import React, {Fragment} from 'react'
import { AvailableMeals } from "./AvailableMeals";
import { MealsSummar } from "./MealsSummar";


export const Meals = () => {
  return (
    <Fragment>
        <MealsSummar/>
        <AvailableMeals/>
    </Fragment>
  )
}
