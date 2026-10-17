import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addUser} from "../utils/userSlice"
import { useEffect } from "react";

const Body = () => {

  const navigate =useNavigate();
  const dispatch = useDispatch()


  const userData = useSelector((store)=>store.user)



  const fetchUser= async ()=>{
    if(userData) return;

    try{
      const res = await axios.get("http://localhost:3000/profile" , {withCredentials:true})

      dispatch(addUser(res.data))
    }
    catch(err){

      navigate("/login")
      console.log(err.message)
    }
    

  }


  useEffect(()=>{

       fetchUser()
    
   
  },[])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
export default Body;
