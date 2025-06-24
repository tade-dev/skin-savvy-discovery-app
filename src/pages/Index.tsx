
import { useState } from "react";
import UploadInterface from "@/components/UploadInterface";
import AnalysisResults from "@/components/AnalysisResults";
import SkincareRoutine from "@/components/SkincareRoutine";
import ProductRecommendations from "@/components/ProductRecommendations";
import StoreLocator from "@/components/StoreLocator";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'upload' | 'analysis' | 'routine' | 'products' | 'stores'>('upload');
  const [analysisData, setAnalysisData] = useState(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

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
      default:
        return <UploadInterface onImageUpload={handleImageUpload} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentStep={currentStep} />
      <main className="pt-20">
        {renderCurrentStep()}
      </main>
    </div>
  );
};

export default Index;
