
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ShoppingCart, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import products from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find(product => product.id === Number(id));
  
  if (!product) {
    navigate("/products");
    return null;
  }
  
  // Related products (same category, different id)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <Layout>
      <div className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span>{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square cursor-pointer rounded-md overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-1">{product.brand}</p>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
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
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({Math.round(product.rating * 10)} reviews)
                  </span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary">{formatPrice(product.price)}</p>
              {product.stock <= 5 && (
                <p className="text-sm text-red-500 mt-2">Only {product.stock} left in stock</p>
              )}
            </div>
            
            <div className="space-y-4">
              <p>{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-md p-3">
                  <p className="text-sm text-muted-foreground">Engine</p>
                  <p className="font-medium">{product.engineCapacity}</p>
                </div>
                <div className="border rounded-md p-3">
                  <p className="text-sm text-muted-foreground">Top Speed</p>
                  <p className="font-medium">{product.topSpeed}</p>
                </div>
                <div className="border rounded-md p-3">
                  <p className="text-sm text-muted-foreground">Power</p>
                  <p className="font-medium">{product.power}</p>
                </div>
                <div className="border rounded-md p-3">
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-medium">{product.weight}</p>
                </div>
              </div>
              
              {product.colors.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Available Colors:</p>
                  <div className="flex items-center gap-2">
                    {product.colors.map((color, index) => (
                      <div key={index} className="border rounded-md px-3 py-1 text-sm">
                        {color}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center">
                <div className="mr-6">
                  <label htmlFor="quantity" className="block text-sm mb-1">
                    Quantity
                  </label>
                  <div className="flex items-center border rounded-md">
                    <button
                      type="button"
                      className="px-3 py-2 border-r"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      max={product.stock}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, Number(e.target.value))))}
                      className="w-12 text-center px-2 py-2 border-none focus:outline-none focus:ring-0"
                    />
                    <button
                      type="button"
                      className="px-3 py-2 border-l"
                      onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
              
              <Button variant="outline" size="lg" className="w-full">
                Request Test Ride
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="specifications" className="mt-6">
              <div className="max-w-3xl mx-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-muted-foreground">Brand</td>
                      <td className="py-3 font-medium">{product.brand}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-muted-foreground">Model</td>
                      <td className="py-3 font-medium">{product.name}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-muted-foreground">Engine</td>
                      <td className="py-3 font-medium">{product.engineCapacity}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-muted-foreground">Power</td>
                      <td className="py-3 font-medium">{product.power}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-muted-foreground">Top Speed</td>
                      <td className="py-3 font-medium">{product.topSpeed}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-muted-foreground">Weight</td>
                      <td className="py-3 font-medium">{product.weight}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-muted-foreground">Fuel Tank Capacity</td>
                      <td className="py-3 font-medium">{product.fuelCapacity}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-muted-foreground">Colors</td>
                      <td className="py-3 font-medium">{product.colors.join(", ")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6">
              <div className="max-w-3xl mx-auto prose">
                <h3>Key Features</h3>
                <ul>
                  <li>High-performance {product.engineCapacity} engine</li>
                  <li>State-of-the-art electronic rider aids</li>
                  <li>Premium suspension components</li>
                  <li>Advanced aerodynamic design</li>
                  <li>LED lighting system</li>
                  <li>Digital instrument cluster</li>
                  <li>Multiple riding modes</li>
                  <li>Lightweight chassis construction</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-8 w-8 ${
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
                    <span className="ml-3 text-2xl font-bold">{product.rating}</span>
                    <span className="ml-1 text-muted-foreground">out of 5</span>
                  </div>
                  <div className="ml-auto">
                    <Button variant="outline">Write a Review</Button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Customer {i + 1}</h4>
                          <p className="text-sm text-muted-foreground">
                            {new Date().toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <svg
                              key={j}
                              className={`h-4 w-4 ${
                                j < Math.floor(Math.random() * 2) + 4
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <h5 className="font-medium mb-2">
                        {["Amazing performance!", "Excellent quality", "Worth every penny"][i]}
                      </h5>
                      <p>
                        {["This bike exceeded all my expectations. The handling is precise, and the power delivery is smooth yet exhilarating.", 
                          "The fit and finish of this motorcycle is exceptional. Every detail has been carefully crafted to provide both style and functionality.", 
                          "I was hesitant about the price, but after riding it for a month, I can say it's worth every rupee. The technology and engineering are top-notch."][i]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
