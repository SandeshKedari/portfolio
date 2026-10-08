import { Container, Row, Col } from 'react-bootstrap';
import { education } from '../data/resume';

function Education() {
  return (
    <section id="education" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <Container>
        <div className="eyebrow">EDUCATION</div>
        <h2 className="section-title">Background</h2>

        <Row className="g-4 mt-2">
          {education.map((e, idx) => {
            const colors = ['#2bb3a3', '#3b82f6', '#8b5cf6', '#f59e0b'];
            const color = colors[idx % colors.length];
            return (
              <Col md={6} key={e.school}>
                <div
                  className="panel p-4 h-100"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, rgba(43, 179, 163, 0.05) 100%)',
                    border: `2px solid ${color}20`,
                    borderRadius: '14px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                    (e.currentTarget as HTMLElement).style.borderColor = color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 32px ${color}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.borderColor = `${color}20`;
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: color,
                    }}
                  />
                  <div className="project-name" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginLeft: '4px' }}>
                    {e.degree}
                  </div>
                  <div className="project-summary" style={{ marginTop: 8, marginBottom: 12, color: color, fontSize: '0.95rem', fontWeight: 500 }}>
                    {e.school}
                  </div>
                  <div className="d-flex justify-content-between project-stack" style={{ color: '#64748b' }}>
                    <span>{e.period} · {e.location}</span>
                    <span style={{ color, fontWeight: 600 }}>{e.percentage}</span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Education;
