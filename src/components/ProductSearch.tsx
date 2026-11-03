"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type ProductSearchValue = {
  query: string;
  setQuery: (value: string) => void;
};

const ProductSearchContext = createContext<ProductSearchValue | null>(null);

export function ProductSearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  return (
    <ProductSearchContext.Provider value={{ query, setQuery }}>{children}</ProductSearchContext.Provider>
  );
}

export function useProductSearch() {
  const value = useContext(ProductSearchContext);
  if (!value) throw new Error("useProductSearch must be used within ProductSearchProvider");
  return value;
}
