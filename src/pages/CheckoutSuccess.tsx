
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const CheckoutSuccess = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. Your superbike order has been received and is being processed.
            We've sent a confirmation email with your order details.
          </p>
          
          <div className="mb-8 bg-muted/30 p-6 rounded-lg">
            <p className="font-medium mb-1">Order #SB-{Math.floor(100000 + Math.random() * 900000)}</p>
            <p className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild className="w-full" size="lg">
              <Link to="/account/orders">View Order</Link>
            </Button>
            
            <Button asChild variant="outline" className="w-full" size="lg">
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
