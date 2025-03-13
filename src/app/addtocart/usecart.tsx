"use client";

import { useState, useContext, createContext, ReactNode } from 'react';

// Define the type for the cart item
interface CartItem {
  id: string;
  img: string; // Add img
  title: string; // Add title
  price: number; // Add price
  description: string; // Add description
  rating: number; // Add rating
  category: string; // Add category
  brand: string; // Add brand
}

// Define the type for the context value
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
}

// Create the context with a default value
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}

// Cart provider component
interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}