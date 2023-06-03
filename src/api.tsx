const BASE_URL = "https://disney_api.nomadcoders.workers.dev/characters"

export function fetchList () {
 return fetch(`${BASE_URL}`).then(response => response.json())
}
<<<<<<< HEAD
export function fetchDetail(charId:string | undefined){
=======
export function fetchDetail(charId:number){
>>>>>>> f30b9cbfe91692afb079c7d09cba738b6e07805b
  return fetch(`${BASE_URL}/${charId}`).then(response => response.json())
}