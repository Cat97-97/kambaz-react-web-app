import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", paddingTop: "60px" }}>
      <div className="card p-4" style={{ width: "400px", maxWidth: "90%" }}>
        <h1 className="mb-4 text-center">Sign in</h1>
        <Form>
          <Form.Control 
            id="wd-username"
            placeholder="username" 
            className="mb-3 form-control-lg"
          />
          
          <Form.Control 
            id="wd-password"
            placeholder="password" 
            type="password" 
            className="mb-3 form-control-lg"
          />
          
          <Link 
            id="wd-signin-btn" 
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 btn-lg mb-3">
            Sign in
          </Link>
          
          <div className="text-center">
            <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
              Sign up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}