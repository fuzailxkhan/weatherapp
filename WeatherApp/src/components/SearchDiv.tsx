import SearchBar from "./SearchDiv/SearchBar"
import "./SearchDiv/SearchDiv.css"

interface SearchDivProps{
  handleSearch:(search:string)=>void;
}

const SearchDiv = ({handleSearch}:SearchDivProps) => {
  return (
    <div className="search-div">
      <SearchBar handleSearch={handleSearch}/>
    </div>
  )
}

export default SearchDiv