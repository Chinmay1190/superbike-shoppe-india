
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import categories from "@/data/categories";

const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse By Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of superbikes categorized by style and performance characteristics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
              <img 
                src={category.image} 
                alt={category.name}
                className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">{category.description}</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black"
                >
                  <Link to={`/categories/${category.id}`}>View Collection</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
