import "./App.css"
import { useState } from "react"
import searchImages from "./api"
import SearchBar from "./components/Searchbar"
import ImageList from "./components/ImageList"

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const results = await searchImages(term)
    setImages(results)
    console.log(results)
  }
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
      <p>pictures</p>
    </div>
  )
}

export default App
