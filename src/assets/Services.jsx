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

const services = [
  {
    icon: '⚡',
    title: 'Web Development',
    titleAr: 'تطوير المواقع',
    desc: 'مواقع React وNext.js احترافية — سريعة، متجاوبة، وبتشتغل على كل الأجهزة بأعلى معايير الأداء.',
    features: ['React / Next.js', 'TypeScript', 'API Integration', 'Performance Optimization'],
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(34,211,238,0.02))',
    price: 'من ١٥٠٠ جنيه',
  },
  {
    icon: '✦',
    title: 'UI/UX Design',
    titleAr: 'تصميم الواجهات',
    desc: 'تصميم تجارب مستخدم مبهرة في Figma — من الـ Wireframe للـ Prototype الكامل.',
    features: ['Figma Design', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.02))',
    price: 'من ٨٠٠ جنيه',
    featured: true,
  },
  {
    icon: '🌐',
    title: '3D Experiences',
    titleAr: 'تجارب ثلاثية الأبعاد',
    desc: 'صفحات هبوط وتجارب تفاعلية بـ Three.js وWebGL تخلي موقعك مش موجود في أي حتة تانية.',
    features: ['Three.js / WebGL', 'GSAP Animation', 'Interactive 3D', 'Motion Design'],
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, rgba(129,140,248,0.12), rgba(129,140,248,0.02))',
    price: 'من ٢٥٠٠ جنيه',
  },
  {
    icon: '🎓',
    title: 'Tech Coaching',
    titleAr: 'تدريب تقني',
    desc: 'كورسات وجلسات فردية في React وUI/UX — بتعلمك صح من الأساس لحد الاحتراف.',
    features: ['1-on-1 Sessions', 'Course Creation', 'Code Review', 'Career Mentoring'],
    color: '#22d3ee',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(34,211,238,0.02))',
    price: 'من ٣٠٠ جنيه/ساعة',
  },
  {
    icon: '🔧',
    title: 'Website Audit',
    titleAr: 'مراجعة المواقع',
    desc: 'بشوفلك موقعك الحالي وبقولك بالتفصيل إيه المشاكل وإيه اللي محتاج تتحسن.',
    features: ['Performance Audit', 'SEO Analysis', 'UX Review', 'Detailed Report'],
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.02))',
    price: 'من ٤٠٠ جنيه',
  },
  {
    icon: '🎨',
    title: 'Brand Identity',
    titleAr: 'الهوية البصرية',
    desc: 'تصميم لوجو وهوية بصرية كاملة تعكس شخصيتك وتميزك في السوق.',
    features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'],
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, rgba(129,140,248,0.12), rgba(129,140,248,0.02))',
    price: 'من ١٢٠٠ جنيه',
  },
];

const ServiceCard = ({ service, index, parentVisible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? service.gradient : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? service.color + '44' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '24px',
        padding: '36px 28px',
        cursor: 'default',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: parentVisible
          ? hovered ? 'translateY(-6px)' : 'translateY(0)'
          : 'translateY(30px)',
        opacity: parentVisible ? 1 : 0,
        transitionDelay: `${index * 0.08}s`,
        boxShadow: hovered ? `0 20px 60px ${service.color}22` : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Featured badge */}
      {service.featured && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
          color: '#000',
          fontSize: '0.65rem',
          fontWeight: '800',
          fontFamily: 'Syne, sans-serif',
          letterSpacing: '0.1em',
          padding: '3px 10px',
          borderRadius: '50px',
        }}>POPULAR</div>
      )}

      {/* Icon */}
      <div style={{
        width: '52px', height: '52px',
        borderRadius: '14px',
        background: `${service.color}18`,
        border: `1px solid ${service.color}33`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.6rem',
        marginBottom: '20px',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: '800',
        fontSize: '1.15rem',
        color: '#f8fafc',
        marginBottom: '4px',
      }}>{service.title}</h3>
      <div className="arabic" style={{
        color: service.color,
        fontSize: '0.82rem',
        fontWeight: '600',
        marginBottom: '14px',
        opacity: 0.8,
      }}>{service.titleAr}</div>

      {/* Description */}
      <p className="arabic" style={{
        color: '#64748b',
        fontSize: '0.88rem',
        lineHeight: 1.8,
        marginBottom: '20px',
      }}>{service.desc}</p>

      {/* Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
        {service.features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '4px', height: '4px', borderRadius: '50%',
              background: service.color,
              boxShadow: `0 0 6px ${service.color}`,
              flexShrink: 0,
            }} />
            <span style={{
              color: '#94a3b8',
              fontSize: '0.82rem',
              fontFamily: 'DM Sans, sans-serif',
            }}>{f}</span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div style={{
        paddingTop: '16px',
        borderTop: `1px solid ${service.color}22`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span className="arabic" style={{
          fontFamily: 'Cairo, sans-serif',
          fontWeight: '700',
          fontSize: '1rem',
          color: service.color,
        }}>{service.price}</span>
        <div style={{
          width: '28px', height: '28px',
          borderRadius: '50%',
          border: `1px solid ${service.color}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: service.color,
          fontSize: '0.9rem',
          transition: 'all 0.2s ease',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
        }}>→</div>
      </div>

      {/* Hover glow strip */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '2px',
        background: `linear-gradient(to right, transparent, ${service.color}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />
    </div>
  );
};

const Services = () => {
  const [ref, visible] = useVisible(0.05);

  return (
    <section id="services" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG decoration */}
      <div style={{
        position: 'absolute', top: '50%', left: '-300px',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        transform: 'translateY(-50%)',
      }} />

      <div className="section-wrapper" ref={ref}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label">What I Do</div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            fontFamily: 'Syne, sans-serif',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>خدماتي </span>
            <span style={{
              background: 'linear-gradient(135deg, #f8fafc, #94a3b8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>المتخصصة</span>
          </h2>
          <p className="arabic" style={{
            color: '#64748b',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            كل خدمة بشتغل عليها بكل حرفية واهتمام — لأن وقتك وفلوسك يستاهلوا أحسن نتيجة
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} parentVisible={visible} />
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          marginTop: '72px',
          padding: '48px',
          borderRadius: '28px',
          background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(59,130,246,0.08))',
          border: '1px solid rgba(34,211,238,0.15)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4,0,0.2,1) 0.5s',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(34,211,238,0.03), rgba(59,130,246,0.03))',
            backgroundSize: '40px 40px',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 className="arabic" style={{
              fontFamily: 'Cairo, sans-serif',
              fontWeight: '900',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: '#f8fafc',
              marginBottom: '12px',
            }}>مش لاقي الخدمة اللي محتاجها؟</h3>
            <p className="arabic" style={{ color: '#94a3b8', marginBottom: '28px' }}>
              تواصل معايا وهنصمم حاجة خصيصًا ليك 🎯
            </p>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>💬</span> اتكلم معايا دلوقتي
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
