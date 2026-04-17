import { useEffect, useRef, useState } from 'react';

const useVisible = (threshold = 0.1) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

/* ── Social platforms data ───────────────────── */
const socials = [
  {
    name: 'Upwork',
    handle: 'Aya Ayman',
    desc: 'الملف الاحترافي على أكبر منصة عمل حر — شوفي تقييماتي ومشاريعي',
    icon: '💼',
    color: '#14a800',
    bg: 'rgba(20,168,0,0.08)',
    border: 'rgba(20,168,0,0.2)',
    link: 'https://upwork.com',
    badge: 'Top Rated',
  },
  {
    name: 'Mostaql',
    handle: 'آية أيمن',
    desc: 'مستقل — بقدر أشتغل معاك بالعربي على مشاريعك بكل سهولة',
    icon: '🌙',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    link: 'https://mostaql.com',
    badge: 'محترف',
  },
  {
    name: 'LinkedIn',
    handle: 'aya-ayman-dev',
    desc: 'تابعيني على لينكد إن للتحديثات التقنية والمقالات المتخصصة',
    icon: '🔗',
    color: '#0077b5',
    bg: 'rgba(0,119,181,0.08)',
    border: 'rgba(0,119,181,0.2)',
    link: 'https://linkedin.com',
  },
  {
    name: 'GitHub',
    handle: 'aya-ayman',
    desc: 'الكود مش بس بيتكتب — ده بيتشارك. شوفي مشاريعي الـ Open Source',
    icon: '🐙',
    color: '#f0f6fc',
    bg: 'rgba(240,246,252,0.05)',
    border: 'rgba(240,246,252,0.1)',
    link: 'https://github.com',
  },
  {
    name: 'YouTube',
    handle: '@AyaAyman',
    desc: 'فيديوهات تعليمية مجانية في React وUI/UX — اشتركي وما تفوتيش حاجة',
    icon: '▶',
    color: '#ff0000',
    bg: 'rgba(255,0,0,0.08)',
    border: 'rgba(255,0,0,0.2)',
    link: 'https://youtube.com',
    badge: 'New Videos',
  },
  {
    name: 'WhatsApp',
    handle: '+20 XXX XXX XXXX',
    desc: 'للتواصل الفوري — بجاوب في أقصر وقت ممكن',
    icon: '💬',
    color: '#25d366',
    bg: 'rgba(37,211,102,0.08)',
    border: 'rgba(37,211,102,0.2)',
    link: 'https://wa.me',
    badge: 'الأسرع',
  },
];

const SocialCard = ({ social, index, parentVisible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '18px',
        padding: '28px',
        background: hovered ? social.bg : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? social.border : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '20px',
        textDecoration: 'none',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: parentVisible
          ? hovered ? 'translateY(-4px) scale(1.01)' : 'translateY(0)'
          : 'translateY(30px)',
        opacity: parentVisible ? 1 : 0,
        transitionDelay: `${index * 0.07}s`,
        boxShadow: hovered ? `0 16px 48px ${social.color}18` : 'none',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Icon */}
      <div style={{
        width: '50px', height: '50px', flexShrink: 0,
        borderRadius: '14px',
        background: `${social.color}18`,
        border: `1px solid ${social.color}33`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
      }}>
        {social.icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: '800',
            fontSize: '1rem',
            color: hovered ? social.color : '#f8fafc',
            transition: 'color 0.2s ease',
          }}>{social.name}</span>
          {social.badge && (
            <span style={{
              background: `${social.color}22`,
              border: `1px solid ${social.color}44`,
              color: social.color,
              fontSize: '0.65rem',
              fontWeight: '700',
              fontFamily: 'Syne, sans-serif',
              padding: '1px 8px',
              borderRadius: '50px',
              letterSpacing: '0.05em',
            }}>{social.badge}</span>
          )}
        </div>
        <div style={{
          color: '#475569',
          fontSize: '0.78rem',
          fontFamily: 'DM Sans, sans-serif',
          marginBottom: '8px',
        }}>{social.handle}</div>
        <p className="arabic" style={{
          color: '#64748b',
          fontSize: '0.84rem',
          lineHeight: 1.7,
        }}>{social.desc}</p>
      </div>

      {/* Arrow */}
      <div style={{
        color: social.color,
        fontSize: '1.1rem',
        opacity: hovered ? 1 : 0.3,
        transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
        transition: 'all 0.2s ease',
        flexShrink: 0,
        alignSelf: 'center',
      }}>↗</div>

      {/* Bottom glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(to right, transparent, ${social.color}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />
    </a>
  );
};

/* ── Contact Form ────────────────────────────── */
const ContactForm = ({ visible }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    color: '#f8fafc',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <div style={{
      padding: '36px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '24px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(40px)',
      transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.2s',
    }}>
      <h3 style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: '800',
        fontSize: '1.3rem',
        color: '#f8fafc',
        marginBottom: '8px',
      }}>Send a Message</h3>
      <p className="arabic" style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '28px' }}>
        ابعتلي الفكرة وهرد عليك في أقل من ٢٤ ساعة ✦
      </p>

      {sent ? (
        <div style={{
          textAlign: 'center',
          padding: '48px 24px',
          color: '#22d3ee',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
          <div className="arabic" style={{ fontFamily: 'Cairo, sans-serif', fontSize: '1.1rem', fontWeight: '700' }}>
            تم إرسال رسالتك! 🎉
          </div>
          <div className="arabic" style={{ color: '#64748b', marginTop: '8px', fontSize: '0.85rem' }}>
            هرد عليك في أقرب وقت
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            placeholder="اسمك"
            required
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            className="form-input"
          />
          <input
            type="email"
            placeholder="إيميلك"
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            className="form-input"
          />
          <textarea
            placeholder="اكتبلي عن مشروعك..."
            required
            rows={5}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: 'vertical' }}
            className="form-input"
          />
          <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
            <span>🚀</span> ابعت الرسالة
          </button>
        </form>
      )}
    </div>
  );
};

/* ── Main Component ──────────────────────────── */
const SocialMedia = () => {
  const [ref, visible] = useVisible(0.05);

  return (
    <section id="social" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{
        position: 'absolute', bottom: '-200px', right: '-200px',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label">Get In Touch</div>
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
            }}>تواصلي </span>
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>معايا</span>
          </h2>
          <p className="arabic" style={{
            color: '#64748b',
            maxWidth: '440px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            جاهزة للشغل — تقدر تلاقيني على كل المنصات دي
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>
          {/* Social grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {socials.map((social, i) => (
              <SocialCard key={social.name} social={social} index={i} parentVisible={visible} />
            ))}
          </div>

          {/* Contact form */}
          <ContactForm visible={visible} />
        </div>
      </div>

      <style>{`
        .form-input:focus {
          border-color: rgba(34,211,238,0.4) !important;
          box-shadow: 0 0 0 3px rgba(34,211,238,0.08) !important;
        }
        .form-input::placeholder { color: #475569; font-family: 'Cairo', sans-serif; }
      `}</style>
    </section>
  );
};

export default SocialMedia;
