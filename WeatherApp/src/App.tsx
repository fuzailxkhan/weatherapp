import "./App.css"
import CardsDiv from "./components/CardsDiv"
import SearchDiv from "./components/SearchDiv"

const App = () => {
  return (
    <div className="back-div">
      <div className="main-div">
        <SearchDiv />
        <CardsDiv />
      </div>
    </div>
  )
}

export default App