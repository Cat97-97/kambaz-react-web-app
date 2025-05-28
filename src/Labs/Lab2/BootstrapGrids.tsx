import { Row, Col } from "react-bootstrap";

export default function BootstrapGrids() {
  return (
    <>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <Row className="mb-2">
          <Col className="bg-danger text-white p-3">
            <h3>Left half</h3>
          </Col>
          <Col className="bg-primary text-white p-3">
            <h3>Right half</h3>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={4} className="bg-warning p-3">
            <h3>One third</h3>
          </Col>
          <Col xs={8} className="bg-success text-white p-3">
            <h3>Two thirds</h3>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={2} className="bg-black text-white p-3">
            <h3>Sidebar</h3>
          </Col>
          <Col xs={8} className="bg-secondary text-white p-3">
            <h3>Main content</h3>
          </Col>
          <Col xs={2} className="bg-info p-3">
            <h3>Sidebar</h3>
          </Col>
        </Row>
      </div>

      <div id="wd-bs-responsive-grids">
        <h2>Responsive grid system</h2>
        <Row className="mb-4">
          <Col xs={12} md={6} xl={3} className="bg-warning p-3">
            <h3>Column A</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-primary text-white p-3">
            <h3>Column B</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-danger text-white p-3">
            <h3>Column C</h3>
          </Col>
          <Col xs={12} md={6} xl={3} className="bg-success text-white p-3">
            <h3>Column D</h3>
          </Col>
        </Row>
      </div>

      <div id="wd-bs-responsive-dramatic">
        <h2>Responsive grid system</h2>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-warning p-2 border">
            <h4 className="text-center">1</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-primary text-white p-2 border">
            <h4 className="text-center">2</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-danger text-white p-2 border">
            <h4 className="text-center">3</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-success text-white p-2 border">
            <h4 className="text-center">4</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-warning p-2 border">
            <h4 className="text-center">5</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-primary text-white p-2 border">
            <h4 className="text-center">6</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-danger text-white p-2 border">
            <h4 className="text-center">7</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-success text-white p-2 border">
            <h4 className="text-center">8</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-warning p-2 border">
            <h4 className="text-center">9</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-primary text-white p-2 border">
            <h4 className="text-center">10</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-danger text-white p-2 border">
            <h4 className="text-center">11</h4>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} className="bg-success text-white p-2 border">
            <h4 className="text-center">12</h4>
          </Col>
        </Row>
      </div>
    </>
  );
}