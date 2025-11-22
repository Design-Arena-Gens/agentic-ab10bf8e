export function BadgeCloud({ badges }: { badges: string[] }) {
  return (
    <section>
      <p className="section-heading">Tech Stack</p>
      <div className="badge-group">
        {badges.map((badge) => (
          <span className="badge" key={badge}>
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
