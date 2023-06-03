import { useQuery } from "@tanstack/react-query";
import styled from "styled-components"
import { useParams } from "react-router-dom";
import { fetchDetail } from "../api";


const CharImg = styled.img`
width: 400px;
height: 400px;
margin-right: 10px;
border-radius:50%;
`;
interface IdetailData {
  id:number;
  films:string[];
  name:string;
  imageUrl:string;
  sourceUrl:string;

}
function Detail(){
  const {id:charId} = useParams()
  const {isLoading, data:detailData} = useQuery<IdetailData>(["charDetail"],()=>fetchDetail(charId))
  const imgUrl = detailData?.imageUrl ? detailData.imageUrl :"https://static.wikia.nocookie.net/disney/images/2/2c/A.J._Arno.jpg"
  
return (
<><h1>Detail</h1>{isLoading?<h1>is Loading...</h1> : <>
<CharImg src={imgUrl} />
<h1>{detailData?.name}'s films'</h1>
<ul>{detailData?.films.map(film => <li>{film}</li>)}</ul>

</>}</>
)
}
export default Detail;