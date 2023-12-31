import "./sidebar.css";
// import RssFeedSharpIcon from "@material-ui/icons/RssFeedSharp";
// import ChatSharp from "@material-ui/icons/ChatSharp";
// import PlayCircleFilledSharp from "@material-ui/icons/PlayCircleFilledSharp";
// import GroupSharp from "@material-ui/icons/GroupSharp";
// import BookmarkSharp from "@material-ui/icons/BookmarkSharp";
// import HelpOutlineSharp from "@material-ui/icons/HelpOutlineSharp";
// import WorkOutlineSharp from "@material-ui/icons/WorkOutlineSharp";
// import EventSharp from "@material-ui/icons/EventSharp";
// import SchoolSharp from "@material-ui/icons/SchoolSharp";

import RssFeedSharpIcon from "@mui/icons-material/RssFeed";
import ChatSharp from "@mui/icons-material/Chat";
import PlayCircleFilledSharp from "@mui/icons-material/PlayCircleFilled";
import GroupSharp from "@mui/icons-material/Group";
import BookmarkSharp from "@mui/icons-material/Bookmark";
import HelpOutlineSharp from "@mui/icons-material/HelpOutline";
import WorkOutlineSharp from "@mui/icons-material/WorkOutline";
import EventSharp from "@mui/icons-material/Event";
import SchoolSharp from "@mui/icons-material/School";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedSharpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatSharp className="sidebarIcon" />
            <NavLink to="/message" style={{ textDecoration: "none" , color:"black"}}>
            <span className="sidebarListItemText">Mesages</span>
            </NavLink>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <GroupSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Groupe</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolSharp className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Voir plus</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
