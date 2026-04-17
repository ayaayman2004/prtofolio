import React from 'react';

const LandingPage = () => {
  const styles = {
    container: {
      backgroundColor: '#020617',
      color: '#f8fafc',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    },
    heroText: {
      fontSize: '4rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '20px'
    },
    button: {
      padding: '15px 30px',
      fontSize: '18px',
      backgroundColor: '#22d3ee',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <p style={{color: '#22d3ee', fontSize: '1.2rem'}}>Aya Ayman | Instructor & Developer</p>
      <h1 style={styles.heroText}>Building the Digital Future.</h1>
      <p style={{maxWidth: '600px', lineHeight: '1.6', color: '#94a3b8'}}>
        أهلاً بيك في عالمي الرقمي. كمدربة ومطورة واجهات، بجمع بين قوة الكود وجمال التصميم
        لخلق تجارب مستخدم مذهلة.
      </p>
      <button style={styles.button}>شوفي مشاريع الـ 3D</button>
    </div>
  );
};

export default LandingPage;