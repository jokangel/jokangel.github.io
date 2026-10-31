export function PageHeader({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <header className="mb-10">
      {kicker ? (
        <p className="mb-3 text-xs tracking-[0.28em] text-gold uppercase">{kicker}</p>
      ) : null}
      <h1 className="font-display text-4xl text-ink md:text-5xl">{title}</h1>
      <div className="gold-line mt-6 h-px w-24" />
    </header>
  );
}
