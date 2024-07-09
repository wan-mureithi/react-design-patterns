import React, { useState } from "react"

function RandomTest() {
  const [colors, setColors] = useState([])

  const addColorAtIndex = (newColor, index) => {
    const updatedColors = [...colors]
    updatedColors.splice(index, 0, newColor)
    setColors(updatedColors)
    const updatedColors2 = [
      ...colors.slice(0, index),
      newColor,
      ...colors.slice(index),
    ]
    //setColors(updatedColors2);
  }
  const removeColorAtIndex = (index) => {
    const updatedColors = [...colors]
    updatedColors.splice(index, 1) // Remove 1 element at the designated index
    setColors(updatedColors)
    const updated = colors.filter((color, i) => i !== index)
    setColors(updated)
  }

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>
  })

  return (
    <div>
      <Input onSubmit={addColorAtIndex} max={colors.length} />
      <ul>{renderedColors}</ul>
    </div>
  )
}

function Input({ onSubmit, max }) {
  const [color, setColor] = useState("")
  const [index, setIndex] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(color, index)
    setColor("")
    setIndex(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color"
      />
      <input
        type="number"
        value={index}
        onChange={(e) =>
          setIndex(Math.min(max, Math.max(0, Number(e.target.value))))
        }
        placeholder="Enter index"
        min="0"
        max={max}
      />
      <button type="submit">Add Color</button>
    </form>
  )
}

export default RandomTest
