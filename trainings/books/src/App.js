import { useEffect, useState } from "react"
import axios from "axios"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
//"server" : "json-server --port 3001 --watch db.json --host 127.0.0.1"
const URL = "http://localhost:3001/books"
function App() {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get(URL)
    setBooks(response.data)
  }
  useEffect(() => {
    fetchBooks()
  }, [])
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`${URL}/${id}`, { title: newTitle })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }
      }

      return book
    })

    setBooks(updatedBooks)
  }

  const deleteBookById = (id) => {
    axios.delete(`${URL}/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })

    setBooks(updatedBooks)
  }

  const createBook = async (title) => {
    const response = await axios.post(URL, { title })
    console.log(response)
    // const updatedBooks = [
    //   ...books,
    //   {
    //     id: Math.round(Math.random() * 9999),
    //     title,
    //   },
    // ]
    // setBooks(updatedBooks)
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
