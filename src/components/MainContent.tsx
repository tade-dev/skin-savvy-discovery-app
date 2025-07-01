
import FuturisticUpload from "@/components/FuturisticUpload";
import AnalysisResults from "@/components/AnalysisResults";
import SkincareRoutine from "@/components/SkincareRoutine";
import ProductRecommendations from "@/components/ProductRecommendations";
import StoreLocator from "@/components/StoreLocator";
import PricingPage from "@/components/PricingPage";
import AnalysisHistory from "@/components/AnalysisHistory";
import RoutineReminders from "@/components/RoutineReminders";
import NearbyDeals from "@/components/NearbyDeals";
import AccountPage from "@/components/AccountPage";

interface MainContentProps {
  currentStep: 'upload' | 'analysis' | 'routine' | 'products' | 'stores' | 'pricing' | 'history' | 'reminders' | 'deals' | 'account';
  analysisData: any;
  onImageUpload: (imageUrl: string) => void;
  onStepChange: (step: 'upload' | 'analysis' | 'routine' | 'products' | 'stores' | 'pricing' | 'history' | 'reminders' | 'deals' | 'account') => void;
  onPremiumFeatureClick: (feature: string, plan: 'Pro' | 'Elite') => boolean;
}

const MainContent = ({ 
  currentStep, 
  analysisData, 
  onImageUpload, 
  onStepChange, 
  onPremiumFeatureClick 
}: MainContentProps) => {
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'upload':
        return <FuturisticUpload onImageUpload={onImageUpload} />;
      case 'analysis':
        return <AnalysisResults data={analysisData} onNext={() => onStepChange('routine')} />;
      case 'routine':
        return <SkincareRoutine data={analysisData} onNext={() => onStepChange('products')} onBack={() => onStepChange('analysis')} />;
      case 'products':
        return <ProductRecommendations onNext={() => onStepChange('stores')} onBack={() => onStepChange('routine')} />;
      case 'stores':
        return <StoreLocator onBack={() => onStepChange('products')} />;
      case 'pricing':
        return <PricingPage />;
      case 'history':
        if (!onPremiumFeatureClick("Analysis History", "Pro")) return null;
        return <AnalysisHistory />;
      case 'reminders':
        if (!onPremiumFeatureClick("Smart Routine Reminders", "Pro")) return null;
        return <RoutineReminders />;
      case 'deals':
        if (!onPremiumFeatureClick("Exclusive Local Deals", "Elite")) return null;
        return <NearbyDeals />;
      case 'account':
        return <AccountPage />;
      default:
        return <FuturisticUpload onImageUpload={onImageUpload} />;
    }
  };

  return <main className="pt-20">{renderCurrentStep()}</main>;
};

export default MainContent;
