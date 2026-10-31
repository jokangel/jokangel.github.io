import { notFound } from "next/navigation";
import { BlogCategoryView } from "@/components/BlogCategoryView";
import { blogCategories, blogCategoryById } from "@/lib/content";

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: category.id }));
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!blogCategoryById(category)) notFound();
  return <BlogCategoryView categoryId={category} />;
}
