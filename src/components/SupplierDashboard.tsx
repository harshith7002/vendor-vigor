import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Package, 
  TrendingUp, 
  Users, 
  Star,
  Plus,
  Edit,
  Truck,
  Clock,
  MapPin,
  Phone,
  IndianRupee
} from "lucide-react";

export const SupplierDashboard = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    unit: "",
    minOrder: "",
    description: ""
  });

  const stats = [
    { icon: Package, label: "Products Listed", value: "24", color: "primary" },
    { icon: Users, label: "Active Vendors", value: "156", color: "vendor" },
    { icon: TrendingUp, label: "Monthly Revenue", value: "₹2.4L", color: "success" },
    { icon: Star, label: "Average Rating", value: "4.8", color: "warning" }
  ];

  const products = [
    {
      id: 1,
      name: "Fresh Onions",
      category: "Vegetables",
      price: "₹25",
      unit: "per kg",
      minOrder: "10 kg",
      stock: "500 kg",
      status: "active",
      orders: 45
    },
    {
      id: 2,
      name: "Red Chili Powder",
      category: "Spices",
      price: "₹180",
      unit: "per kg",
      minOrder: "1 kg",
      stock: "50 kg",
      status: "active",
      orders: 23
    },
    {
      id: 3,
      name: "Basmati Rice",
      category: "Grains",
      price: "₹85",
      unit: "per kg",
      minOrder: "5 kg",
      stock: "200 kg",
      status: "low-stock",
      orders: 12
    }
  ];

  const recentOrders = [
    {
      id: "ORD101",
      vendor: "Ramesh Chaat Stall",
      items: ["Onions (15kg)", "Potatoes (10kg)"],
      amount: "₹650",
      status: "pending",
      date: "2024-01-15",
      location: "Chandni Chowk"
    },
    {
      id: "ORD102",
      vendor: "Priya Dosa Cart",
      items: ["Basmati Rice (10kg)", "Black Dal (5kg)"],
      amount: "₹1200",
      status: "confirmed",
      date: "2024-01-15",
      location: "Brigade Road"
    },
    {
      id: "ORD103",
      vendor: "Abdul Biryani Center",
      items: ["Red Chili Powder (2kg)", "Garam Masala (1kg)"],
      amount: "₹520",
      status: "delivered",
      date: "2024-01-14",
      location: "Mohammed Ali Road"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "success";
      case "confirmed": return "vendor";
      case "pending": return "warning";
      case "active": return "success";
      case "low-stock": return "warning";
      default: return "secondary";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Supplier Dashboard</h1>
        <p className="text-muted-foreground">Manage your products, track orders, and grow your wholesale business</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-lg ${
                  stat.color === 'vendor' ? 'bg-vendor text-vendor-foreground' :
                  stat.color === 'success' ? 'bg-success text-success-foreground' :
                  stat.color === 'warning' ? 'bg-warning text-warning-foreground' :
                  'bg-primary text-primary-foreground'
                }`}>
                  <stat.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="products" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="products">My Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="add-product">Add Product</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Product Inventory
              </CardTitle>
              <CardDescription>Manage your product listings and inventory</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getStatusColor(product.status) as any}>
                          {product.status.replace('-', ' ')}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-semibold">{product.price} {product.unit}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Min Order</p>
                        <p className="font-semibold">{product.minOrder}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Stock</p>
                        <p className="font-semibold">{product.stock}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Orders</p>
                        <p className="font-semibold">{product.orders} this month</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <Button variant="supplier" size="sm">
                        Update Stock
                      </Button>
                      <Button variant="outline" size="sm">
                        View Analytics
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Order Management
              </CardTitle>
              <CardDescription>Track and manage vendor orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.vendor}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {order.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant={getStatusColor(order.status) as any}>
                          {order.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{order.date}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1 mb-3">
                      {order.items.map((item, index) => (
                        <p key={index} className="text-sm text-muted-foreground">• {item}</p>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="font-semibold text-lg">{order.amount}</span>
                      <div className="flex gap-2">
                        {order.status === "pending" && (
                          <Button variant="success" size="sm">
                            Confirm Order
                          </Button>
                        )}
                        {order.status === "confirmed" && (
                          <Button variant="vendor" size="sm">
                            Mark Delivered
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add-product" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add New Product
              </CardTitle>
              <CardDescription>List a new product in your inventory</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Product Name</label>
                  <Input 
                    placeholder="e.g., Fresh Tomatoes"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Input 
                    placeholder="e.g., Vegetables"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Price per Unit</label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <Input 
                      placeholder="25"
                      className="rounded-l-none"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Unit</label>
                  <Input 
                    placeholder="e.g., per kg, per piece"
                    value={newProduct.unit}
                    onChange={(e) => setNewProduct({...newProduct, unit: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Minimum Order</label>
                  <Input 
                    placeholder="e.g., 5 kg"
                    value={newProduct.minOrder}
                    onChange={(e) => setNewProduct({...newProduct, minOrder: e.target.value})}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea 
                    placeholder="Describe your product quality, origin, etc."
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  />
                </div>
              </div>
              <Button variant="supplier" className="w-full md:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Profile</CardTitle>
              <CardDescription>Manage your business information and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Business Name</label>
                  <Input placeholder="Enter your business name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Owner Name</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="Enter your email" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Business Address</label>
                  <Textarea placeholder="Enter your complete business address" />
                </div>
                <div>
                  <label className="text-sm font-medium">Delivery Range</label>
                  <Input placeholder="e.g., 10 km radius" />
                </div>
                <div>
                  <label className="text-sm font-medium">Operating Hours</label>
                  <Input placeholder="e.g., 6 AM - 6 PM" />
                </div>
              </div>
              <Button variant="supplier" className="w-full md:w-auto">
                Update Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};