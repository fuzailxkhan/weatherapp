import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useForm} from "react-hook-form"


interface SearchBarProps{
  handleSearch:(search:string)=>void;
}

function SearchBar({handleSearch}:SearchBarProps) {

  const {register,handleSubmit} = useForm();

  return (
    <div className="search-form d-flex">
        <form className="d-flex" role="search" onSubmit={handleSubmit((data)=>handleSearch(data.search))}>
            <input {...register("search")} className="search-input" type="search" placeholder="Search" aria-label="Search" />
            <button className="search-button" type="submit"><FaSearch /></button>
        </form>
    </div>
  )
}

export default SearchBar