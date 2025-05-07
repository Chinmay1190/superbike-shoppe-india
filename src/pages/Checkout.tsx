
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { formatPrice } from "@/lib/utils";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, total, clearCart } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [loading, setLoading] = useState(false);
  
  const shipping = total > 0 ? 1000 : 0;
  const grandTotal = total + shipping;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    try {
      // In a real app, you would send this data to your payment processor
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      clearCart();
      toast.success("Payment successful!");
      navigate("/checkout/success");
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  if (!user) {
    navigate("/login?redirect=/checkout");
    return null;
  }
  
  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Shipping Information */}
              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select
                        value={formData.state}
                        onValueChange={(value) => handleSelectChange("state", value)}
                      >
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                          <SelectItem value="telangana">Telangana</SelectItem>
                          <SelectItem value="gujarat">Gujarat</SelectItem>
                          <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                      Credit Card
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="debit-card" id="debit-card" />
                    <Label htmlFor="debit-card" className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                      Debit Card
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="16" x2="12" y2="8"/></svg>
                      UPI Payment
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-4">
                    <RadioGroupItem value="net-banking" id="net-banking" />
                    <Label htmlFor="net-banking" className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="6" x2="6" y1="9" y2="9"/><line x1="10" x2="10" y1="9" y2="9"/><line x1="14" x2="14" y1="9" y2="9"/><line x1="18" x2="18" y1="9" y2="9"/><line x1="6" x2="6" y1="13" y2="13"/><line x1="18" x2="18" y1="13" y2="13"/><line x1="10" x2="14" y1="13" y2="13"/></svg>
                      Net Banking
                    </Label>
                  </div>
                </RadioGroup>
                
                {(paymentMethod === "credit-card" || paymentMethod === "debit-card") && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={formData.expiryDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          type="password"
                          maxLength={3}
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === "upi" && (
                  <div className="mt-6">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      name="upiId"
                      placeholder="name@upi"
                      required
                    />
                  </div>
                )}
                
                {paymentMethod === "net-banking" && (
                  <div className="mt-6">
                    <Label htmlFor="bank">Select Bank</Label>
                    <Select>
                      <SelectTrigger id="bank">
                        <SelectValue placeholder="Select your bank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sbi">State Bank of India</SelectItem>
                        <SelectItem value="hdfc">HDFC Bank</SelectItem>
                        <SelectItem value="icici">ICICI Bank</SelectItem>
                        <SelectItem value="axis">Axis Bank</SelectItem>
                        <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="space-y-6">
              <div className="rounded-lg border p-6 bg-card">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between border-b pb-2">
                      <div className="flex">
                        <span className="mr-2 text-muted-foreground">{item.quantity}x</span>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                  
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
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={loading}
              >
                {loading ? "Processing..." : `Pay ${formatPrice(grandTotal)}`}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                By placing your order, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;
