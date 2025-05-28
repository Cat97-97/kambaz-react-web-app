import { useParams, Link } from "react-router-dom";
import { Form, Button, Row, Col, Badge } from "react-bootstrap";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const [assignedTo, setAssignedTo] = useState(["Everyone"]);
  const [showAssignDropdown, setShowAssignDropdown] = useState(false);
  
  // Sample students from People table
  const availableAssignees = [
    "Everyone",
    "Tony Stark",
    "Bruce Wayne", 
    "Steve Rogers",
    "Natasha Romanoff"
  ];
  
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

  const handleAddAssignee = (assignee: string) => {
    if (assignee === "Everyone") {
      setAssignedTo(["Everyone"]);
    } else {
      const newAssignees = assignedTo.filter(a => a !== "Everyone");
      if (!newAssignees.includes(assignee)) {
        newAssignees.push(assignee);
      }
      setAssignedTo(newAssignees);
    }
    setShowAssignDropdown(false);
  };

  const handleRemoveAssignee = (assignee: string) => {
    const newAssignees = assignedTo.filter(a => a !== assignee);
    if (newAssignees.length === 0) {
      setAssignedTo(["Everyone"]);
    } else {
      setAssignedTo(newAssignees);
    }
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control 
            type="text" 
            defaultValue={assignment.name}
            size="lg"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="wd-description">
          <Form.Control 
            as="textarea" 
            rows={8} 
            defaultValue={assignment.description}
            className="form-control-lg"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            <label htmlFor="wd-points">Points</label>
          </Form.Label>
          <Col sm={9}>
            <Form.Control 
              id="wd-points" 
              type="number"
              defaultValue={100}
              style={{ width: "150px" }}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            <label htmlFor="wd-group">Assignment Group</label>
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-group" style={{ width: "250px" }}>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-display-grade-as" style={{ width: "250px" }}>
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter">Letter Grade</option>
              <option value="GPA">GPA Scale</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </Form.Label>
          <Col sm={9}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" className="mb-3" style={{ width: "250px" }}>
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
                <option value="External Tool">External Tool</option>
              </Form.Select>

              <div>
                <div className="fw-bold mb-2">Online Entry Options</div>
                <Form.Check 
                  type="checkbox"
                  id="wd-text-entry"
                  label="Text Entry"
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox"
                  id="wd-website-url"
                  label="Website URL"
                  defaultChecked
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox"
                  id="wd-media-recordings"
                  label="Media Recordings"
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox"
                  id="wd-student-annotation"
                  label="Student Annotation"
                  className="mb-2"
                />
                <Form.Check 
                  type="checkbox"
                  id="wd-file-upload"
                  label="File Uploads"
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end fw-bold">
            Assign
          </Form.Label>
          <Col sm={9}>
            <div className="border rounded p-3">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-assign-to" className="fw-bold">Assign to</Form.Label>
                
                <div className="border rounded p-2 mb-3" style={{ minHeight: "40px", backgroundColor: "#f8f9fa" }}>
                  {assignedTo.map((person, index) => (
                    <Badge 
                      key={index} 
                      bg="light" 
                      text="dark" 
                      className="me-2 mb-1 p-2 border"
                      style={{ fontSize: "14px" }}
                    >
                      {person}
                      <span 
                        className="ms-2" 
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRemoveAssignee(person)}
                      >
                        ×
                      </span>
                    </Badge>
                  ))}
                </div>

                <div className="position-relative">
                  <Form.Control 
                    placeholder="Start typing to search students..."
                    onFocus={() => setShowAssignDropdown(true)}
                    onBlur={() => setTimeout(() => setShowAssignDropdown(false), 200)}
                  />
                  {showAssignDropdown && (
                    <div className="position-absolute w-100 border rounded shadow-sm bg-white" style={{ top: "100%", zIndex: 1000 }}>
                      {availableAssignees.map((assignee, index) => (
                        <div 
                          key={index}
                          className="p-2 border-bottom hover-bg-light"
                          style={{ cursor: "pointer" }}
                          onMouseDown={() => handleAddAssignee(assignee)}
                        >
                          {assignee}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-muted small mt-3">
                  The assignment is available online
                </div>
                <Form.Text className="text-muted">
                  Submit a link to the landing page of your Web application running on Netlify.
                </Form.Text>
                <br />
                <Form.Text className="text-muted">
                  The landing page should include the following:
                </Form.Text>
                <ul className="text-muted small mt-2">
                  <li>Your full name and section</li>
                  <li>Links to each of the lab assignments</li>
                  <li>Link to the Kambaz application</li>
                  <li>Links to all relevant source code repositories</li>
                </ul>
                <Form.Text className="text-muted">
                  The Kambaz application should include a link to navigate back to the landing page.
                </Form.Text>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="wd-due-date" className="fw-bold">Due</Form.Label>
                    <Form.Control 
                      type="datetime-local"
                      id="wd-due-date"
                      defaultValue="2024-05-13T23:59"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor="wd-available-from" className="fw-bold">Available from</Form.Label>
                    <Form.Control 
                      type="datetime-local"
                      id="wd-available-from"
                      defaultValue="2024-05-06T00:00"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor="wd-available-until" className="fw-bold">Until</Form.Label>
                    <Form.Control 
                      type="datetime-local"
                      id="wd-available-until"
                      defaultValue="2024-05-20T23:59"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />
        
        <div className="d-flex justify-content-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}