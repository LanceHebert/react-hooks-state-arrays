import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [dropValue, setDropValue] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    setFoods((foods)=>{ return foods = [...foods,newFood]})
  }
  //this is to remove a Li on click
// function handleLiClick(id) {
//   const liRemaining=foods.filter(food=>{return id !== food.id})
//   console.log(liRemaining);
//   setFoods(foods=>{return foods = liRemaining})
// }
  function handleLiClick(id) {
    const liUpdate=foods.map(food=>{
      if( id === food.id){
        return food = {
          ...food,
          heatLevel: food.heatLevel+1
        }
      }
    else{
      return food
    }
  })
  console.log(liUpdate);
  setFoods(foods=>{return foods = liUpdate});

}

function handleFilter(e){
  setDropValue(dropValue => {return dropValue = e})
}

  const filteredFood = foods.filter(food=>{
    if (dropValue === "All")
    {
      return true;
    }
    else{
     return  dropValue === food.cuisine
    }})
  console.log(filteredFood);
  


const foodLi = filteredFood.map((food) =>{ return <li key={food.id} onClick={()=>{handleLiClick(food.id)}}>{food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine} </li>})

  return (
    <div>
      <select name="filter" onChange={(e)=>{handleFilter(e.target.value)}}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodLi}</ul>
    </div>
  );
}

export default SpicyFoodList;
