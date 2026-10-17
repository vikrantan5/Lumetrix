import axios from "axios"
import { useEffect } from "react"


const Feed = () => {


const Profiles =async ()=>{
    const data = await axios.get("http://localhost:3000/feed")

   return data

    

}


useEffect(()=>{
   const data =  Profiles()

   console.log(data)
},[])


  return (
    <div className="w-full h-screen ">


      
    </div>
  )
}

export default Feed
