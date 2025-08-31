export default function StatusBadge({ value }) {
  const tone =
    value === "Completed"
      ? "success"
      : value === "Pending"
      ? "warning"
      : value === "Canceled"
      ? "danger"
      : "info";
  return <span className={`badge tone-${tone}`}>{value}</span>;
}
