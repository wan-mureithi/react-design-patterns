import "./ViewAnimal.css"
import { useState } from "react"
import bird from "./images/svg/bird.svg"
import cat from "./images/svg/cat.svg"
import cow from "./images/svg/cow.svg"
import dog from "./images/svg/dog.svg"
import gator from "./images/svg/gator.svg"
import heart from "./images/svg/heart.svg"

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
}
function ViewAnimal({ type }) {
  const [clicks, setClicks] = useState(0)
  const handleClick = () => {
    setClicks(clicks + 1)
  }
  return (
    <div className="animal-show" onClick={handleClick}>
      {type}
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  )
}

export default ViewAnimal
