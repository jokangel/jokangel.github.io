export type Locale = "zh-Hant" | "zh-Hans" | "en";

export type Localized = Record<Locale, string>;

export type ProductStatus = "published" | "hidden" | "sold";

export type Product = {
  id: string;
  slug: string;
  sku: string;
  category: string;
  subcategory: string | null;
  status: ProductStatus;
  name: Localized;
  summary: Localized;
  description: Localized;
  images: string[];
  videos: string[];
  featured: boolean;
  whatsappPrefill: Localized;
};

export type Category = {
  id: string;
  parent: string | null;
  visible: boolean;
  landingOnly?: boolean;
  name: Localized;
  theme?: Localized;
  intro: Localized;
};

export type Partner = {
  slug: string;
  name: Localized;
  summary: Localized;
  description: Localized;
  image: string | null;
  contactNote: Localized;
};

export type Article = {
  slug: string;
  category: string;
  title: Localized;
  summary: Localized;
  body: Localized;
};

export type BlogCategory = {
  id: string;
  name: Localized;
  intro: Localized;
};

export type SiteContent = {
  brand: string;
  whatsapp: string;
  featured: string[];
  about: Localized;
  heroLine: Localized;
};
