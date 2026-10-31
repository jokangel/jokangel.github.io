import { notFound } from "next/navigation";
import { PartnerPageView } from "@/components/PartnerPageView";
import { partnerBySlug, partners } from "@/lib/content";

export function generateStaticParams() {
  return partners.map((partner) => ({ slug: partner.slug }));
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!partnerBySlug(slug)) notFound();
  return <PartnerPageView slug={slug} />;
}
