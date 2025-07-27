import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  Package, 
  Clock, 
  Star, 
  Search,
  Filter,
  Plus,
  MapPin,
  Phone,
  Truck
} from "lucide-react";

export const VendorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "vegetables", name: "Vegetables" },
    { id: "spices", name: "Spices & Masala" },
    { id: "oil", name: "Cooking Oil" },
    { id: "grains", name: "Rice & Flour" },
    { id: "dairy", name: "Dairy Products" }
  ];

  const suppliers = [
    {
      id: 1,
      name: "Sharma Wholesale",
      category: "vegetables",
      rating: 4.8,
      location: "Azadpur Mandi, Delhi",
      phone: "+91 98765 43210",
      speciality: "Fresh Vegetables",
      minOrder: "₹500",
      deliveryTime: "2-4 hours",
      products: ["Onions", "Potatoes", "Tomatoes", "Green Chilies"],
      verified: true
    },
    {
      id: 2,
      name: "Spice King Traders",
      category: "spices",
      rating: 4.9,
      location: "Khari Baoli, Delhi",
      phone: "+91 87654 32109",
      speciality: "Premium Spices",
      minOrder: "₹300",
      deliveryTime: "Same day",
      products: ["Garam Masala", "Red Chili Powder", "Turmeric", "Cumin"],
      verified: true
    },
    {
      id: 3,
      name: "Golden Oil Distributors",
      category: "oil",
      rating: 4.7,
      location: "Mundka, Delhi",
      phone: "+91 76543 21098",
      speciality: "Cooking Oils",
      minOrder: "₹1000",
      deliveryTime: "Next day",
      products: ["Mustard Oil", "Sunflower Oil", "Refined Oil", "Ghee"],
      verified: true
    }
  ];

  const recentOrders = [
    {
      id: "ORD001",
      supplier: "Sharma Wholesale",
      items: ["Onions (10kg)", "Potatoes (15kg)", "Tomatoes (5kg)"],
      amount: "₹850",
      status: "delivered",
      date: "2024-01-15"
    },
    {
      id: "ORD002",
      supplier: "Spice King Traders",
      items: ["Garam Masala (1kg)", "Red Chili Powder (2kg)"],
      amount: "₹420",
      status: "in-transit",
      date: "2024-01-14"
    },
    {
      id: "ORD003",
      supplier: "Golden Oil Distributors",
      items: ["Mustard Oil (5L)", "Refined Oil (10L)"],
      amount: "₹1200",
      status: "pending",
      date: "2024-01-13"
    }
  ];

  const filteredSuppliers = suppliers.filter(supplier => 
    (selectedCategory === "all" || supplier.category === selectedCategory) &&
    (searchTerm === "" || supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     supplier.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "success";
      case "in-transit": return "warning";
      case "pending": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Vendor Dashboard</h1>
        <p className="text-muted-foreground">Find suppliers, manage orders, and grow your street food business</p>
      </div>

      <Tabs defaultValue="suppliers" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="suppliers">Find Suppliers</TabsTrigger>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
          <TabsTrigger value="profile">My Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="suppliers" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Find Suppliers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search suppliers or products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suppliers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSuppliers.map((supplier) => (
              <Card key={supplier.id} className="shadow-card hover:shadow-supplier transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {supplier.name}
                        {supplier.verified && (
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {supplier.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{supplier.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Speciality:</span>
                      <span className="font-medium">{supplier.speciality}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Min Order:</span>
                      <span className="font-medium">{supplier.minOrder}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery:</span>
                      <span className="font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {supplier.deliveryTime}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Products:</p>
                    <div className="flex flex-wrap gap-1">
                      {supplier.products.map((product, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="vendor" size="sm" className="flex-1">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Order Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Recent Orders
              </CardTitle>
              <CardDescription>Track your orders and manage deliveries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-sm text-muted-foreground">{order.supplier}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={getStatusColor(order.status) as any}>
                          {order.status.replace('-', ' ')}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{order.date}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <p key={index} className="text-sm text-muted-foreground">• {item}</p>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <span className="font-semibold text-lg">{order.amount}</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Truck className="w-4 h-4 mr-1" />
                          Track
                        </Button>
                        <Button variant="vendor" size="sm">
                          Reorder
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Profile</CardTitle>
              <CardDescription>Manage your business information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Business Name</label>
                  <Input placeholder="Enter your stall/business name" />
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
                  <label className="text-sm font-medium">Location</label>
                  <Input placeholder="Enter your stall location" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Food Speciality</label>
                  <Input placeholder="e.g., Chaat, Dosa, Biryani" />
                </div>
              </div>
              <Button variant="vendor" className="w-full md:w-auto">
                Update Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};