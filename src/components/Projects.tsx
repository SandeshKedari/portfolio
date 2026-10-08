import { Container, Row, Col } from 'react-bootstrap';
import { Tag } from 'antd';
import { projects } from '../data/resume';

const statusColor: Record<string, { bg: string; text: string; border: string }> = {
  LIVE: { bg: '#d1fae5', text: '#065f46', border: '#a7f3d0' },
  SHIPPED: { bg: '#fed7aa', text: '#92400e', border: '#fdba74' },
  ARCHIVED: { bg: '#e5e7eb', text: '#374151', border: '#d1d5db' },
};

function Projects() {
  return (
    <section id="projects" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
      <Container>
        <div className="eyebrow">PROJECTS</div>
        <h2 className="section-title">Modules shipped to production</h2>
        <p className="section-sub">Four applications spanning school administration, payroll, retail, and internal tooling.</p>

        <Row className="g-4">
          {projects.map((p, idx) => {
            const c = statusColor[p.status];
            const gradients = [
              'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
              'linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)',
              'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              'linear-gradient(135deg, #ffffff 0%, #fce7f3 100%)',
            ];
            return (
              <Col md={6} key={p.name}>
                <div
                  className="project-card"
                  style={{
                    background: gradients[idx % gradients.length],
                    border: '2px solid transparent',
                    borderRadius: '14px',
                    padding: '24px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.15)';
                    (e.currentTarget as HTMLElement).style.borderColor = c.text;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start" style={{ marginBottom: '12px' }}>
                    <div>
                      <div className="project-name" style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '4px' }}>{p.name}</div>
                      <div className="project-stack" style={{ fontSize: '0.85rem' }}>{p.stack}</div>
                    </div>
                    <Tag
                      style={{
                        background: c.bg,
                        color: c.text,
                        borderColor: c.border,
                        border: `2px solid ${c.border}`,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    >
                      {p.status}
                    </Tag>
                  </div>
                  <p className="project-summary" style={{ margin: '12px 0', color: '#4b5578' }}>{p.summary}</p>
                  <ul className="project-points" style={{ marginBottom: 0 }}>
                    {p.points.map((pt, i) => (
                      <li key={i} style={{ color: '#5b6478', fontSize: '0.9rem' }}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
