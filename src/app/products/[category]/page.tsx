import { notFound } from "next/navigation";
import { CategoryPageView } from "@/components/CategoryPageView";
import { categories, categoryById } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!categoryById(category)) notFound();
  return <CategoryPageView categoryId={category} />;
}
