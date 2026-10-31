export function EmptyState({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-gold/15 bg-bg-elev px-6 py-16 text-center">
      <p className="text-muted">{title}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
