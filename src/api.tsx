const BASE_URL = "https://disney_api.nomadcoders.workers.dev/characters"

export function fetchList () {
 return fetch(`${BASE_URL}`).then(response => response.json())
}

export function fetchDetail(charId:string | undefined){


  return fetch(`${BASE_URL}/${charId}`).then(response => response.json())
}