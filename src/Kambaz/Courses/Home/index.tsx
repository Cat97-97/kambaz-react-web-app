import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div>
      {/* Add buttons at the top */}
      <div style={{ marginBottom: "20px" }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button>+ Module</button>
      </div>
      
      <table id="wd-home">
        <tr>
          <td valign="top">
            <Modules />
          </td>
          <td valign="top">
            <CourseStatus />
          </td>
        </tr>
      </table>
    </div>
  );
}