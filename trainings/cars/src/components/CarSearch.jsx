import React from "react"
import { changeSearchTerms } from "../store"
import { useDispatch, useSelector } from "react-redux"

function CarSearch() {
  const searchTerm = useSelector((state) => state.cars.searchTerm)
  const handleSearchTermChange = (e) => {
    dispatchEvent(changeSearchTerms(e.target.value))
  }
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search fiels is-horizontal">
        <label className="label">search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
          type="text"
        />
      </div>
    </div>
  )
}

export default CarSearch
