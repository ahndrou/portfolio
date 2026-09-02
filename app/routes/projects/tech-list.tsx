export default function TechList({ technologies }: { technologies: string[] }) {
  return (
    <section className="grid gap-2 rounded-md p-3">
      <h3 className="text-text-quiet font-mono uppercase">Built with</h3>

      <ol className="flex flex-wrap gap-2">
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
      className="bg-fill border-line grow rounded-sm border px-2 py-1 text-center font-mono text-xs"
    >
      {technology}
    </li>
  );
}
