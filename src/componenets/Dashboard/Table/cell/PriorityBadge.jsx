export default function PriorityBadge({ value }) {
  const tone =
    value === "Low"
      ? "success"
      : value === "Medium"
      ? "warning"
      : value === "High"
      ? "danger"
      : "critical";
  return <span className={`badge pill tone-${tone}`}>{value}</span>;
}
