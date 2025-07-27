import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock,
  ShoppingCart,
  Truck,
  Phone,
  Zap,
  Leaf
} from "lucide-react";

export const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", name: "All Products", count: 250 },
    { id: "vegetables", name: "Vegetables", count: 85 },
    { id: "spices", name: "Spices & Masala", count: 45 },
    { id: "oil", name: "Cooking Oil", count: 20 },
    { id: "grains", name: "Rice & Flour", count: 35 },
    { id: "dairy", name: "Dairy Products", count: 25 },
    { id: "meat", name: "Meat & Fish", count: 40 }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Red Onions",
      supplier: "Sharma Wholesale",
      supplierRating: 4.8,
      category: "vegetables",
      price: "₹28",
      originalPrice: "₹35",
      unit: "per kg",
      minOrder: "10 kg",
      location: "Azadpur Mandi, Delhi",
      deliveryTime: "2-4 hours",
      inStock: true,
      discount: 20,
      features: ["Fresh", "Grade A", "Wholesale"],
      image: "🧅"
    },
    {
      id: 2,
      name: "Organic Garam Masala",
      supplier: "Spice King Traders",
      supplierRating: 4.9,
      category: "spices",
      price: "₹210",
      originalPrice: "₹250",
      unit: "per kg",
      minOrder: "1 kg",
      location: "Khari Baoli, Delhi",
      deliveryTime: "Same day",
      inStock: true,
      discount: 16,
      features: ["Organic", "Premium", "Fresh Ground"],
      image: "🌶️"
    },
    {
      id: 3,
      name: "Pure Mustard Oil",
      supplier: "Golden Oil Distributors",
      supplierRating: 4.7,
      category: "oil",
      price: "₹165",
      originalPrice: "₹180",
      unit: "per liter",
      minOrder: "5 L",
      location: "Mundka, Delhi",
      deliveryTime: "Next day",
      inStock: true,
      discount: 8,
      features: ["Pure", "Cold Pressed", "Traditional"],
      image: "🛢️"
    },
    {
      id: 4,
      name: "Basmati Rice Premium",
      supplier: "Grain Master Co.",
      supplierRating: 4.6,
      category: "grains",
      price: "₹95",
      originalPrice: "₹110",
      unit: "per kg",
      minOrder: "5 kg",
      location: "Najafgarh, Delhi",
      deliveryTime: "4-6 hours",
      inStock: true,
      discount: 14,
      features: ["Long Grain", "Aged", "Premium"],
      image: "🌾"
    },
    {
      id: 5,
      name: "Fresh Green Chilies",
      supplier: "Fresh Farms Supply",
      supplierRating: 4.5,
      category: "vegetables",
      price: "₹45",
      originalPrice: "₹55",
      unit: "per kg",
      minOrder: "2 kg",
      location: "Ghaziabad, UP",
      deliveryTime: "3-5 hours",
      inStock: true,
      discount: 18,
      features: ["Fresh", "Pesticide Free", "Direct Farm"],
      image: "🌶️"
    },
    {
      id: 6,
      name: "Paneer (Fresh)",
      supplier: "Dairy Fresh Co.",
      supplierRating: 4.7,
      category: "dairy",
      price: "₹280",
      originalPrice: "₹320",
      unit: "per kg",
      minOrder: "1 kg",
      location: "Gurgaon, Haryana",
      deliveryTime: "2-3 hours",
      inStock: true,
      discount: 13,
      features: ["Fresh", "Soft", "Daily Made"],
      image: "🧀"
    }
  ];

  const filteredProducts = products.filter(product => 
    (selectedCategory === "all" || product.category === selectedCategory) &&
    (searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.supplier.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return parseInt(a.price.replace('₹', '')) - parseInt(b.price.replace('₹', ''));
      case "price-high":
        return parseInt(b.price.replace('₹', '')) - parseInt(a.price.replace('₹', ''));
      case "rating":
        return b.supplierRating - a.supplierRating;
      case "discount":
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Marketplace</h1>
        <p className="text-muted-foreground">Discover quality ingredients from verified suppliers</p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products or suppliers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select 
                className="px-3 py-2 border border-input rounded-md bg-background"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Best Discount</option>
              </select>
              <Button variant="outline">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Categories Sidebar */}
        <div className="lg:w-64 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-2 rounded-lg transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm opacity-70">({category.count})</span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Featured Suppliers */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Suppliers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-supplier rounded-full flex items-center justify-center text-supplier-foreground font-bold">
                  S
                </div>
                <div>
                  <p className="font-medium">Sharma Wholesale</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="text-xs">4.8</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-supplier rounded-full flex items-center justify-center text-supplier-foreground font-bold">
                  S
                </div>
                <div>
                  <p className="font-medium">Spice King Traders</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="text-xs">4.9</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{product.image}</div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                        <CardDescription className="text-sm">{product.supplier}</CardDescription>
                      </div>
                    </div>
                    {product.discount > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-muted-foreground">{product.unit}</span>
                      </div>
                      {product.originalPrice !== product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.supplierRating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature === "Fresh" && <Leaf className="w-3 h-3 mr-1" />}
                        {feature === "Premium" && <Zap className="w-3 h-3 mr-1" />}
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Min Order:</span>
                      <span className="font-medium">{product.minOrder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery:</span>
                      <span className="font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {product.deliveryTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium text-xs">{product.location}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="vendor" className="flex-1">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};