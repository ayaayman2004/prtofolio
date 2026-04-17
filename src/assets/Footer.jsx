import { useState } from 'react';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  const quickLinks = [
    { label: 'Home',      id: 'home' },
    { label: 'About',     id: 'about' },
    { label: 'Services',  id: 'services' },
    { label: 'Contact',   id: 'social' },
  ];

  const skills = ['React', 'Next.js', 'Three.js', 'Figma', 'UI/UX', 'Animation'];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Top divider with glow */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(34,211,238,0.3), transparent)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '40px',
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.15) 0%, transparent 70%)',
        }} />
      </div>

      {/* Background */}
      <div style={{
        background: 'rgba(5,10,30,0.6)',
        position: 'relative',
      }}>
        {/* Decorative orb */}
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Main content */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 24px 32px',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}>
            {/* Brand column */}
            <div style={{ gridColumn: 'span 1' }}>
              {/* Logo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{
                  width: '40px', height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '900',
                  fontSize: '18px',
                  color: '#000',
                }}>A</div>
                <div>
                  <div style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '800',
                    fontSize: '1rem',
                    color: '#f8fafc',
                  }}>Aya Ayman</div>
                  <div style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontSize: '0.72rem',
                    color: '#475569',
                  }}>مطورة واجهات · مدربة تقنية</div>
                </div>
              </div>

              <p className="arabic" style={{
                color: '#475569',
                fontSize: '0.88rem',
                lineHeight: 1.8,
                maxWidth: '260px',
                marginBottom: '24px',
              }}>
                بحول أفكارك لواقع رقمي احترافي بجمال التصميم وقوة الكود.
              </p>

              {/* Status */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.15)',
                borderRadius: '50px',
                padding: '6px 14px',
              }}>
                <div style={{
                  width: '6px', height: '6px',
                  borderRadius: '50%',
                  background: '#22d3ee',
                  boxShadow: '0 0 8px #22d3ee',
                  animation: 'pulse-ring 2s ease-out infinite',
                }} />
                <span className="arabic" style={{
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                  fontFamily: 'Cairo, sans-serif',
                }}>متاحة للمشاريع الجديدة</span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                fontSize: '0.85rem',
                color: '#f8fafc',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {quickLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#475569',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: '0',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
                    onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                  >
                    <span style={{ color: '#1e293b', fontSize: '0.7rem' }}>→</span>
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills/Stack */}
            <div>
              <h4 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                fontSize: '0.85rem',
                color: '#f8fafc',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>Tech Stack</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {skills.map(s => (
                  <span key={s} style={{
                    padding: '4px 12px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    color: '#475569',
                    fontFamily: 'DM Sans, sans-serif',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = 'rgba(34,211,238,0.3)';
                    e.target.style.color = '#22d3ee';
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.target.style.color = '#475569';
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h4 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                fontSize: '0.85rem',
                color: '#f8fafc',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { icon: '📧', text: 'aya@example.com', href: 'mailto:aya@example.com' },
                  { icon: '💬', text: 'WhatsApp', href: 'https://wa.me' },
                  { icon: '🌍', text: 'Egypt, Remote Worldwide', href: null },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} style={{
                        color: '#475569',
                        fontSize: '0.85rem',
                        fontFamily: 'DM Sans, sans-serif',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={e => e.target.style.color = '#22d3ee'}
                      onMouseLeave={e => e.target.style.color = '#475569'}>
                        {item.text}
                      </a>
                    ) : (
                      <span style={{ color: '#475569', fontSize: '0.85rem', fontFamily: 'DM Sans, sans-serif' }}>
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <div style={{
              color: '#334155',
              fontSize: '0.8rem',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              © {year} Aya Ayman. <span className="arabic" style={{ fontFamily: 'Cairo, sans-serif' }}>كل الحقوق محفوظة</span>
            </div>

            {/* Scroll to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(34,211,238,0.06)',
                border: '1px solid rgba(34,211,238,0.15)',
                borderRadius: '50px',
                padding: '6px 14px',
                color: '#22d3ee',
                fontSize: '0.78rem',
                fontFamily: 'DM Sans, sans-serif',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(34,211,238,0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(34,211,238,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
