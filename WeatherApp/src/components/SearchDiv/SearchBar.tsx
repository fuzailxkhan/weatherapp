import "./SearchBar.css"
import { TfiSearch } from "react-icons/tfi";


function SearchBar() {
  return (
    <div className="search-form d-flex">
        <form className="d-flex" role="search">
            <input className="search-input" type="search" placeholder="Search"/>
            <button className="search-button" type="submit"><TfiSearch /></button>
        </form>
    </div>
  )
}

export default SearchBar