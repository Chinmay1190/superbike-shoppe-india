
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryShowcase from "@/components/CategoryShowcase";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
      
      <section className="py-16 bg-gradient-to-r from-bike-red to-bike-black text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Premium Superbike Experience</h2>
            <p className="text-lg mb-8">
              Experience the thrill of riding with our collection of the world's finest superbikes.
              With 48+ models from top brands, find your perfect machine engineered for performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-4xl font-bold mb-2">48+</div>
                <p>Premium Models</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-4xl font-bold mb-2">10+</div>
                <p>Exclusive Brands</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-4xl font-bold mb-2">5+</div>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose SuperBike Shoppe?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-bike-red/10 flex items-center justify-center text-bike-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8"/><path d="m5 12 7-4 7 4"/><path d="M5 17.5L12 14l7 3.5"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Authentic Products</h3>
                    <p className="text-muted-foreground">All our bikes are 100% authentic with manufacturer warranty and service support.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-bike-red/10 flex items-center justify-center text-bike-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Guidance</h3>
                    <p className="text-muted-foreground">Our team of motorcycle enthusiasts provides personalized assistance for your purchase.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-bike-red/10 flex items-center justify-center text-bike-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Secure Payments</h3>
                    <p className="text-muted-foreground">Multiple payment options with bank-grade security for worry-free transactions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-bike-red/10 flex items-center justify-center text-bike-red">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">After-Sales Support</h3>
                    <p className="text-muted-foreground">Comprehensive after-sales service and maintenance support across India.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3" 
                  alt="Superbike Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-bike-red text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold mb-1">5+ Years</div>
                <p className="opacity-90">of excellence in the superbike industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
