import { notFound } from "next/navigation";
import { EffectGroupView } from "@/components/EffectGroupView";
import { effectById, effectGroups } from "@/lib/content";

export function generateStaticParams() {
  return effectGroups.map((effect) => ({ slug: effect.id }));
}

export default async function EffectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!effectById(slug)) notFound();
  return <EffectGroupView effectId={slug} />;
}
