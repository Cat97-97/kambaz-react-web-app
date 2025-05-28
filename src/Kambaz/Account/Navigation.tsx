import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { FaSignInAlt, FaUserPlus, FaUser } from "react-icons/fa";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  
  return (
    <div id="wd-account-navigation" className="me-4" style={{ minWidth: "150px" }}>
      <ListGroup className="rounded-0">
        <ListGroup.Item 
          as={Link}
          to="/Kambaz/Account/Signin"
          action
          className={`border-0 ${pathname.includes("Signin") ? "active" : "text-danger"}`}
        >
          <FaSignInAlt className="me-2" />
          Signin
        </ListGroup.Item>
        
        <ListGroup.Item 
          as={Link}
          to="/Kambaz/Account/Signup"
          action
          className={`border-0 ${pathname.includes("Signup") ? "active" : "text-danger"}`}
        >
          <FaUserPlus className="me-2" />
          Signup
        </ListGroup.Item>
        
        <ListGroup.Item 
          as={Link}
          to="/Kambaz/Account/Profile"
          action
          className={`border-0 ${pathname.includes("Profile") ? "active" : "text-danger"}`}
        >
          <FaUser className="me-2" />
          Profile
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}