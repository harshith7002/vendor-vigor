import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  Users, 
  Truck, 
  Star, 
  TrendingUp, 
  Shield, 
  Clock,
  MapPin,
  Phone,
  ChefHat
} from "lucide-react";
import heroImage from "@/assets/hero-street-food.jpg";

interface HomePageProps {
  onViewChange: (view: string) => void;
}

export const HomePage = ({ onViewChange }: HomePageProps) => {
  const features = [
    {
      icon: Users,
      title: "Verified Suppliers",
      description: "Connect with trusted wholesale suppliers verified by our community",
      color: "supplier"
    },
    {
      icon: TrendingUp,
      title: "Better Prices",
      description: "Get wholesale prices through collective buying power",
      color: "success"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rating system ensures consistent quality from suppliers",
      color: "primary"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Track your orders and ensure timely delivery to your stall",
      color: "vendor"
    }
  ];

  const stats = [
    { number: "2000+", label: "Street Vendors", icon: ChefHat },
    { number: "500+", label: "Suppliers", icon: Truck },
    { number: "50,000+", label: "Orders Delivered", icon: ShoppingCart },
    { number: "₹2Cr+", label: "Money Saved", icon: TrendingUp }
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Chandni Chowk, Delhi",
      business: "Chaat Stall",
      rating: 5,
      comment: "VendorConnect helped me reduce my raw material costs by 30%. Now I can focus on cooking instead of running around for supplies."
    },
    {
      name: "Priya Sharma",
      location: "Brigade Road, Bangalore",
      business: "Dosa Cart",
      rating: 5,
      comment: "Quality suppliers and on-time delivery. My customers love the fresh ingredients I can now afford."
    },
    {
      name: "Abdul Rahman",
      location: "Mohammed Ali Road, Mumbai",
      business: "Biryani Stall",
      rating: 5,
      comment: "The bulk ordering feature allows me to stock up for the week. Great for business planning!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Indian Street Food Market" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionizing Street Food 
              <span className="block text-accent"> Supply Chain</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Connect street food vendors with trusted suppliers. Better prices, 
              quality ingredients, and reliable delivery for India's vibrant street food ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => onViewChange("vendor-dashboard")}
                className="text-lg px-8 py-4 bg-card text-foreground hover:bg-card/90"
              >
                <ChefHat className="w-5 h-5 mr-2" />
                I'm a Vendor
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onViewChange("supplier-dashboard")}
                className="text-lg px-8 py-4 border-card text-card hover:bg-card hover:text-foreground"
              >
                <Truck className="w-5 h-5 mr-2" />
                I'm a Supplier
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose VendorConnect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the challenges street vendors face. Our platform is built 
              specifically for the Indian street food ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    feature.color === 'supplier' ? 'bg-gradient-supplier' :
                    feature.color === 'vendor' ? 'bg-gradient-vendor' :
                    feature.color === 'success' ? 'bg-success' :
                    'bg-primary'
                  } text-white`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted by Street Vendors
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from vendors who transformed their business with VendorConnect
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {testimonial.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{testimonial.business}</Badge>
                  </div>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of vendors and suppliers who are already benefiting 
            from our platform. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => onViewChange("vendor-dashboard")}
              className="text-lg px-8 py-4 bg-card text-foreground hover:bg-card/90"
            >
              Get Started as Vendor
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onViewChange("marketplace")}
              className="text-lg px-8 py-4 border-card text-card hover:bg-card hover:text-foreground"
            >
              Explore Marketplace
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};