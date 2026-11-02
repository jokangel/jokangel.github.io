export type NavLink = {
  href: string;
  key: string;
  menu?: "crystals" | "effects";
};

export const topNavRow1: NavLink[] = [
  { href: "/about/", key: "nav.about" },
  { href: "/products/crystals/", key: "nav.crystals", menu: "crystals" },
  { href: "/effects/", key: "nav.effects", menu: "effects" },
  { href: "/products/pendants/", key: "nav.pendants" },
  { href: "/products/amber-beeswax/", key: "nav.amberBeeswax" },
  { href: "/products/agarwood/", key: "nav.agarwood" },
  { href: "/products/cinnabar/", key: "nav.cinnabar" },
  { href: "/products/meteorite/", key: "nav.meteorite" },
];

export const topNavRow2: NavLink[] = [
  { href: "/diy/", key: "nav.diy" },
  { href: "/products/amethyst-geode/", key: "nav.geode" },
  { href: "/cleansing/", key: "nav.cleansing" },
  { href: "/appraisal/", key: "nav.appraisal" },
  { href: "/blog/story/", key: "nav.story" },
  { href: "/blog/cases/", key: "nav.cases" },
  { href: "/contact/", key: "nav.contact" },
  { href: "/others/", key: "nav.others" },
];

export const topNav: NavLink[] = [...topNavRow1, ...topNavRow2];
