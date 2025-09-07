export default function ProjectsPage() {
  return (
    <section>
      <h1 style={{marginTop: 0}}>Projects</h1>
      <p className="hero-subtitle">Selected AI/Data projects focused on modeling, pipelines, and insights.</p>
      <div className="grid-3" style={{marginTop: 16}}>
        <div className="card">
          <h3>Churn Prediction</h3>
          <p>scikit‑learn model with feature engineering and cross‑validation, deployed via Flask API.</p>
        </div>
        <div className="card">
          <h3>Recommendation System</h3>
          <p>User‑item recommendations using collaborative filtering and evaluation metrics.</p>
        </div>
        <div className="card">
          <h3>Analytics Dashboard</h3>
          <p>ETL to clean data and a dashboard to explore KPIs and trends.</p>
        </div>
      </div>
    </section>
  );
}


