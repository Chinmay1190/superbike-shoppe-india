
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product } from "@/data/products";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getDiscountedPrice(price: number, discountPercentage: number) {
  return price - (price * discountPercentage / 100);
}

// Recently viewed products functionality
const RECENT_PRODUCTS_KEY = "recentlyViewedProducts";
const MAX_RECENT_PRODUCTS = 4;

export function addToRecentlyViewed(product: Product): void {
  try {
    const recentProducts = getRecentlyViewedProducts();
    
    // Remove if product is already in the list
    const filteredProducts = recentProducts.filter(p => p.id !== product.id);
    
    // Add to the beginning of the array
    filteredProducts.unshift(product);
    
    // Limit to max number of products
    const limitedProducts = filteredProducts.slice(0, MAX_RECENT_PRODUCTS);
    
    // Save back to localStorage
    localStorage.setItem(RECENT_PRODUCTS_KEY, JSON.stringify(limitedProducts));
  } catch (error) {
    console.error("Error saving recently viewed product:", error);
  }
}

export function getRecentlyViewedProducts(): Product[] {
  try {
    const products = localStorage.getItem(RECENT_PRODUCTS_KEY);
    return products ? JSON.parse(products) : [];
  } catch (error) {
    console.error("Error getting recently viewed products:", error);
    return [];
  }
}
