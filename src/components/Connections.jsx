import { useDispatch, useSelector } from "react-redux"
import ConnectionCards from "./ConnectionCards"
import axios from "axios"
import { addConnection } from "../utils/connectionSlice"
import { useEffect } from "react"

const Connections = () => {


    const connectionData = useSelector((store)=>store.connections)



    const dispatch = useDispatch()

    const allConnection =async ()=>{

      const res =  await axios.get("http://localhost:3000/connection" , {withCredentials:true})

      console.log(res.data.data)

      dispatch(addConnection(res.data.data))

    }


    useEffect(()=>{
        if(connectionData){
            return;
        }
        allConnection()
    })


  return (connectionData &&
   (
    <div className="min-h-screen w-full bg-gradient-to-b from-base-200/40 via-base-100 to-base-200/40 px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-5xl">

        {/* Header */}
        {connectionData.length > 0 && (
          <div className="mb-6 sm:mb-8 flex items-end justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Your Connections
              </h1>
              <p className="text-sm text-base-content/60 mt-1">
                {connectionData.length} {connectionData.length === 1 ? "person" : "people"} in your network
              </p>
            </div>
          </div>
        )}

        {/* Grid */}
        {connectionData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 place-items-stretch">
            {connectionData.map((det, key) => (
              <ConnectionCards userDet={det} key={key} />
            ))}
          </div>
        ) : (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-3">
            <div className="text-6xl opacity-30">🤝</div>
            <h2 className="text-xl font-semibold">No connections yet</h2>
            <p className="text-sm text-base-content/60 max-w-xs">
              Start swiping to build your network — your matches will appear here.
            </p>
          </div>
        )}

      </div>
    </div>
  ))
}

export default Connections