import { useQueries } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { fetchList } from "./api";

interface IcharList{
  "id": number
  "name": string
  "imageUrl":string
}
function Home(){

  
  // const {} = useQueries<IcharList[]>([],fetchList)
  
  /*  const [list,setList] = useState([])
  useEffect(()=>{(async()=>{
   const json = await(await fetch("https://disney_api.nomadcoders.workers.dev/characters")).json()
   setList(json.slice(0,100)) 
   
 })()},[])
 console.log(list) */
  return <h1>Home</h1>
}
export default Home;