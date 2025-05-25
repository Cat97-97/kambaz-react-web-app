import { Link, Navigate, Route, Routes } from "react-router-dom";
import Modules from "./Modules";

export default function Courses() {
  return (
    <div id="wd-courses">
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top">
              <ul>
                <li><Link to="/Kambaz/Courses/Home">Home</Link></li>
                <li><Link to="/Kambaz/Courses/Modules">Modules</Link></li>
                <li><Link to="/Kambaz/Courses/Assignments">Assignments</Link></li>
              </ul>
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<h3>Home</h3>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<h3>Assignments</h3>} />
                <Route path="Assignments/:aid" element={<h3>Assignment Editor</h3>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
