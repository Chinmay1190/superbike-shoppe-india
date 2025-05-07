
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, total } = useCart();
  const { user } = useAuth();

  const shipping = total > 0 ? 1000 : 0;
  const grandTotal = total + shipping;

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container py-16">
          <div className="text-center max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any superbikes to your cart yet. Explore our collection to find your perfect ride.
            </p>
            <Button asChild className="px-8">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-4 py-3 text-left">Product</th>
                    <th className="px-4 py-3 text-center">Quantity</th>
                    <th className="px-4 py-3 text-right">Price</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded overflow-hidden mr-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link 
                              to={`/products/${item.id}`} 
                              className="font-medium hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center">
                          <div className="flex items-center border rounded-md">
                            <button
                              type="button"
                              className="px-3 py-1 border-r"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="w-10 text-center">{item.quantity}</span>
                            <button
                              type="button"
                              className="px-3 py-1 border-l"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <div className="font-medium">{formatPrice(item.price * item.quantity)}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.quantity} x {formatPrice(item.price)}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button asChild variant="outline">
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-lg border p-6 bg-card">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>
              
              {user ? (
                <Button className="w-full mt-6" asChild>
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              ) : (
                <div className="mt-6 space-y-4">
                  <Button className="w-full" asChild>
                    <Link to="/login?redirect=/checkout">Login to Checkout</Link>
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary hover:underline">
                      Register now
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="font-medium mb-3">Accepted Payment Methods</h3>
              <div className="flex flex-wrap gap-2">
                <div className="border rounded px-3 py-1 text-sm">Credit Card</div>
                <div className="border rounded px-3 py-1 text-sm">Debit Card</div>
                <div className="border rounded px-3 py-1 text-sm">UPI</div>
                <div className="border rounded px-3 py-1 text-sm">Net Banking</div>
              </div>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="font-medium mb-3">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Our customer service team is here to help you with any questions or concerns.
              </p>
              <div className="text-sm">
                <p>Call: +91 98765 43210</p>
                <p>Email: support@superbikeshoppe.in</p>
                <p>Hours: 9AM - 6PM (Mon-Sat)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
