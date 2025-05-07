
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import allProducts, { Product } from "@/data/products";
import categories from "@/data/categories";
import { formatPrice } from "@/lib/utils";

const Products = () => {
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "all");
  const [selectedBrand, setSelectedBrand] = useState<string>(searchParams.get("brand") || "all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000000]);
  const [sort, setSort] = useState<string>(searchParams.get("sort") || "featured");
  
  // Get unique brands from products
  const brands = Array.from(new Set(allProducts.map(product => product.brand))).sort();
  
  // Filter and sort products
  useEffect(() => {
    let filteredProducts = [...allProducts];
    
    // Filter by category
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        product => product.category === selectedCategory
      );
    }
    
    // Filter by brand
    if (selectedBrand !== "all") {
      filteredProducts = filteredProducts.filter(
        product => product.brand === selectedBrand
      );
    }
    
    // Filter by price range
    filteredProducts = filteredProducts.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    if (sort === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "rating-desc") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }
    
    setProducts(filteredProducts);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    if (selectedBrand !== "all") params.set("brand", selectedBrand);
    if (sort !== "featured") params.set("sort", sort);
    setSearchParams(params);
  }, [selectedCategory, selectedBrand, priceRange, sort]);

  return (
    <Layout>
      <section className="py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-1/4 space-y-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="category-all"
                      checked={selectedCategory === "all"}
                      onCheckedChange={() => setSelectedCategory("all")}
                    />
                    <label htmlFor="category-all" className="text-sm cursor-pointer">All Categories</label>
                  </div>
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategory === category.id}
                        onCheckedChange={() => setSelectedCategory(category.id)}
                      />
                      <label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Brands</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="brand-all"
                      checked={selectedBrand === "all"}
                      onCheckedChange={() => setSelectedBrand("all")}
                    />
                    <label htmlFor="brand-all" className="text-sm cursor-pointer">All Brands</label>
                  </div>
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedBrand === brand}
                        onCheckedChange={() => setSelectedBrand(brand)}
                      />
                      <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">{brand}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 3000000]}
                    max={3000000}
                    step={100000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{formatPrice(priceRange[0])}</span>
                    <span className="text-sm">{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedBrand("all");
                  setPriceRange([0, 3000000]);
                  setSort("featured");
                }}
              >
                Reset Filters
              </Button>
            </div>
            
            {/* Products Grid */}
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">All Products ({products.length})</h2>
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
              
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
