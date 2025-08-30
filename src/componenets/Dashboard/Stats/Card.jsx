export default function Card({ label, value, tone = "info" }) {
  return (
    <article className={`stats-card tone-${tone}`} role="status">
      <div className="stats-body">
        <div className="stats-label">{label}</div>
        <div className="stats-value">{value}</div>
      </div>
    </article>
  );
}
