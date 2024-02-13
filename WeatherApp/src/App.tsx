import "./App.css"
import CardsDiv from "./components/CardsDiv"
import SearchDiv from "./components/SearchDiv"

const App = () => {
  return (
    <div className="main-div border border-dark d-flex col ">
      <SearchDiv />
      <CardsDiv />
    </div>
  )
}

export default App