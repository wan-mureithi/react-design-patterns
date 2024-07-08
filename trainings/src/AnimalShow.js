import React, { useState } from "react"
import ViewAnimal from "./ViewAnimal"

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"]
  return animals[Math.floor(Math.random() * animals.length)]
}
function AnimalShow() {
  const [animals, setAnimals] = useState([])
  const handleClick = () => {
    // animals.push(getRandomAnimal()) // this is bad because it mutates the state directly
    setAnimals([...animals, getRandomAnimal()])
  }
  const renderedAnimals = animals.map((animal, index) => {
    return <ViewAnimal key={index} type={animal} />
  })
  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  )
}

export default AnimalShow
