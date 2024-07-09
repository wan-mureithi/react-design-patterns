import { createContext, useState, useEffect } from "react"
import axios from "axios"

const BooksContext = createContext()
const URL = "http://localhost:3001/books"
function Provider({ children }) {
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
    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks)
  }
  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  }
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )
}
export { Provider }
export default BooksContext
