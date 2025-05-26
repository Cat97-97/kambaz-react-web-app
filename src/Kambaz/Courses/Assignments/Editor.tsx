import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  
  // Course-specific assignment details
  const courseAssignments: { [key: string]: { [key: string]: any } } = {
    "5004": {
      "A1": { name: "A1 - Class Design", description: "Design basic classes with proper encapsulation principles. Create UML diagrams and implement clean, maintainable code following OOP best practices." },
      "A2": { name: "A2 - Inheritance", description: "Implement inheritance hierarchies using abstract classes and interfaces. Demonstrate proper use of super constructors and method overriding." },
      "A3": { name: "A3 - Polymorphism", description: "Use polymorphism and interfaces to create flexible, extensible code. Implement strategy and factory design patterns." }
    },
    "5008": {
      "A1": { name: "A1 - Arrays & Lists", description: "Implement dynamic arrays and linked lists from scratch. Compare performance characteristics and analyze time complexity." },
      "A2": { name: "A2 - Stacks & Queues", description: "Build stack and queue data structures. Implement applications like expression evaluation and BFS/DFS traversals." },
      "A3": { name: "A3 - Trees", description: "Implement binary trees and BSTs. Include tree traversal algorithms and balancing operations." }
    },
    "5610": {
      "A1": { name: "A1 - HTML + CSS", description: "Build responsive web pages using modern HTML5 and CSS3. Implement flexbox and grid layouts with mobile-first design." },
      "A2": { name: "A2 - JavaScript", description: "Create interactive web applications using vanilla JavaScript. Implement DOM manipulation and event handling." },
      "A3": { name: "A3 - React Components", description: "Build component-based applications using React. Implement props, state, and lifecycle methods." }
    },
    "4550": {
      "A1": { name: "A1 - Web Fundamentals", description: "Learn basic HTML, CSS, and JavaScript. Create a simple interactive webpage with form validation." },
      "A2": { name: "A2 - DOM Manipulation", description: "Master DOM manipulation techniques. Create dynamic content and handle user interactions." },
      "A3": { name: "A3 - Forms & Validation", description: "Implement comprehensive form handling with client-side validation and error messaging." }
    },
    "5800": {
      "A1": { name: "A1 - Algorithm Analysis", description: "Analyze algorithm complexity using Big-O notation. Compare different approaches for solving computational problems." },
      "A2": { name: "A2 - Divide & Conquer", description: "Implement recursive algorithms using divide and conquer strategy. Solve problems like merge sort and quick sort." },
      "A3": { name: "A3 - Dynamic Programming", description: "Solve optimization problems using dynamic programming techniques. Implement memoization and tabulation approaches." }
    },
    "5500": {
      "A1": { name: "A1 - Requirements Analysis", description: "Create comprehensive software requirements documentation. Practice stakeholder interviews and use case analysis." },
      "A2": { name: "A2 - System Design", description: "Design software architecture using established patterns. Create UML diagrams and technical specifications." },
      "A3": { name: "A3 - Testing Strategy", description: "Develop comprehensive testing strategies including unit, integration, and system testing approaches." }
    },
    "6650": {
      "A1": { name: "A1 - Distributed Protocols", description: "Implement communication protocols for distributed systems. Handle network partitions and message ordering." },
      "A2": { name: "A2 - Consensus Algorithms", description: "Implement Raft and Paxos consensus algorithms. Handle leader election and log replication." },
      "A3": { name: "A3 - Load Balancing", description: "Design and implement distributed load balancing strategies. Handle fault tolerance and scalability." }
    }
  };

  const defaultAssignment = { name: "Assignment", description: "Complete the assignment as specified in the course materials." };
  const assignment = courseAssignments[cid || ""]?.[aid || ""] || defaultAssignment;

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value={assignment.name} /><br /><br />
      
      <textarea id="wd-description" cols={50} rows={8} defaultValue={assignment.description} />
      <br />
      
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter">Letter Grade</option>
              <option value="GPA">GPA Scale</option>
            </select>
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="Paper">Paper</option>
              <option value="External Tool">External Tool</option>
            </select>
          </td>
        </tr>
        
        <tr>
          <td></td>
          <td>
            <label>Online Entry Options</label><br/>
            
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br/>
            
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label><br/>
            
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
            
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
            
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
          </td>
        </tr>
        
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
          </td>
        </tr>
      </table>
      
      <hr />
      
      <button>Cancel</button> <button>Save</button>
    </div>
  );
}