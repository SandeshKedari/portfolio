import { Container } from 'react-bootstrap';
import { profile } from '../data/resume';

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="d-flex justify-content-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} {profile.fname} {profile.lname}</span>
        <span>
          Built with React, TypeScript, Ant Design &amp; Bootstrap ·{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
