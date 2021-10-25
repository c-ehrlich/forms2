import React from "react";
import "../App.css";
import authSlice from "../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../store";
import { userInfo } from "os";

const Navbar = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(authSlice.actions.setLogout());
    history.push("/");
  };

  return (
    <div className="App-navbar">
      <div>Item 1</div>
      <div>Item 2</div>
      {auth.account ? (
        <div>
          {/* <div>Logged in as {userInfo.data?.username}</div> */}
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => history.push("/login")}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
