
import { useState } from "react";
import { Badge, ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "@/components/ThemeToggle";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold gradient-text">SuperBike</h1>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <form className="hidden md:flex relative w-full max-w-sm items-center">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              className="pl-10 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" 
              placeholder="Search bikes..." 
            />
          </form>
          <ThemeToggle />
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile menu button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className={cn(
          "fixed inset-y-0 right-0 w-3/4 bg-background border-l shadow-xl transform transition-transform z-50",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold gradient-text">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-lg font-medium py-2 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-6 border-t">
              <Link
                to="/account"
                className="flex items-center gap-3 text-lg font-medium py-2 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                My Account
              </Link>
              <form className="mt-4 relative w-full items-center">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input 
                  className="pl-10 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" 
                  placeholder="Search bikes..." 
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
