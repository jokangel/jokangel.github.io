import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ProductDetail } from "@/components/ProductDetail";
import { Section } from "@/components/Section";
import { productBySlug, publishedProducts } from "@/lib/content";

export function generateStaticParams() {
  return publishedProducts().map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = productBySlug(category, slug);
  if (!product) notFound();

  return (
    <Container>
      <Section>
        <ProductDetail product={product} />
      </Section>
    </Container>
  );
}
