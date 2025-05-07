
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { addToRecentlyViewed } from "@/lib/utils";
import products from "@/data/products";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // Track product views for product detail pages
  useEffect(() => {
    if (pathname.startsWith('/products/') && id) {
      const productId = parseInt(id);
      const currentProduct = products.find(p => p.id === productId);
      if (currentProduct) {
        addToRecentlyViewed(currentProduct);
      }
    }
  }, [pathname, id]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
