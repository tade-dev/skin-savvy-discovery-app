
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-glow border-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg ai-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold ai-text-gradient">
              Skin Savvy AI
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-muted-foreground font-medium">Advanced Skin Analysis</div>
            <ContextualActionBar 
              currentStep={currentStep}
              onStepChange={onStepChange}
              onPremiumFeatureClick={onPremiumFeatureClick}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const isCompleted = getCurrentStepIndex() > index;
            const isCurrent = step.id === currentStep;
            
            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isCurrent 
                    ? 'ai-gradient text-white shadow-2xl scale-105 ai-glow' 
                    : isCompleted 
                      ? 'bg-secondary border border-ai-cyan/30 text-ai-cyan' 
                      : 'bg-muted/50 text-muted-foreground border border-border'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-xl">{step.icon}</span>
                  )}
                  <span className="text-sm font-semibold hidden sm:block">{step.label}</span>
                </div>
                
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-3 rounded-full transition-all duration-300 ${
                    getCurrentStepIndex() > index 
                      ? 'bg-gradient-to-r from-ai-cyan to-ai-purple' 
                      : 'bg-border'
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
