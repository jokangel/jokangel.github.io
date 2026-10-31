export function RichText({ text }: { text: string }) {
  return (
    <div className="space-y-4 leading-7 text-muted">
      {text.split(/\n{2,}/).map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
