import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <BsNavbar expand="md" className="site-nav" variant="light">
      <Container className="py-2">
        <BsNavbar.Brand href="#" className="brand">
          sandesh<span>.dev</span>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="gap-md-4 gap-2">
            {links.map((l) => (
              <Nav.Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
