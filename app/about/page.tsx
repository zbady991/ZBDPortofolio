export default function AboutPage() {
  return (
    <section className="card" style={{marginTop: 8}}>
      <h1>About Me</h1>
      <p className="hero-subtitle">I&apos;m an AI/Data Science practitioner focused on ML models, data pipelines, and actionable analytics.</p>
      <div className="grid-3" style={{marginTop: 12}}>
        <div className="card">
          <h3>Experience</h3>
          <p>Classification, regression, clustering, and time‑series projects end‑to‑end.</p>
        </div>
        <div className="card">
          <h3>Stack</h3>
          <p>Python, Pandas, NumPy, scikit‑learn, SQL/SQLite, Flask.</p>
        </div>
        <div className="card">
          <h3>Approach</h3>
          <p>Data‑centric: clean data, clear metrics, and measurable business impact.</p>
        </div>
      </div>
    </section>
  );
}


