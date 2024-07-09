import "./SearchBar.css"
import { useState } from "react"

function Searchbar({ onSubmit }) {
  const [term, setTerm] = useState("")
  //create a callback function
  const handleChange = (event) => {
    setTerm(event.target.value)
  }
  //event handler always receive an event object
  const handleFormSubmit = (e) => {
    e.preventDefault() // disables the form collection and causes a automatic page refresh
    console.log("send term to parent")
    //document.querySelector("input").value
    onSubmit(term)
  }
  return (
    <div className="search-bar">
      {/* the form tag has an auto trigger onEnter */}
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input value={term} type="text" onChange={handleChange} />
      </form>
      {/* <button>Search</button> */}
    </div>
  )
}

export default Searchbar
