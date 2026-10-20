import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoguOut = async () => {
    try {
      await axios.post("http://localhost:3000/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md border-b border-base-300 shadow-sm px-3 sm:px-5 sticky top-0 z-50">
      {/* Brand */}
      <div className="flex-1">
        <Link
          to="/feed"
          className="btn btn-ghost text-lg sm:text-xl font-bold tracking-tight px-2 hover:bg-primary/10 rounded-xl transition-colors"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            DevTinder
          </span>
          <span>🚀</span>
        </Link>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar ring-2 ring-primary/30 hover:ring-primary/60 transition-all duration-200"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={user.photoUrl}
                  className="object-cover"
                />
              </div>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[60] mt-3 w-56 p-2 shadow-2xl border border-base-300"
            >
              {/* User info header */}
              <li className="menu-title px-2 py-1">
                <span className="text-xs text-base-content/50 truncate">
                  {user.firstName} {user.lastName}
                </span>
              </li>

              <li>
                <Link to="/profile" className="justify-between rounded-lg">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/requests" className="justify-between rounded-lg">
                  Requests
                </Link>
              </li>
              <li>
                <Link to="/connections" className="justify-between rounded-lg">
                  Connections
                </Link>
              </li>
              <li>
                <a className="rounded-lg">Settings</a>
              </li>

              <div className="divider my-1 opacity-60"></div>

              <li>
                <Link
                  onClick={LoguOut}
                  className="rounded-lg text-error hover:bg-error/10"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;