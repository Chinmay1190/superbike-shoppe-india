
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import categories from "@/data/categories";

const Categories = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Browse Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative overflow-hidden rounded-lg border h-72"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
              <img 
                src={category.image}
                alt={category.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
                <p className="text-white/90 mb-6">{category.description}</p>
                <Button 
                  asChild 
                  className="w-full md:w-auto"
                >
                  <Link to={`/categories/${category.id}`}>View Collection</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
