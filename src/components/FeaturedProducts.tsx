
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("featured");
  
  const featuredProducts = products.filter(product => product.featured).slice(0, 8);
  const bestSellerProducts = products.filter(product => product.bestSeller).slice(0, 8);
  
  const displayProducts = activeTab === "featured" ? featuredProducts : bestSellerProducts;

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold">Our Collection</h2>
          
          <div className="flex mt-4 md:mt-0 space-x-4">
            <Button
              variant={activeTab === "featured" ? "default" : "outline"}
              onClick={() => setActiveTab("featured")}
              className={activeTab === "featured" ? "bg-bike-red hover:bg-bike-red/90" : ""}
            >
              Featured
            </Button>
            <Button
              variant={activeTab === "bestseller" ? "default" : "outline"}
              onClick={() => setActiveTab("bestseller")}
              className={activeTab === "bestseller" ? "bg-bike-red hover:bg-bike-red/90" : ""}
            >
              Best Sellers
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
