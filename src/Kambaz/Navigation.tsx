import { Link } from "react-router-dom";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <div><a href="https://www.northeastern.edu/">Northeastern</a></div>
      <div><Link to="/Kambaz/Account">Account</Link></div>
      <div><Link to="/Kambaz/Dashboard">Dashboard</Link></div>
      <div><Link to="/Kambaz/Courses">Courses</Link></div>
      <div><Link to="/Kambaz/Calendar">Calendar</Link></div>
      <div><Link to="/Kambaz/Inbox">Inbox</Link></div>
      <div><Link to="/Labs">Labs</Link></div>
    </div>
  );
}