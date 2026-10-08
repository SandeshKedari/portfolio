import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import { profile, stats } from '../data/resume';

function Hero() {
  return (
    <section className="hero" style={{ background: 'linear-gradient(135deg, #12172b 0%, #1b2140 100%)', position: 'relative', overflow: 'hidden' }}>
      <Container className="content">
        <Row className="align-items-center">
          <Col lg={8}>
            <div className="eyebrow">FRONTEND ENGINEER · PUNE, INDIA</div>
            <h1 className="hero-name" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #2bb3a3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {profile.fname} {profile.mname} {profile.lname}
            </h1>
            <div className="hero-role" style={{ fontSize: '1.2rem', fontWeight: 500 }}>{profile.role}</div>
            <p className="hero-tagline" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>{profile.tagline}</p>
            <div className="d-flex gap-3 flex-wrap">
              <Button
                type="primary"
                size="large"
                href={`mailto:${profile.email}`}
                style={{
                  background: 'linear-gradient(135deg, #2bb3a3 0%, #1f9985 100%)',
                  borderColor: '#2bb3a3',
                  fontWeight: 600,
                  height: '44px',
                  fontSize: '0.95rem',
                }}
              >
                Get in touch
              </Button>
              <Button
                size="large"
                href="#projects"
                ghost
                style={{
                  borderColor: '#4b5578',
                  color: '#1239b0',
                  fontWeight: 600,
                  height: '44px',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#2bb3a3';
                  (e.currentTarget as HTMLElement).style.color = '#2bb3a3';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(43, 179, 163, 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#4b5578';
                  (e.currentTarget as HTMLElement).style.color = '#eef0f6';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                View projects
              </Button>
            </div>
          </Col>
        </Row>

        <div className="console mt-5" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid rgba(43, 179, 163, 0.3)', backdropFilter: 'blur(10px)' }}>
          <div className="console-bar">
            <span className="console-dot live" />
            career-status.log — last deployed Jun 2024
          </div>
          <div className="stat-grid">
            {stats.map((s) => (
              <div
                className="stat-cell"
                key={s.label}
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#2bb3a3';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#f5f6f2';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
