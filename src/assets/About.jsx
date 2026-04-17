import { useEffect, useRef, useState } from 'react';

const useVisible = (threshold = 0.15) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const SkillBar = ({ skill, level, color, delay, parentVisible }) => (
  <div style={{ marginBottom: '18px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: '#cbd5e1' }}>{skill}</span>
      <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', fontWeight: '700', color }}>{level}%</span>
    </div>
    <div style={{
      height: '4px',
      borderRadius: '2px',
      background: 'rgba(255,255,255,0.06)',
      overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        borderRadius: '2px',
        background: `linear-gradient(to right, ${color}, ${color}99)`,
        width: parentVisible ? `${level}%` : '0%',
        transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
        boxShadow: `0 0 10px ${color}66`,
      }} />
    </div>
  </div>
);

const skills = [
  { skill: 'React & Next.js',     level: 92, color: '#22d3ee', delay: 0.1 },
  { skill: 'UI/UX Design',        level: 88, color: '#3b82f6', delay: 0.2 },
  { skill: '3D / Three.js',       level: 78, color: '#818cf8', delay: 0.3 },
  { skill: 'Motion & Animation',  level: 85, color: '#22d3ee', delay: 0.4 },
  { skill: 'Technical Teaching',  level: 95, color: '#3b82f6', delay: 0.5 },
];

const timeline = [
  { year: '2022', title: 'أول مشروع احترافي', desc: 'نشأة الشغف بتصميم الواجهات وتطويرها' },
  { year: '2023', title: 'مدربة تقنية', desc: 'بدأت التدريب على React وUI/UX لأكتر من ١٠٠ طالب' },
  { year: '2024', title: 'Freelancer منتقل', desc: 'خطوات كبيرة في المستقل مع عملاء دوليين ومحليين' },
  { year: '2025', title: 'Building the Future', desc: 'مشاريع 3D واجهات تفاعلية وتعليم رقمي' },
];

const About = () => {
  const [ref, visible] = useVisible(0.1);

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG decoration */}
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label">About Me</div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            fontFamily: 'Syne, sans-serif',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #f8fafc, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>من أنا </span>
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>؟</span>
          </h2>
        </div>

        {/* Two columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'start',
          marginBottom: '80px',
        }}>
          {/* Left — Bio + Avatar */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1)',
          }}>
            {/* Avatar placeholder */}
            <div style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              marginBottom: '32px',
            }}>
              {/* Rotating ring */}
              <div style={{
                position: 'absolute', inset: '-12px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(34,211,238,0.3)',
                animation: 'spin-slow 25s linear infinite',
              }} />
              {/* Static ring */}
              <div style={{
                position: 'absolute', inset: '-4px',
                borderRadius: '50%',
                border: '1px solid rgba(34,211,238,0.15)',
              }} />
              {/* Avatar circle */}
              <div style={{
                width: '200px', height: '200px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(59,130,246,0.15))',
                border: '1px solid rgba(34,211,238,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '5rem',
              }}>
                👩‍💻
              </div>
              {/* Pulse ring */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: '50%',
                border: '2px solid rgba(34,211,238,0.4)',
                animation: 'pulse-ring 2.5s ease-out infinite',
              }} />
              {/* Status badge */}
              <div style={{
                position: 'absolute', bottom: '8px', right: '-8px',
                background: 'rgba(2,6,23,0.9)',
                border: '1px solid rgba(34,211,238,0.3)',
                borderRadius: '50px',
                padding: '4px 12px',
                display: 'flex', alignItems: 'center', gap: '6px',
                fontSize: '0.75rem',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#22d3ee',
                  boxShadow: '0 0 8px #22d3ee',
                }} />
                <span style={{ color: '#94a3b8', fontFamily: 'DM Sans, sans-serif' }}>Open to work</span>
              </div>
            </div>

            {/* Bio */}
            <p className="arabic" style={{
              color: '#94a3b8',
              lineHeight: 1.9,
              fontSize: '1.05rem',
              marginBottom: '20px',
            }}>
              أنا آية أيمن، مطورة واجهات أمامية ومدربة تقنية بحب الكود زي ما بحب التصميم.
              بشتغل على React وNext.js وعندي شغف بتجارب المستخدم الثلاثية الأبعاد.
            </p>
            <p className="arabic" style={{
              color: '#64748b',
              lineHeight: 1.9,
              fontSize: '0.95rem',
            }}>
              هدفي إني أخلي كل مشروع بيتسلم مني يبقى تحفة — مش بس موقع، ده تجربة كاملة بتعيشها.
            </p>
          </div>

          {/* Right — Skills */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.1s',
          }}>
            <h3 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '1.2rem',
              fontWeight: '700',
              color: '#f8fafc',
              marginBottom: '28px',
            }}>Skills & Expertise</h3>
            {skills.map(s => (
              <SkillBar key={s.skill} {...s} parentVisible={visible} />
            ))}

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}>
              {['React', 'Next.js', 'Three.js', 'Figma', 'Tailwind', 'Node.js', 'GSAP', 'Blender'].map(tag => (
                <span key={tag} style={{
                  padding: '4px 14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '50px',
                  fontSize: '0.78rem',
                  color: '#64748b',
                  fontFamily: 'DM Sans, sans-serif',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.target.style.borderColor = 'rgba(34,211,238,0.4)';
                  e.target.style.color = '#22d3ee';
                }}
                onMouseLeave={e => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.target.style.color = '#64748b';
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.3s',
        }}>
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#f8fafc',
            marginBottom: '40px',
            textAlign: 'center',
          }}>My Journey</h3>
          <div style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0',
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '0', right: '0',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(34,211,238,0.3), transparent)',
            }} />

            {timeline.map((item, i) => (
              <div key={i} style={{ padding: '0 20px', position: 'relative', textAlign: 'center' }}>
                {/* Dot */}
                <div style={{
                  width: '12px', height: '12px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                  margin: '0 auto 20px',
                  boxShadow: '0 0 16px rgba(34,211,238,0.5)',
                  position: 'relative', zIndex: 1,
                }} />
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#22d3ee',
                  letterSpacing: '0.1em',
                  marginBottom: '6px',
                }}>{item.year}</div>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  color: '#f8fafc',
                  marginBottom: '6px',
                }}>{item.title}</div>
                <div className="arabic" style={{
                  color: '#64748b',
                  fontSize: '0.8rem',
                  lineHeight: 1.6,
                }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
