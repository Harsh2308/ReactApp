import axios from 'axios'
export const apicalls = {
  Api
}

async function Api(){
  return await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
    return res
  }).catch((err)=>{
    console.log(err)
  })
}