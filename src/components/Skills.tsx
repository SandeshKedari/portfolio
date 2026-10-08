import { Container, Row, Col } from 'react-bootstrap';
import { Tag } from 'antd';
import { skills } from '../data/resume';

function Skills() {
  const colors = {
    frontend: '#2bb3a3',
    backend: '#3b82f6',
    database: '#8b5cf6',
    other: '#f59e0b',
  };

  const getColorByIndex = (index: number) => {
    const colorList = Object.values(colors);
    return colorList[index % colorList.length];
  };

  return (
    <section id="skills" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f0f4f8 100%)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <Container>
        <div className="eyebrow">STACK</div>
        <h2 className="section-title">Tools in daily use</h2>
        <p className="section-sub">Grouped the way they actually get used — languages, the frameworks built on top, and the platforms that ship the result.</p>

        <Row className="g-4">
          {Object.entries(skills).map(([group, items], groupIndex) => {
            const accentColor = Object.values(colors)[groupIndex % Object.keys(colors).length];
            return (
              <Col md={4} key={group}>
                <div
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)',
                    border: `2px solid ${accentColor}20`,
                    borderRadius: '14px',
                    padding: '24px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 32px ${accentColor}20`;
                    (e.currentTarget as HTMLElement).style.borderColor = accentColor;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                    (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}20`;
                  }}
                >
                  <div
                    className="skill-group-title"
                    style={{
                      color: accentColor,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: accentColor,
                        boxShadow: `0 0 12px ${accentColor}80`,
                      }}
                    />
                    {group}
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {items.map((s, index) => (
                      <Tag
                        key={s}
                        style={{
                          padding: '6px 14px',
                          background: `${accentColor}10`,
                          color: accentColor,
                          border: `1.5px solid ${accentColor}40`,
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.80rem',
                          borderRadius: '6px',
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = accentColor;
                          (e.currentTarget as HTMLElement).style.color = '#ffffff';
                          (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px ${accentColor}40`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = `${accentColor}10`;
                          (e.currentTarget as HTMLElement).style.color = accentColor;
                          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        }}
                      >
                        {s}
                      </Tag>
                    ))}
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

export default Skills;
