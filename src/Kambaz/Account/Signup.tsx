import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", paddingTop: "60px" }}>
      <div className="card p-4" style={{ width: "400px", maxWidth: "90%" }}>
        <h1 className="mb-4 text-center">Signup</h1>
        <Form>
          <Form.Control 
            placeholder="username" 
            className="wd-username mb-3 form-control-lg" 
          />
          
          <Form.Control 
            placeholder="password" 
            type="password" 
            className="wd-password mb-3 form-control-lg" 
          />
          
          <Form.Control 
            placeholder="verify password"
            type="password" 
            className="wd-password-verify mb-3 form-control-lg" 
          />
          
          <Link 
            to="/Kambaz/Account/Profile" 
            className="btn btn-primary w-100 btn-lg mb-3"
          > 
            Signup 
          </Link>
          
          <div className="text-center">
            <Link to="/Kambaz/Account/Signin">Sign in</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}