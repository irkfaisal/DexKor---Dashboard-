export default function Card({ as: Tag = "div", className = "", children }) {
  return (
    <Tag
      className={[
        "relative rounded-2xl border",
        "border-black/10 dark:border-white/10",
        "bg-white/90 dark:bg-neutral-900/80",
        "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl",
        "before:bg-[radial-gradient(80%_60%_at_50%_-20%,rgba(59,130,246,0.12),transparent_60%)]",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
