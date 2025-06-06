import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-flex justify-content-between"
    >
      <Navbar.Brand href="#home" className="fw-bold">
        Hello world!
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-4">
          <Nav.Item>Course</Nav.Item>
          <Nav.Item>Info</Nav.Item>
          <Nav.Item>Testimonial</Nav.Item>
          <Nav.Item>Categories</Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
