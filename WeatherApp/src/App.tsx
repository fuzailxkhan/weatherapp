import { useEffect, useState } from "react"
import "./App.css"
import CardsDiv from "./components/CardsDiv"
import SearchDiv from "./components/SearchDiv"
import axios from "axios";
import responseType from "./props";





const App = () => {

  const [searchInput,setSearchInput] = useState<string>();
  const [data,setData] = useState<responseType>();

  useEffect(()=>{
    const controller = new AbortController();
    console.log("Sending Req")
    if(searchInput){
    axios.get("http://localhost:3000/getWeather"+`?loc=${searchInput}`,{signal:controller.signal})
    .then(res=>{console.log(res.data);setData(res.data);})
    .catch(err=>console.log(err));}

    return ()=> controller.abort();
  },[searchInput]);




  return (
    <div className="back-div">
      <div className="main-div">
        <SearchDiv handleSearch={(data)=>setSearchInput(data)} />
        {data&&<CardsDiv data={data}/>}
      </div>
    </div>
  )
}

export default App