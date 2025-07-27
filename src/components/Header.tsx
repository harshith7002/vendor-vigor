import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Menu, ShoppingCart, User, Bell, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Header = ({ currentView, onViewChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate("/auth");
  };

  const handleSignOut = async () => {
    await signOut();
    onViewChange("home");
  };

  const navItems = [
    { id: "home", label: "Home", icon: null },
    { id: "vendor-dashboard", label: "Vendor Dashboard", icon: ShoppingCart },
    { id: "supplier-dashboard", label: "Supplier Dashboard", icon: User },
    { id: "marketplace", label: "Marketplace", icon: null },
  ];

  return (
    <header className="bg-card border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange("home")}
          >
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">VendorConnect</h1>
              <p className="text-xs text-muted-foreground">Street Food Supply Chain</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentView === item.id ? "default" : "ghost"}
                onClick={() => onViewChange(item.id)}
                className="flex items-center space-x-2"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Button variant="ghost" size="icon">
                  <Bell className="w-4 h-4" />
                </Button>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                <Button variant="outline" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleAuthClick}>
                  Login
                </Button>
                <Button variant="hero" onClick={handleAuthClick}>
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 justify-start"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Button>
              ))}
              <div className="flex space-x-2 pt-2">
                {user ? (
                  <>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground p-2">
                      <User className="w-4 h-4" />
                      <span>{user.email}</span>
                    </div>
                    <Button variant="outline" className="flex-1" onClick={handleSignOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="flex-1" onClick={handleAuthClick}>Login</Button>
                    <Button variant="hero" className="flex-1" onClick={handleAuthClick}>Sign Up</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};