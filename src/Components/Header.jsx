import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Container>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Product</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="/add">Add Product [+]</Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
