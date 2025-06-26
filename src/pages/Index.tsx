
import { useState } from "react";
import Navigation from "@/components/Navigation";
import UpgradeModal from "@/components/UpgradeModal";
import ContextualActionBar from "@/components/ContextualActionBar";
import MainContent from "@/components/MainContent";
import { usePremiumFeatures } from "@/hooks/usePremiumFeatures";
import { generateMockAnalysis } from "@/utils/mockAnalysis";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'upload' | 'analysis' | 'routine' | 'products' | 'stores' | 'pricing' | 'history' | 'reminders' | 'deals' | 'account'>('upload');
  const [analysisData, setAnalysisData] = useState(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Mock user subscription status
  const [userPlan] = useState<'Free' | 'Pro' | 'Elite'>('Free');

  const {
    showUpgradeModal,
    upgradeFeature,
    requiredPlan,
    handlePremiumFeatureClick,
    closeUpgradeModal
  } = usePremiumFeatures(userPlan);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setCurrentStep('analysis');
    
    // Simulate AI analysis with mock data
    setTimeout(() => {
      const mockAnalysis = generateMockAnalysis();
      setAnalysisData(mockAnalysis);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Navigation currentStep={currentStep} />
      
      <ContextualActionBar
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        onPremiumFeatureClick={handlePremiumFeatureClick}
      />

      <MainContent
        currentStep={currentStep}
        analysisData={analysisData}
        onImageUpload={handleImageUpload}
        onStepChange={setCurrentStep}
        onPremiumFeatureClick={handlePremiumFeatureClick}
      />

      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={closeUpgradeModal}
        feature={upgradeFeature}
        requiredPlan={requiredPlan}
      />
    </div>
  );
};

export default Index;
