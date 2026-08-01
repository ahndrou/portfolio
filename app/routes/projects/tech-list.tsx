export default function TechList({ technologies }: { technologies: string[] }) {
  return (
    <section className="bg-bg-surface-2 rounded-reg border-brdr-surface box-glow grid gap-100 border p-200">
      <h3 className="text-txt-heading-2 font-medium">Technologies Used</h3>

      <ol className="flex gap-100">
        {technologies.map((tech) => (
          <TechItem technology={tech} />
        ))}
      </ol>
    </section>
  );
}

function TechItem({ technology }: { technology: string }) {
  return (
    <li
      key={technology}
      className="bg-bg-surface-3 rounded-reg text-0 border-outline-3 border px-100 py-0 font-mono"
    >
      {technology}
    </li>
  );
}
