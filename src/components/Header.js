import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={PeopleIcon} title="My Network" />
        <HeaderOptions Icon={WorkIcon} title="Job" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar="https://veezaviz.com/site/assets/img/team/Lumona.png" />
        <HeaderOptions
          Icon={ExitToAppIcon}
          title="Sign Out"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
