import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
const Login = () => {
  const [emailId, setEmail] = useState("gulshan@gmail.com");
  const [password, setPassword] = useState("Vikrantsingh@3168");

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const sendDetails = async () => {
    try {
     const response =  await axios.post("http://localhost:3000/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );


      console.log(response.data)
      dispatch(addUser(response.data))
      navigate("/feed")
    } catch (err) {
        console.log(err.response?.data);
    }
  };

  return (
    <div className="w-full h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5OiDjY7FRjsvNAp9Y2avI-DaQvPbiA4uq0I0Dtfq5A&s=10')] bg-cover bg-center flex items-center justify-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="h-28">
          <img
            src="https://media.istockphoto.com/id/2043823329/photo/internet-network-cybersecurity-concept-data-privacy-protection-from-malicious-attacks-digital.jpg?s=612x612&w=0&k=20&c=EdSpTwVaTVMvZUUHk4d13L1VJsb2PxnPxRPrlmtIxOw="
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-5xl font-serif ">Login</h1>

          <label htmlFor="">Email</label>
          <input
            className="bg-amber-50 text-amber-950 h-11 p-5"
            value={emailId}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email "
          />
          <label htmlFor="">Password</label>
          <input
            className="bg-amber-50 text-amber-950 h-11 p-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Enter your password "
          />
          <input
            type="submit"
            onClick={() => {
              console.log("clickd")
              sendDetails()
            }}
            className="bg-blue-800 h-11 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
