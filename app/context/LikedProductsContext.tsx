"use client";
import React, { createContext, useContext, useState } from "react";

interface LikedProductsContextType {
  likedProducts: number[];
  toggleLike: (productId: number) => void;
}

const LikedProductsContext = createContext<LikedProductsContextType | undefined>(
  undefined
);

export function useLikedProducts() {
  const context = useContext(LikedProductsContext);
  if (!context) {
    throw new Error("useLikedProducts must be used within a LikedProductsProvider");
  }
  return context;
}

interface LikedProductsProviderProps {
  children: React.ReactNode;
}

export function LikedProductsProvider({ children }: LikedProductsProviderProps) {
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (productId: number) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  return (
    <LikedProductsContext.Provider value={{ likedProducts, toggleLike }}>
      {children}
    </LikedProductsContext.Provider>
  );
}
