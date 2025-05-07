
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative overflow-hidden rounded-md border bg-card transition-all hover:shadow-md">
      {product.bestSeller && (
        <div className="absolute top-2 left-2 z-10 bg-bike-red text-white text-xs font-semibold px-2 py-1 rounded">
          Best Seller
        </div>
      )}
      
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="mb-1 text-sm text-muted-foreground">
          {product.brand}
        </div>
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-medium line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-2 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs text-muted-foreground">
              {product.rating}
            </span>
          </div>
          
          <span className="ml-auto text-sm font-semibold">
            {formatPrice(product.price)}
          </span>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
