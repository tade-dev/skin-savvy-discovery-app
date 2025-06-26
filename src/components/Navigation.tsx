
import { CheckCircle } from "lucide-react";
import ContextualActionBar from "@/components/ContextualActionBar";

interface NavigationProps {
  currentStep: string;
  onStepChange: (step: 'upload' | 'analysis' | 'routine' | 'products' | 'stores' | 'pricing' | 'history' | 'reminders' | 'deals' | 'account') => void;
  onPremiumFeatureClick: (feature: string, plan: 'Pro' | 'Elite') => boolean;
}

const Navigation = ({ currentStep, onStepChange, onPremiumFeatureClick }: NavigationProps) => {
  const steps = [
    { id: 'upload', label: 'Upload Photo', icon: '📸' },
    { id: 'analysis', label: 'AI Analysis', icon: '🧠' },
    { id: 'routine', label: 'Skincare Plan', icon: '✨' },
    { id: 'products', label: 'Products', icon: '🛍️' },
    { id: 'stores', label: 'Find Stores', icon: '📍' }
  ];

  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blush-500 to-lavender-500 bg-clip-text text-transparent">
            SkinWise
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">AI Skincare Advisor</div>
            <ContextualActionBar 
              currentStep={currentStep}
              onStepChange={onStepChange}
              onPremiumFeatureClick={onPremiumFeatureClick}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const isCompleted = getCurrentStepIndex() > index;
            const isCurrent = step.id === currentStep;
            
            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  isCurrent 
                    ? 'bg-gradient-to-r from-blush-500 to-lavender-500 text-white shadow-lg scale-105' 
                    : isCompleted 
                      ? 'bg-mint-100 text-mint-700' 
                      : 'bg-gray-100 text-gray-500'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <span className="text-lg">{step.icon}</span>
                  )}
                  <span className="text-sm font-medium hidden sm:block">{step.label}</span>
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 transition-all duration-300 ${
                    getCurrentStepIndex() > index ? 'bg-mint-300' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
