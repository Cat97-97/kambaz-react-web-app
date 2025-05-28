import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", paddingTop: "60px" }}>
      <div className="card p-4" style={{ width: "400px", maxWidth: "90%" }}>
        <h1 className="mb-4 text-center">Profile</h1>
        <Form>
          <Form.Control 
            defaultValue="alice" 
            placeholder="username" 
            className="wd-username mb-3 form-control-lg"
          />
          
          <Form.Control 
            defaultValue="123" 
            placeholder="password" 
            type="password"
            className="wd-password mb-3 form-control-lg" 
          />
          
          <Form.Control 
            defaultValue="Alice" 
            placeholder="First Name" 
            id="wd-firstname" 
            className="mb-3 form-control-lg"
          />
          
          <Form.Control 
            defaultValue="Wonderland" 
            placeholder="Last Name" 
            id="wd-lastname" 
            className="mb-3 form-control-lg"
          />
          
          <Form.Control 
            defaultValue="2000-01-01" 
            type="date" 
            id="wd-dob" 
            className="mb-3 form-control-lg"
          />
          
          <Form.Control 
            defaultValue="alice@wonderland.com" 
            type="email" 
            id="wd-email" 
            className="mb-3 form-control-lg"
          />
          
          <Form.Select 
            defaultValue="FACULTY" 
            id="wd-role"
            className="mb-4 form-select-lg"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Select>
          
          <Link 
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 btn-lg"
          >
            Signout
          </Link>
        </Form>
      </div>
    </div>
  );
}