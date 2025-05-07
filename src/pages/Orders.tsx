
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Orders = () => {
  // Mock orders for demonstration
  const mockOrders = [
    {
      id: "SB-157890",
      date: "2023-05-15",
      status: "Delivered",
      total: "₹2,095,000",
      items: 1,
      product: "Ducati Panigale V4",
      image: "/placeholder.svg"
    },
    {
      id: "SB-157721",
      date: "2023-02-28",
      status: "Processing",
      total: "₹1,549,900",
      items: 1,
      product: "Kawasaki Ninja ZX-10R",
      image: "/placeholder.svg"
    },
    {
      id: "SB-156022",
      date: "2023-01-10",
      status: "Cancelled",
      total: "₹1,890,000",
      items: 1,
      product: "BMW S 1000 RR",
      image: "/placeholder.svg"
    }
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <Link to="/account" className="flex items-center text-sm hover:text-primary mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Account
          </Link>
          <h1 className="text-2xl font-bold">My Orders</h1>
          <p className="text-muted-foreground">Review your order history and track current orders</p>
        </div>

        {mockOrders.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>You have placed {mockOrders.length} orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === "Delivered" 
                            ? "bg-green-100 text-green-800" 
                            : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">{order.total}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View Details</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center py-12 border rounded-lg">
            <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
