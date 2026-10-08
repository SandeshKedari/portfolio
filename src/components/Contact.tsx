import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import { profile } from '../data/resume';

function Contact() {
  return (
    <section id="contact" className="hero" style={{ padding: '80px 0', background: 'linear-gradient(135deg, #12172b 0%, #1b2140 100%)' }}>
      <Container className="content">
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="eyebrow">CONTACT</div>
            <h2 className="section-title" style={{ color: '#f5f6f2', fontSize: '2.2rem', marginBottom: '16px' }}>Open to new roles</h2>
            <p className="hero-tagline" style={{ fontSize: '1.1rem' }}>
              Looking for frontend or full-stack roles where React or Angular is doing the heavy lifting.
              Reach out directly — I reply fast.
            </p>
          </Col>
          <Col lg={5}>
            <div
              className="console"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid rgba(43, 179, 163, 0.3)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2bb3a3';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(43, 179, 163, 0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43, 179, 163, 0.3)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="console-bar">
                <span className="console-dot live" />
                contact.json
              </div>
              <div className="p-4" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#c3c8da' }}>
                <div className="mb-3" style={{ transition: 'all 0.2s ease', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#2bb3a3'} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#c3c8da'}>
                  email: <a href={`mailto:${profile.email}`} style={{ color: '#2bb3a3', textDecoration: 'none' }}>{profile.email}</a>
                </div>
                <div className="mb-4" style={{ transition: 'all 0.2s ease', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#2bb3a3'} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#c3c8da'}>
                  phone: <span style={{ color: '#eef0f6' }}>{profile.phone}</span>
                </div>
                <Button
                  type="primary"
                  block
                  href={`mailto:${profile.email}`}
                  style={{
                    background: 'linear-gradient(135deg, #2bb3a3 0%, #1f9985 100%)',
                    borderColor: '#2bb3a3',
                    fontWeight: 600,
                    height: '44px',
                    fontSize: '0.95rem',
                  }}
                >
                  Send an email
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
