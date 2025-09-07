import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero" data-reveal>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-intro">
              <h1 className="hero-title">Hi, I&apos;m <span className="gradient-text">Abdulrhman Mohammed Badr</span></h1>
              <p className="hero-subtitle">AI & Data Science specialist focused on building useful ML, clean data pipelines, and clear analytics. I care about practical impact, performance, and readable code.</p>
              <div className="hero-meta">
                <div className="meta-item"><span className="meta-icon">📍</span><span>Based in Egypt · Open to freelance and full‑time opportunities</span></div>
                <div className="meta-item"><span className="meta-icon">📧</span><span>Email: <a href="mailto:bedoobadr997@gmail.com">bedoobadr997@gmail.com</a></span></div>
                <div className="meta-item"><span className="meta-icon">📞</span><span>Phone: <a href="tel:+201554663927">+201554663927</a></span></div>
              </div>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/projects">View My Work</Link>
                <Link className="btn btn-ghost" href="/contact">Let&apos;s Connect</Link>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <Image className="hero-photo" src="/profile.jpeg" alt="Abdulrhman Mohammed Badr" width={320} height={320} priority />
          </div>
        </div>
      </section>

      <section className="section about-section" data-reveal>
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p>Passionate about transforming data into actionable insights</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>I&apos;m a passionate AI and Data Science professional with expertise in machine learning, data engineering, and analytics. With a strong foundation in Python, SQL, and modern data technologies, I specialize in transforming complex data into actionable insights and building production-ready ML solutions.</p>
              <p>My journey in data science began with a fascination for patterns and predictions. I&apos;ve worked on diverse projects ranging from predictive modeling to real-time data processing, always focusing on creating solutions that deliver real business value.</p>
              <p>Looking ahead, my goal is to contribute to impactful AI solutions that solve real-world problems, especially in [NLP, Computer Vision, or Analytics — pick your focus].</p>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Core Technologies</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">Pandas</span>
                  <span className="skill-tag">NumPy</span>
                  <span className="skill-tag">Flask</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">Scikit-learn</span>
                  <span className="skill-tag">SciPy</span>
                  <span className="skill-tag">OpenCV</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Specializations</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Machine Learning</span>
                  <span className="skill-tag">Data Engineering</span>
                  <span className="skill-tag">Analytics</span>
                  <span className="skill-tag">Data Visualization</span>
                  <span className="skill-tag">Computer Vision</span>
                  <span className="skill-tag">Natural Language Processing</span>
                  <span className="skill-tag">Data Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section" data-reveal>
        <div className="container">
          <div className="section-header">
            <h2>My Impact</h2>
            <p>Numbers that speak to my expertise and dedication</p>
          </div>
          <div className="stats">
            <div className="metric"><p className="num">5+<span style={{color:'var(--accent)'}}>&nbsp;projects</span></p><p className="label">Delivered end‑to‑end</p></div>
            <div className="metric"><p className="num">3+<span style={{color:'var(--accent)'}}>&nbsp;ML</span></p><p className="label">Production‑ready models</p></div>
            <div className="metric"><p className="num">100%<span style={{color:'var(--accent)'}}>&nbsp;focus</span></p><p className="label">on clarity and results</p></div>
          </div>
        </div>
      </section>

      <section className="section services-section" data-reveal>
        <div className="container">
          <div className="section-header">
            <h2>What I Do</h2>
            <p>Comprehensive data science solutions tailored to your needs</p>
          </div>
          <div className="grid-3">
            <div className="service-card"><div className="service-icon">🤖</div><h3>Machine Learning</h3><p>Supervised/unsupervised models, feature engineering, evaluation and deployment. Building intelligent systems that learn and adapt.</p></div>
            <div className="service-card"><div className="service-icon">⚙️</div><h3>Data Engineering</h3><p>ETL pipelines, data cleaning, SQL, and reproducible workflows. Creating robust data infrastructure for scalable solutions.</p></div>
            <div className="service-card"><div className="service-icon">📊</div><h3>Analytics & Visualization</h3><p>Exploratory analysis, dashboards, and insights that inform action. Turning complex data into clear, actionable stories.</p></div>
          </div>
        </div>
      </section>

      <section className="section contact-section" data-reveal>
        <div className="contact-content">
          <div className="contact-header">
            <h2>Let&apos;s Work Together</h2>
            <p>Ready to turn your data into insights? I&apos;m here to help you build amazing AI solutions and data-driven applications.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card"><div className="contact-icon">📧</div><h3>Email Me</h3><p>For project inquiries and collaborations</p><a href="mailto:bedoobadr997@gmail.com" className="contact-link">bedoobadr997@gmail.com</a></div>
            <div className="contact-card"><div className="contact-icon">💼</div><h3>LinkedIn</h3><p>Connect with me professionally</p><a href="https://www.linkedin.com/in/abdulrahman-mohammed-458991302/" target="_blank" rel="noopener" className="contact-link">View Profile</a></div>
            <div className="contact-card"><div className="contact-icon">💬</div><h3>Quick Chat</h3><p>Let&apos;s discuss your project needs</p><Link href="/contact" className="contact-link">Send Message</Link></div>
          </div>
          <div className="socials">
            <h3>Follow My Work</h3>
            <div className="social-links">
              <a className="btn btn-ghost" href="https://github.com/zbady991" target="_blank" rel="noopener"><span className="social-icon">🐙</span> GitHub</a>
              <a className="btn btn-ghost" href="https://www.kaggle.com/abdelrahmanmo911" target="_blank" rel="noopener"><span className="social-icon">🏆</span> Kaggle</a>
              <a className="btn btn-ghost" href="https://medium.com/@bedoobadr997" target="_blank" rel="noopener"><span className="social-icon">📝</span> Medium</a>
              <a className="btn btn-ghost" href="https://www.behance.net/bedoobadr991" target="_blank" rel="noopener"><span className="social-icon">🎨</span> Behance</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
