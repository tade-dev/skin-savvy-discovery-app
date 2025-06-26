
import { useState } from "react";
import UploadInterface from "@/components/UploadInterface";
import AnalysisResults from "@/components/AnalysisResults";
import SkincareRoutine from "@/components/SkincareRoutine";
import ProductRecommendations from "@/components/ProductRecommendations";
import StoreLocator from "@/components/StoreLocator";
import PricingPage from "@/components/PricingPage";
import AnalysisHistory from "@/components/AnalysisHistory";
import RoutineReminders from "@/components/RoutineReminders";
import NearbyDeals from "@/components/NearbyDeals";
import AccountPage from "@/components/AccountPage";
import Navigation from "@/components/Navigation";
import UpgradeModal from "@/components/UpgradeModal";
import { HelpCircle, Sparkles, CreditCard, Save, RotateCcw, Crown, Clock, ShoppingBag, User } from "lucide-react";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'upload' | 'analysis' | 'routine' | 'products' | 'stores' | 'pricing' | 'history' | 'reminders' | 'deals' | 'account'>('upload');
  const [analysisData, setAnalysisData] = useState(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [upgradeFeature, setUpgradeFeature] = useState("");
  const [requiredPlan, setRequiredPlan] = useState<'Pro' | 'Elite'>('Pro');

  // Mock user subscription status
  const [userPlan] = useState<'Free' | 'Pro' | 'Elite'>('Free');

  const handlePremiumFeatureClick = (feature: string, plan: 'Pro' | 'Elite') => {
    if (userPlan === 'Free' || (plan === 'Elite' && userPlan === 'Pro')) {
      setUpgradeFeature(feature);
      setRequiredPlan(plan);
      setShowUpgradeModal(true);
      return false;
    }
    return true;
  };

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setCurrentStep('analysis');
    
    // Simulate AI analysis with mock data
    setTimeout(() => {
      const mockAnalysis = {
        skinType: "Combination",
        confidence: 92,
        issues: [
          { name: "Mild Acne", severity: "Low", confidence: 87 },
          { name: "Enlarged Pores", severity: "Medium", confidence: 82 },
          { name: "Slight Oiliness", severity: "Low", confidence: 89 }
        ],
        skinTexture: "Smooth with some roughness in T-zone",
        recommendations: {
          morning: [
            { step: 1, product: "Gentle Foam Cleanser", category: "Cleanser" },
            { step: 2, product: "Niacinamide Toner", category: "Toner" },
            { step: 3, product: "Hyaluronic Acid Serum", category: "Serum" },
            { step: 4, product: "Light Moisturizer", category: "Moisturizer" },
            { step: 5, product: "SPF 30+ Sunscreen", category: "Sunscreen" }
          ],
          evening: [
            { step: 1, product: "Oil Cleanser", category: "Cleanser" },
            { step: 2, product: "Gentle Foam Cleanser", category: "Second Cleanser" },
            { step: 3, product: "BHA Exfoliant (2x/week)", category: "Treatment" },
            { step: 4, product: "Retinol Serum (3x/week)", category: "Serum" },
            { step: 5, product: "Night Moisturizer", category: "Moisturizer" }
          ]
        }
      };
      setAnalysisData(mockAnalysis);
    }, 3000);
  };

  // Contextual action bar configuration
  const getContextualActions = () => {
    switch (currentStep) {
      case 'upload':
        return [
          { 
            icon: <Sparkles className="w-4 h-4" />, 
            label: 'How it Works', 
            action: () => {
              // Show how it works tutorial or guide
              alert('How it Works tutorial would be shown here');
            }
          },
          { 
            icon: <CreditCard className="w-4 h-4" />, 
            label: 'Pricing', 
            action: () => setCurrentStep('pricing')
          },
          { 
            icon: <HelpCircle className="w-4 h-4" />, 
            label: 'Help', 
            action: () => {
              // Show help modal or guide
              alert('Help center would be shown here');
            }
          }
        ];
      case 'analysis':
        return [
          { 
            icon: <Save className="w-4 h-4" />, 
            label: 'Save Analysis', 
            action: () => {
              if (!handlePremiumFeatureClick("Save Analysis", "Pro")) return;
              alert('Analysis saved to history');
            }
          },
          { 
            icon: <RotateCcw className="w-4 h-4" />, 
            label: 'New Scan', 
            action: () => setCurrentStep('upload')
          },
          { 
            icon: <Crown className="w-4 h-4" />, 
            label: 'Upgrade', 
            action: () => setCurrentStep('pricing')
          }
        ];
      case 'routine':
        return [
          { 
            icon: <Clock className="w-4 h-4" />, 
            label: 'Set Reminders', 
            action: () => setCurrentStep('reminders')
          },
          { 
            icon: <ShoppingBag className="w-4 h-4" />, 
            label: 'Find Products', 
            action: () => setCurrentStep('products')
          },
          { 
            icon: <User className="w-4 h-4" />, 
            label: 'Account', 
            action: () => setCurrentStep('account')
          }
        ];
      case 'products':
        return [
          { 
            icon: <Crown className="w-4 h-4" />, 
            label: 'Deals', 
            action: () => setCurrentStep('deals')
          },
          { 
            icon: <Save className="w-4 h-4" />, 
            label: 'History', 
            action: () => setCurrentStep('history')
          },
          { 
            icon: <User className="w-4 h-4" />, 
            label: 'Account', 
            action: () => setCurrentStep('account')
          }
        ];
      case 'stores':
        return [
          { 
            icon: <Crown className="w-4 h-4" />, 
            label: 'Elite Deals', 
            action: () => setCurrentStep('deals')
          },
          { 
            icon: <Clock className="w-4 h-4" />, 
            label: 'Reminders', 
            action: () => setCurrentStep('reminders')
          },
          { 
            icon: <User className="w-4 h-4" />, 
            label: 'Account', 
            action: () => setCurrentStep('account')
          }
        ];
      default:
        return [
          { 
            icon: <CreditCard className="w-4 h-4" />, 
            label: 'Pricing', 
            action: () => setCurrentStep('pricing')
          },
          { 
            icon: <Save className="w-4 h-4" />, 
            label: 'History', 
            action: () => setCurrentStep('history')
          },
          { 
            icon: <User className="w-4 h-4" />, 
            label: 'Account', 
            action: () => setCurrentStep('account')
          }
        ];
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'upload':
        return <UploadInterface onImageUpload={handleImageUpload} />;
      case 'analysis':
        return <AnalysisResults data={analysisData} onNext={() => setCurrentStep('routine')} />;
      case 'routine':
        return <SkincareRoutine data={analysisData} onNext={() => setCurrentStep('products')} onBack={() => setCurrentStep('analysis')} />;
      case 'products':
        return <ProductRecommendations onNext={() => setCurrentStep('stores')} onBack={() => setCurrentStep('routine')} />;
      case 'stores':
        return <StoreLocator onBack={() => setCurrentStep('products')} />;
      case 'pricing':
        return <PricingPage />;
      case 'history':
        if (!handlePremiumFeatureClick("Analysis History", "Pro")) return null;
        return <AnalysisHistory />;
      case 'reminders':
        if (!handlePremiumFeatureClick("Smart Routine Reminders", "Pro")) return null;
        return <RoutineReminders />;
      case 'deals':
        if (!handlePremiumFeatureClick("Exclusive Local Deals", "Elite")) return null;
        return <NearbyDeals />;
      case 'account':
        return <AccountPage />;
      default:
        return <UploadInterface onImageUpload={handleImageUpload} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentStep={currentStep} />
      
      {/* Contextual Action Bar */}
      <div className="fixed top-20 right-4 z-40 space-y-2">
        {getContextualActions().map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="flex items-center space-x-2 w-full px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium hover:bg-white/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}
      </div>

      <main className="pt-20">
        {renderCurrentStep()}
      </main>

      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        feature={upgradeFeature}
        requiredPlan={requiredPlan}
      />
    </div>
  );
};

export default Index;
