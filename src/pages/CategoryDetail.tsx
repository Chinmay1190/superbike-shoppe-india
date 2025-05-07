
import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import products from "@/data/products";
import categories from "@/data/categories";

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find(category => category.id === id);
  
  const [sort, setSort] = useState<string>("featured");
  
  const filteredProducts = useMemo(() => {
    if (!id) return [];
    
    let categoryProducts = products.filter(product => product.category === id);
    
    if (sort === "price-asc") {
      return [...categoryProducts].sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
      return [...categoryProducts].sort((a, b) => b.price - a.price);
    }
    if (sort === "name-asc") {
      return [...categoryProducts].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "rating-desc") {
      return [...categoryProducts].sort((a, b) => b.rating - a.rating);
    }
    
    return categoryProducts;
  }, [id, sort]);

  if (!category) {
    return (
      <Layout>
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-4">Category not found</h1>
          <p className="mb-6">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/categories">View All Categories</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <img 
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.name}</h1>
          <p className="text-white/90 max-w-2xl">{category.description}</p>
        </div>
      </div>
      
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{category.name} Collection</h2>
          
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by:</span>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="rating-desc">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              We don't have any products in this category yet.
            </p>
            <Button asChild>
              <Link to="/products">Browse All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryDetail;
