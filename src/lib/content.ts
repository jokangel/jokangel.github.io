import blogCategoriesJson from "@/content/blog/categories.json";
import comingSoonCase from "@/content/blog/cases/coming-soon.json";
import storyIndex from "@/content/blog/story/index.json";
import categoriesJson from "@/content/categories.json";
import othersJson from "@/content/others.json";
import amethystGeode from "@/content/products/amethyst-geode/geode.json";
import copperRutile from "@/content/products/black-rutile/copper.json";
import b001 from "@/content/products/cinnabar/b001.json";
import crystalSand from "@/content/products/cinnabar/crystal-sand.json";
import peaceBuckle from "@/content/products/cinnabar/peace-buckle.json";
import redSand from "@/content/products/cinnabar/red-sand.json";
import x001 from "@/content/products/cinnabar/x001.json";
import x002 from "@/content/products/cinnabar/x002.json";
import z001 from "@/content/products/cinnabar/z001.json";
import z002 from "@/content/products/cinnabar/z002.json";
import z003 from "@/content/products/cinnabar/z003.json";
import m001 from "@/content/products/meteorite/m001.json";
import k2Jasper from "@/content/products/other-crystals/k2.json";
import p001 from "@/content/products/pyrite/p001.json";
import p002 from "@/content/products/pyrite/p002.json";
import sugiliteBar from "@/content/products/sugilite/bar.json";
import s001 from "@/content/products/sugilite/s001.json";
import tourmalineRainbow from "@/content/products/tourmaline/rainbow.json";
import siteJson from "@/content/site.json";
import type { Article, BlogCategory, Category, Partner, Product, SiteContent } from "@/lib/types";

export const site = siteJson as SiteContent;
export const categories = categoriesJson as Category[];
export const partners = othersJson as Partner[];
export const blogCategories = blogCategoriesJson as BlogCategory[];

export const products = [
  z001,
  z002,
  z003,
  x001,
  x002,
  b001,
  redSand,
  crystalSand,
  peaceBuckle,
  m001,
  s001,
  sugiliteBar,
  p001,
  p002,
  tourmalineRainbow,
  copperRutile,
  k2Jasper,
  amethystGeode,
] as Product[];

export const articles = [storyIndex, comingSoonCase] as Article[];

export function publishedProducts() {
  return products.filter((product) => product.status !== "hidden");
}

export function visibleCategories() {
  return categories.filter((category) => category.visible && !category.parent);
}

export function childCategories(parentId: string) {
  return categories.filter((category) => category.visible && category.parent === parentId);
}

export function categoryById(id: string) {
  return categories.find((category) => category.id === id);
}

export function categoryPath(category: Category) {
  return `/products/${category.id}/`;
}

export function productMatchesCategory(product: Product, categoryId: string) {
  if (!categoryId) return true;
  if (product.category === categoryId) return true;
  return childCategories(categoryId).some((child) => child.id === product.category);
}

export function productsByCategory(categoryId: string) {
  const category = categoryById(categoryId);
  if (!category) return [];
  const childIds = childCategories(categoryId).map((item) => item.id);
  if (category.landingOnly || childIds.length) {
    return publishedProducts().filter(
      (product) => product.category === categoryId || childIds.includes(product.category),
    );
  }
  return publishedProducts().filter((product) => product.category === categoryId);
}

export function productBySlug(category: string, slug: string) {
  return publishedProducts().find((product) => product.category === category && product.slug === slug);
}

export function featuredProducts() {
  return site.featured
    .map((id) => publishedProducts().find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));
}

export function partnerBySlug(slug: string) {
  return partners.find((partner) => partner.slug === slug);
}

export function articlesByCategory(categoryId: string) {
  return articles.filter((article) => article.category === categoryId);
}

export function articleBySlug(category: string, slug: string) {
  return articles.find((article) => article.category === category && article.slug === slug);
}

export function blogCategoryById(id: string) {
  return blogCategories.find((category) => category.id === id);
}

export function productPath(product: Product) {
  return `/products/${product.category}/${product.slug}/`;
}

export function imageSrc(path: string) {
  return `/images/products/${path}`;
}
