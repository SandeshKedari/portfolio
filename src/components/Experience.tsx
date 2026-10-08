import { Container } from 'react-bootstrap';
import { Timeline, Tag } from 'antd';
import { experience } from '../data/resume';

function Experience() {
  return (
    <section id="experience" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <Container>
        <div className="eyebrow">EXPERIENCE</div>
        <h2 className="section-title">Deploy history</h2>
        <p className="section-sub">3.7 years across product companies and internships, each one shipping something in production.</p>

        <Timeline
          items={experience.map((e) => ({
            color: e.status === 'ACTIVE' ? '#2bb3a3' : '#cbd5e1',
            children: (
              <div
                style={{
                  paddingBottom: 28,
                  background: e.status === 'ACTIVE' ? 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  border: e.status === 'ACTIVE' ? '1.5px solid #2bb3a3' : '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: e.status === 'ACTIVE' ? '0 0 12px rgba(19, 49, 198, 0.4)' : 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(43, 179, 163, 0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div className="d-flex align-items-center gap-2 flex-wrap" style={{ marginBottom: 8 }}>
                  <span className="project-name" style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a' }}>
                    {e.role} · {e.company}
                  </span>
                  <Tag
                    style={{
                      color: e.status === 'ACTIVE' ? '#065f46' : '#64748b',
                      background: e.status === 'ACTIVE' ? '#dcfce7' : '#f1f5f9',
                      borderColor: e.status === 'ACTIVE' ? '#86efac' : '#cbd5e1',
                      border: '1.5px solid',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                    }}
                  >
                    {e.status}
                  </Tag>
                </div>
                <div className="project-stack" style={{ marginBottom: 12, color: '#64748b' }}>
                  {e.period} · {e.location}
                </div>
                <ul className="project-points" style={{ marginBottom: 0 }}>
                  {e.points.map((p, i) => (
                    <li key={i} style={{ color: '#475569', fontSize: '0.9rem' }}>{p}</li>
                  ))}
                </ul>
              </div>
            ),
          }))}
        />
      </Container>
    </section>
  );
}

export default Experience;
