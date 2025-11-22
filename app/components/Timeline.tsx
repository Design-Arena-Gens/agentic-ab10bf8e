export type TimelineItem = {
  title: string;
  description: string;
  phase: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <section>
      <p className="section-heading">Workflow</p>
      <div className="timeline">
        {items.map((item) => (
          <div key={item.title} className="timeline-item">
            <span>{item.phase}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
