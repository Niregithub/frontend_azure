import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to MySite</h1>
        <p>Your one-stop destination for awesome content.</p>
      </header>

      <section style={styles.section}>
        <h2>About Us</h2>
        <p>
          We are passionate about building simple, effective web solutions. Whether you're
          looking for a portfolio, business site, or blog — we’ve got you covered.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Get Started</h2>
        <p>
          Explore our features, sign up, and stay connected. This is just the beginning!
        </p>
        <button style={styles.button}>Learn More</button>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#f5f5f5',
    padding: '40px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  section: {
    marginBottom: '30px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  footer: {
    marginTop: '40px',
    fontSize: '14px',
    color: '#888'
  }
};

export default HomePage;
