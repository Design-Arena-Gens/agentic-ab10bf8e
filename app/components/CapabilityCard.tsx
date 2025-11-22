export type Capability = {
  title: string;
  description: string;
};

export function CapabilityCard({ title, description }: Capability) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
