import { useParams, Link } from "react-router-dom";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export default function Assignments() {
  const { cid } = useParams();
  
  // Define course-specific assignments
  const courseAssignments: { [key: string]: any[] } = {
    "5004": [
      { id: "A1", title: "A1 - Class Design", description: "Design basic classes with proper encapsulation" },
      { id: "A2", title: "A2 - Inheritance", description: "Implement inheritance hierarchies" },
      { id: "A3", title: "A3 - Polymorphism", description: "Use polymorphism and interfaces" },
      { id: "A4", title: "A4 - Design Patterns", description: "Implement common design patterns" },
      { id: "A5", title: "A5 - Unit Testing", description: "Write comprehensive unit tests" },
      { id: "A6", title: "A6 - Final Project", description: "Complete OOP application project" }
    ],
    "5008": [
      { id: "A1", title: "A1 - Arrays & Lists", description: "Implement dynamic arrays and linked lists" },
      { id: "A2", title: "A2 - Stacks & Queues", description: "Build stack and queue data structures" },
      { id: "A3", title: "A3 - Trees", description: "Implement binary trees and BSTs" },
      { id: "A4", title: "A4 - Hash Tables", description: "Create hash table implementations" },
      { id: "A5", title: "A5 - Sorting Algorithms", description: "Compare sorting algorithm performance" },
      { id: "A6", title: "A6 - Graph Algorithms", description: "Implement graph traversal algorithms" }
    ],
    "5610": [
      { id: "A1", title: "A1 - HTML + CSS", description: "Build responsive web pages" },
      { id: "A2", title: "A2 - JavaScript", description: "Interactive web applications" },
      { id: "A3", title: "A3 - React Components", description: "Component-based architecture" },
      { id: "A4", title: "A4 - State Management", description: "Redux and context API" },
      { id: "A5", title: "A5 - Backend APIs", description: "RESTful service development" },
      { id: "A6", title: "A6 - Full Stack App", description: "Complete MERN application" }
    ],
    "4550": [
      { id: "A1", title: "A1 - Web Fundamentals", description: "Basic HTML, CSS, and JavaScript" },
      { id: "A2", title: "A2 - DOM Manipulation", description: "Interactive web page elements" },
      { id: "A3", title: "A3 - Forms & Validation", description: "User input handling and validation" },
      { id: "A4", title: "A4 - AJAX & APIs", description: "Asynchronous web requests" },
      { id: "A5", title: "A5 - Responsive Design", description: "Mobile-first web design" },
      { id: "A6", title: "A6 - Web Portfolio", description: "Personal portfolio website" }
    ],
    "5800": [
      { id: "A1", title: "A1 - Algorithm Analysis", description: "Big-O notation and complexity analysis" },
      { id: "A2", title: "A2 - Divide & Conquer", description: "Recursive algorithm design" },
      { id: "A3", title: "A3 - Dynamic Programming", description: "Optimization problem solving" },
      { id: "A4", title: "A4 - Greedy Algorithms", description: "Local optimization strategies" },
      { id: "A5", title: "A5 - Network Flow", description: "Graph-based optimization" },
      { id: "A6", title: "A6 - NP-Completeness", description: "Computational complexity theory" }
    ],
    "5500": [
      { id: "A1", title: "A1 - Requirements Analysis", description: "Software requirements documentation" },
      { id: "A2", title: "A2 - System Design", description: "Architecture and design patterns" },
      { id: "A3", title: "A3 - Testing Strategy", description: "Test planning and execution" },
      { id: "A4", title: "A4 - Code Review", description: "Peer review and quality assurance" },
      { id: "A5", title: "A5 - Team Project", description: "Collaborative software development" },
      { id: "A6", title: "A6 - Project Presentation", description: "Final project demonstration" }
    ],
    "6650": [
      { id: "A1", title: "A1 - Distributed Protocols", description: "Communication protocols implementation" },
      { id: "A2", title: "A2 - Consensus Algorithms", description: "Raft and Paxos implementations" },
      { id: "A3", title: "A3 - Load Balancing", description: "Distributed load balancing strategies" },
      { id: "A4", title: "A4 - Fault Tolerance", description: "System reliability and recovery" },
      { id: "A5", title: "A5 - Scalability", description: "Horizontal scaling techniques" },
      { id: "A6", title: "A6 - Distributed Database", description: "Sharding and replication" }
    ]
  };

  const assignments = courseAssignments[cid || ""] || courseAssignments["5610"]; // Default to CS5610

  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <InputGroup className="me-2" style={{ width: "300px" }}>
          <InputGroup.Text className="bg-white">
            <BsSearch />
          </InputGroup.Text>
          <FormControl
            placeholder="Search for Assignment"
            id="wd-search-assignment"
            className="border-start-0"
          />
        </InputGroup>
        
        <div>
          <Button variant="secondary" size="lg" className="me-2" id="wd-add-assignment-group">
            <FaPlus className="me-2" />
            Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment">
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </div>
      </div>
      
      <ul className="list-group rounded-0" id="wd-assignment-list">
        <li className="list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-secondary rounded-pill me-2">40% of Total</span>
              <FaPlus className="me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          
          <ul className="list-group rounded-0">
            {assignments.map((assignment, index) => (
              <li key={assignment.id} className="list-group-item wd-assignment-list-item p-3 ps-1 d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3 text-muted" />
                <div className="flex-fill">
                  <Link 
                    to={`/Kambaz/Courses/${cid}/Assignments/${assignment.id}`}
                    className="wd-assignment-link text-decoration-none d-flex align-items-center"
                  >
                    <MdAssignment className="me-2 text-success fs-4" />
                    <div className="flex-fill">
                      <span className="text-dark fw-bold">{assignment.title}</span>
                      <div className="text-muted small">
                        <span className="text-danger">Multiple Modules</span> | 
                        <strong> Not available until</strong> {new Date(2024, 4, 6 + index * 7).toLocaleDateString()} at 12:00am | 
                        <br />
                        <strong>Due</strong> {new Date(2024, 4, 13 + index * 7).toLocaleDateString()} at 11:59pm | 100 pts
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="ms-auto d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2 fs-5" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}