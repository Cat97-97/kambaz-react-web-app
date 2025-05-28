import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div id="wd-kambaz-navigation" style={{ width: "120px" }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      
      <a id="wd-neu-link" 
        href="https://www.northeastern.edu/"
        target="_blank"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.jpg" width="75px" />
      </a>
      <br />
      
      <Link to="/Kambaz/Account"
        className={`list-group-item text-center border-0 ${
          currentPath.includes('/Account') ? 'bg-white text-danger' : 'bg-black text-white'
        }`}>
        <FaRegCircleUser className={`fs-1 ${
          currentPath.includes('/Account') ? 'text-danger' : 'text-white'
        }`} />
        <br />
        Account
      </Link>
      <br />
      
      <Link to="/Kambaz/Dashboard"
        className={`list-group-item text-center border-0 ${
          currentPath.includes('/Dashboard') ? 'bg-white text-danger' : 'bg-black text-white'
        }`}>
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <br />
      
      <Link to="/Kambaz/Dashboard"
        className={`list-group-item text-center border-0 ${
          currentPath.includes('/Courses') ? 'bg-white text-danger' : 'bg-black text-white'
        }`}>
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <br />
      
      <Link to="/Kambaz/Dashboard"
        className="list-group-item text-white bg-black text-center border-0">
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <br />
      
      <Link to="/Kambaz/Dashboard"
        className="list-group-item text-white bg-black text-center border-0">
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <br />
      
      <Link to="/Labs"
        className="list-group-item text-white bg-black text-center border-0">
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}
