
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { User, LogOut, Package, Heart, CreditCard, Settings } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";

const Account = () => {
  const { user, logout } = useAuth();
  const [profileForm, setProfileForm] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
  });
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm({ ...profileForm, [name]: value });
  };
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user profile
    alert("Profile updated successfully!");
  };
  
  const handleLogout = () => {
    logout();
  };
  
  const mockOrders = [
    {
      id: "SB-157890",
      date: "2023-05-15",
      status: "Delivered",
      total: "₹2,095,000",
      items: 1
    },
    {
      id: "SB-157721",
      date: "2023-02-28",
      status: "Processing",
      total: "₹1,549,900",
      items: 1
    }
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-3 space-y-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-medium">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-secondary p-3">
                <h3 className="font-medium">Account Navigation</h3>
              </div>
              <div className="p-2">
                <Link to="/account" className="flex items-center text-sm px-3 py-2 rounded-md bg-primary/10 text-primary">
                  <User className="mr-2 h-4 w-4" />
                  Account Overview
                </Link>
                <Link to="/account/orders" className="flex items-center text-sm px-3 py-2 rounded-md hover:bg-muted">
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Link>
                <Link to="/wishlist" className="flex items-center text-sm px-3 py-2 rounded-md hover:bg-muted">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Link>
                <Link to="/account/payment" className="flex items-center text-sm px-3 py-2 rounded-md hover:bg-muted">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Link>
                <Link to="/account/settings" className="flex items-center text-sm px-3 py-2 rounded-md hover:bg-muted">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-9">
            <h1 className="text-2xl font-bold mb-6">My Account</h1>
            
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="font-medium mb-4 flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Personal Information
                    </h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-sm text-muted-foreground">Name</dt>
                        <dd>{user.name}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Email</dt>
                        <dd>{user.email}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">Member Since</dt>
                        <dd>May 2023</dd>
                      </div>
                    </dl>
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link to="/account?tab=profile">Edit Profile</Link>
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h3 className="font-medium mb-4 flex items-center">
                      <Package className="mr-2 h-4 w-4" />
                      Recent Orders
                    </h3>
                    {mockOrders.length > 0 ? (
                      <div className="space-y-4">
                        {mockOrders.slice(0, 2).map((order) => (
                          <div key={order.id} className="border rounded-md p-3 text-sm">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Order #{order.id}</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs ${
                                order.status === "Delivered" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="text-muted-foreground">
                              {new Date(order.date).toLocaleDateString()}
                            </div>
                            <div className="flex justify-between mt-2">
                              <span>{order.items} item(s)</span>
                              <span className="font-medium">{order.total}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">You have no recent orders.</p>
                    )}
                    <Button variant="link" className="px-0 mt-2" asChild>
                      <Link to="/account/orders">View All Orders</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 border rounded-lg p-6">
                  <h3 className="font-medium mb-4">Recently Viewed Products</h3>
                  <div className="text-center py-8 text-muted-foreground">
                    <p>Products you view will appear here.</p>
                    <Button variant="link" asChild>
                      <Link to="/products">Browse Products</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="profile" className="pt-6">
                <div className="border rounded-lg p-6">
                  <h3 className="font-medium mb-6">Edit Profile</h3>
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={profileForm.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profileForm.email}
                          onChange={handleChange}
                          disabled
                        />
                        <p className="text-xs text-muted-foreground">
                          Email cannot be changed
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={profileForm.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={profileForm.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit">Update Profile</Button>
                  </form>
                </div>
                
                <div className="border rounded-lg p-6 mt-8">
                  <h3 className="font-medium mb-6">Change Password</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                        />
                      </div>
                      <div></div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                        />
                      </div>
                    </div>
                    
                    <Button>Change Password</Button>
                  </form>
                </div>
              </TabsContent>
              
              <TabsContent value="orders" className="pt-6">
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-secondary text-sm">
                      <tr>
                        <th className="px-4 py-3 text-left">Order #</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-right">Total</th>
                        <th className="px-4 py-3 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="border-t">
                          <td className="px-4 py-4 font-medium">{order.id}</td>
                          <td className="px-4 py-4">
                            {new Date(order.date).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === "Delivered" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-right">{order.total}</td>
                          <td className="px-4 py-4 text-center">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                      
                      {mockOrders.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                            You have not placed any orders yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
