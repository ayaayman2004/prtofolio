import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home',    label: 'Home',     arabic: 'الرئيسية' },
    { id: 'about',   label: 'About',    arabic: 'عني' },
    { id: 'services',label: 'Services', arabic: 'الخدمات' },
    { id: 'social',  label: 'Connect',  arabic: 'تواصل' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120;
      sections.forEach(sec => {
        if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          setActiveSection(sec.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px 32px' : '22px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled
          ? 'rgba(2,6,23,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Logo */}
        <div onClick={() => scrollTo('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px', fontWeight: '900',
            color: '#000',
            fontFamily: 'Syne, sans-serif',
          }}>A</div>
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: '800',
            fontSize: '1.1rem',
            background: 'linear-gradient(to right, #f8fafc, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Aya Ayman</span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
             className="nav-desktop">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{
              background: activeSection === link.id
                ? 'rgba(34,211,238,0.1)'
                : 'transparent',
              border: activeSection === link.id
                ? '1px solid rgba(34,211,238,0.3)'
                : '1px solid transparent',
              color: activeSection === link.id ? '#22d3ee' : '#94a3b8',
              padding: '8px 18px',
              borderRadius: '50px',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.25s ease',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => {
              if (activeSection !== link.id) {
                e.target.style.color = '#f8fafc';
                e.target.style.background = 'rgba(255,255,255,0.05)';
              }
            }}
            onMouseLeave={e => {
              if (activeSection !== link.id) {
                e.target.style.color = '#94a3b8';
                e.target.style.background = 'transparent';
              }
            }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('social')} style={{
            padding: '9px 22px',
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
            border: 'none',
            borderRadius: '50px',
            color: '#000',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            fontSize: '0.85rem',
            cursor: 'pointer',
            marginLeft: '8px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 24px rgba(34,211,238,0.5)';
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}>
            اشتغلي معايا ✦
          </button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: menuOpen ? (i === 1 ? '0px' : '24px') : '24px',
              height: '2px',
              background: '#22d3ee',
              borderRadius: '2px',
              transformOrigin: 'center',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                : 'scaleX(0)'
                : 'none',
              transition: 'all 0.3s ease',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: 'rgba(2,6,23,0.98)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {navLinks.map((link, i) => (
          <button key={link.id} onClick={() => scrollTo(link.id)} style={{
            background: 'transparent',
            border: 'none',
            color: activeSection === link.id ? '#22d3ee' : '#f8fafc',
            fontFamily: 'Syne, sans-serif',
            fontSize: '2rem',
            fontWeight: '800',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            transition: 'all 0.2s ease',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${i * 0.07}s`,
          }}>
            {link.label}
            <span style={{
              fontFamily: 'Cairo, sans-serif',
              fontSize: '0.875rem',
              color: '#94a3b8',
              fontWeight: '400',
            }}>{link.arabic}</span>
          </button>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
