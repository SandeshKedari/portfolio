import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)' }}>
      <Container>
        <Row>
          <Col lg={5}>
            <div className="eyebrow">ABOUT</div>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Systems for people who run things</h2>
          </Col>
          <Col lg={7}>
            <p className="section-sub" style={{ marginBottom: 0, lineHeight: 1.8, fontSize: '1.02rem', color: '#475569' }}>
              Most of what I build sits behind a login screen: portals administrators depend on, dashboards
              that track payroll and attendance, catalogs that keep inventory honest. I care about the parts
              that don't show up in a screenshot — state that stays consistent, data that loads fast, and
              interfaces that don't make the person using them think twice. React and Angular are my daily
              tools; Firebase, Node, and SQL round out the rest of the stack when the frontend needs
              something to talk to.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
