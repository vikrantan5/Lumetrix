import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Signup = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("Vikrantsingh@3168");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const sendDetails = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );

      console.log(response.data);
      dispatch(addUser(response.data));
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data);
      setError(err.response?.data);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5OiDjY7FRjsvNAp9Y2avI-DaQvPbiA4uq0I0Dtfq5A&s=10')] bg-cover bg-center bg-fixed flex items-center justify-center px-4 py-8 relative">

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Card */}
      <div className="relative card bg-base-100 w-full max-w-sm rounded-3xl shadow-2xl border border-white/10 overflow-hidden animate-in fade-in zoom-in-95">

        {/* Header image */}
        <figure className="relative h-32 sm:h-36 overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/2043823329/photo/internet-network-cybersecurity-concept-data-privacy-protection-from-malicious-attacks-digital.jpg?s=612x612&w=0&k=20&c=EdSpTwVaTVMvZUUHk4d13L1VJsb2PxnPxRPrlmtIxOw="
            alt="Signup banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-3 left-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg tracking-tight">
              Create account
            </h1>
            <p className="text-[11px] sm:text-xs text-white/70">
              Join and start matching
            </p>
          </div>
        </figure>

        {/* Form */}
        <div className="card-body p-5 sm:p-6 gap-3">

          {/* First + Last name row */}
          <div className="flex gap-2">
            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                  First name
                </span>
              </label>
              <input
                className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="First name"
                autoComplete="given-name"
              />
            </div>

            <div className="form-control w-full">
              <label className="label py-1">
                <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                  Last name
                </span>
              </label>
              <input
                className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="Last name"
                autoComplete="family-name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                Email
              </span>
            </label>
            <input
              className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
              value={emailId}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="form-control w-full">
            <label className="label py-1">
              <span className="label-text text-xs font-semibold uppercase tracking-wider text-base-content/60">
                Password
              </span>
            </label>
            <input
              className="input input-bordered w-full input-sm sm:input-md text-sm bg-base-200/60 focus:bg-base-100 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-error py-2 px-3 text-xs rounded-lg">
              <span>{error}</span>
            </div>
          )}

          {/* Login link */}
          <p className="text-xs text-base-content/60 text-center mt-1">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Submit */}
          <button
            type="button"
            onClick={() => {
              console.log("clickd");
              sendDetails();
            }}
            className="btn btn-primary w-full rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 mt-2"
          >
            Sign Up
          </button>

        </div>
      </div>
    </div>
  );
};

export default Signup;