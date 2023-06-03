import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { fetchList } from "./api";

interface IcharList{
  "id": number
  "name": string
  "imageUrl":string
}

function Home(){

  
const {isLoading, data: charData} =  useQuery<IcharList[]>(["charlist"],fetchList)
//    const [list,setList] = useState([])
//   useEffect(()=>{(async()=>{
//    const json = await(await fetch("https://disney_api.nomadcoders.workers.dev/characters")).json()
//    setList(json.slice(0,100)) 
   
//  })()},[])
//  console.log(list)
  return <><h1>Home</h1>
  {isLoading? <h1>Loading...</h1>:
  <ul>
    {charData?.slice(1,100).map(data => <li><Link to={`character/${data.id}`}>{data.name}</Link></li>)}
  </ul>
  
  }

</>
}
export default Home;