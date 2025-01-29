import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="bg-dark w-100 p-2 mb-4 text-white">
        <Navbar.Brand className="text-white" href="/">Product</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/add">Add Product [+]</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
