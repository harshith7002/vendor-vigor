import { useState } from "react";
import { Header } from "@/components/Header";
import { HomePage } from "@/components/HomePage";
import { VendorDashboard } from "@/components/VendorDashboard";
import { SupplierDashboard } from "@/components/SupplierDashboard";
import { Marketplace } from "@/components/Marketplace";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");

  const renderCurrentView = () => {
    switch (currentView) {
      case "vendor-dashboard":
        return <VendorDashboard />;
      case "supplier-dashboard":
        return <SupplierDashboard />;
      case "marketplace":
        return <Marketplace />;
      default:
        return <HomePage onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      {renderCurrentView()}
    </div>
  );
};

export default Index;
