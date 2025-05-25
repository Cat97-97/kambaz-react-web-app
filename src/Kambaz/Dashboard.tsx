import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1: CS5004 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5004/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5004.jpg" width={200} />
            <div>
              <h5>CS5004 Object-Oriented Design</h5>
              <p className="wd-dashboard-course-title">
                Learn OOP principles and design patterns
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        {/* Course 2: CS5008 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5008/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5008.jpg" width={200} />
            <div>
              <h5>CS5008 Data Structures and Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Master fundamental computer science concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        {/* Course 3: CS5610 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5610/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>CS5610 Web Development</h5>
              <p className="wd-dashboard-course-title">
                Build modern web applications with React
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        {/* Course 4: CS4550 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4550/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs4550.jpg" width={200} />
            <div>
              <h5>CS4550 Web Development</h5>
              <p className="wd-dashboard-course-title">
                Undergraduate web development fundamentals
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        {/* Course 5: CS5800 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5800/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5800.jpg" width={200} />
            <div>
              <h5>CS5800 Algorithms</h5>
              <p className="wd-dashboard-course-title">
                Advanced algorithmic techniques and analysis
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        {/* Course 6: CS5500 */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5500/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5500.jpg" width={200} />
            <div>
              <h5>CS5500 Software Engineering</h5>
              <p className="wd-dashboard-course-title">
                Learn software development lifecycle and team practices
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        {/* Course 7: CS6650 (Higher-level class) */}
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6650/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs6650.webp" width={200} />
            <div>
              <h5>CS6650 Distributed Systems</h5>
              <p className="wd-dashboard-course-title">
                Advanced concepts in distributed computing and scalable architecture
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};