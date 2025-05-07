
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-black to-bike-black dark:from-black dark:to-bike-black h-[70vh] relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3')] bg-cover bg-center bg-no-repeat opacity-60 mix-blend-overlay"></div>
        
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Unleash Your Ride with Premium Superbikes
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Discover the finest collection of high-performance motorcycles from top brands, engineered for speed, precision, and pure exhilaration.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                asChild 
                className="bg-bike-red hover:bg-bike-red/90"
              >
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
              >
                <Link to="/categories">Explore Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
