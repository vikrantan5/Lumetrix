import { BrowserRouter, Route, Routes } from "react-router";

import Body from "./components/Body";
import Login from "./components/Login";
import Cards from "./components/Cards";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/cards" element={<Cards />}></Route>
              <Route path="/feed" element={<Feed />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/profile/edit" element={<EditProfile />}></Route>
              <Route path="/connections" element={<Connections />}></Route>
              <Route path="/requests" element={<Requests />}></Route>
              <Route path="/signup" element={<Signup/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
