import { useEffect, useRef, useState } from 'react';

/* ── Floating orb background ───────────────── */
const Orb = ({ style }) => (
  <div style={{
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    pointerEvents: 'none',
    ...style,
  }} />
);

/* ── Typewriter hook ────────────────────────── */
const useTypewriter = (words, speed = 80) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1));
      setText(words[index].substring(0, subIndex));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return text;
};

/* ── Stat counter ───────────────────────────── */
const StatCard = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const target = parseInt(number);
    const step = target / 60;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 24);
    return () => clearInterval(timer);
  }, [visible, number]);

  return (
    <div ref={ref} style={{
      textAlign: 'center',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
    }}>
      <div style={{
        fontSize: '2.5rem',
        fontWeight: '800',
        fontFamily: 'Syne, sans-serif',
        background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>{count}+</div>
      <div style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: '500', marginTop: '4px', fontFamily: 'Cairo, sans-serif' }}>
        {label}
      </div>
    </div>
  );
};

/* ── Main Home Component ─────────────────────── */
const Home = () => {
  const roles = ['Frontend Developer', 'UI/UX Designer', 'Tech Instructor', '3D Creator'];
  const roleText = useTypewriter(roles);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToServices = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSocial   = () => document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '0 24px',
    }}>
      {/* Background orbs — parallax */}
      <Orb style={{
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
        top: `${-100 + mousePos.y * 40}px`,
        left: `${-200 + mousePos.x * 80}px`,
        transition: 'top 0.8s ease, left 0.8s ease',
      }} />
      <Orb style={{
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        bottom: `${-150 + mousePos.y * -40}px`,
        right: `${-100 + mousePos.x * -60}px`,
        transition: 'bottom 0.8s ease, right 0.8s ease',
      }} />
      <Orb style={{
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 70%)',
        top: '50%',
        left: '60%',
      }} />

      {/* Decorative grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px',
        textAlign: 'center',
      }}>

        {/* Badge */}
        <div className="animate-fade-up" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(34,211,238,0.08)',
          border: '1px solid rgba(34,211,238,0.2)',
          borderRadius: '50px',
          padding: '6px 16px 6px 8px',
          marginBottom: '32px',
          fontFamily: 'Cairo, sans-serif',
        }}>
          {/* <span style={{
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
            borderRadius: '50px',
            padding: '2px 10px',
            fontSize: '0.7rem',
            fontWeight: '700',
            color: '#000',
            letterSpacing: '0.05em',
          }}>AVAILABLE</span>
          <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>متاحة للمشاريع الآن ✦</span> */}
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-100" style={{
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          fontWeight: '800',
          fontFamily: 'Syne, sans-serif',
          lineHeight: 1,
          marginBottom: '16px',
          letterSpacing: '-0.03em',
        }}>
          <span style={{
            background: 'linear-gradient(160deg, #f8fafc 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Aya</span>{' '}
          <span style={{
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Ayman</span>
        </h1>

        {/* Typewriter role */}
        <div className="animate-fade-up delay-200" style={{
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
        }}>
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            fontWeight: '600',
            color: '#22d3ee',
          }}>{roleText}</span>
          <span style={{
            display: 'inline-block',
            width: '2px',
            height: '1.4em',
            background: '#22d3ee',
            marginLeft: '2px',
            animation: 'blink 0.8s step-end infinite',
          }} />
        </div>

        {/* Description */}
        <p className="animate-fade-up delay-300 arabic" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#94a3b8',
          lineHeight: 1.8,
          maxWidth: '640px',
          margin: '0 auto 40px',
        }}>
 I build exceptional digital experiences where the power of clean code meets the beauty of thoughtful design — crafting interfaces that captivate and convert.


🚀
View My Work

💬.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-400" style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '80px',
        }}>
          <button className="btn-primary" onClick={scrollToServices}>
            <span>🚀</span> شوفي خدماتي
          </button>
          <button className="btn-outline" onClick={scrollToSocial}>
            <span>💬</span> اشتغلي معايا
          </button>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-500" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          padding: '32px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
        }}>
          <StatCard number="50" label="مشروع منجز" delay={0.1} />
          <StatCard number="200" label="طالب تدربوا" delay={0.2} />
          <StatCard number="3" label="سنين خبرة" delay={0.3} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        color: '#475569',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        animation: 'fadeIn 1s ease 1.2s both',
      }}>
        <span>Scroll</span>
        <div style={{
          width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, #475569, transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
};

export default Home;
