
import { HelpCircle, Sparkles, CreditCard, Save, RotateCcw, Crown, Clock, ShoppingBag, User } from "lucide-react";

interface ContextualActionBarProps {
  currentStep: string;
  onStepChange: (step: 'upload' | 'analysis' | 'routine' | 'products' | 'stores' | 'pricing' | 'history' | 'reminders' | 'deals' | 'account') => void;
  onPremiumFeatureClick: (feature: string, plan: 'Pro' | 'Elite') => boolean;
}

const ContextualActionBar = ({ currentStep, onStepChange, onPremiumFeatureClick }: ContextualActionBarProps) => {
  const getContextualActions = () => {
    switch (currentStep) {
      case 'upload':
        return [
          { 
            icon: <Sparkles className="w-4 h-4" />, 
            label: 'How it Works', 
            action: () => {
              alert('How it works tutorial would be shown here');
            }
          },
          { 
            icon: <CreditCard className="w-4 h-4" />, 
            label: 'Pricing', 
            action: () => onStepChange('pricing')
          },
          { 
            icon: <HelpCircle className="w-4 h-4" />, 
            label: 'Help', 
            action: () => {
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
              if (!onPremiumFeatureClick("Save Analysis", "Pro")) return;
              alert('Analysis saved to history');
            }
          },
          { 
            icon: <RotateCcw className="w-4 h-4" />, 
            label: 'New Scan', 
            action: () => onStepChange('upload')
          },
          { 
            icon: <Crown className="w-4 h-4" />, 
            label: 'Upgrade', 
            action: () => onStepChange('pricing')
          }
        ];
      case 'routine':
        return [
          { 
            icon: <Clock className="w-4 h-4" />, 
            label: 'Set Reminders', 
            action: () => onStepChange('reminders')
          },
          { 
            icon: <ShoppingBag className="w-4 h-4" />, 
            label: 'Find Products', 
            action: () => onStepChange('products')
          },
          { 
            icon: <User className="w-4 h-4" />, 
            label: 'Account', 
            action: () => onStepChange('account')
          }
        ];
      case 'products':
        return [
          { 
            icon: <Crown className="w-4 h-4" />, 
            label: 'Deals', 
            action: () => onStepChange('deals')
          },
          { 
            icon: <Save className="w-4 h-4" />, 
            label: 'History', 
            action: () => onStepChange('history')
          },
          { 
            icon: <User className="w-4 h-4" />, 
            label: 'Account', 
            action: () => onStepChange('account')
          }
        ];
      case 'stores':
        return [
          { 
            icon: <Crown className="w-4 h-4" />, 
            label: 'Elite Deals', 
            action: () => onStepChange('deals')
          },
          { 
            icon: <Clock className="w-4 h-4" />, 
            label: 'Reminders', 
            action: () => onStepChange('reminders')
          },
          { 
            icon: <User className="w-4 h-4" />, 
            label: 'Account', 
            action: () => onStepChange('account')
          }
        ];
      default:
        return [
          { 
            icon: <CreditCard className="w-4 h-4" />, 
            label: 'Pricing', 
            action: () => onStepChange('pricing')
          },
          { 
            icon: <Save className="w-4 h-4" />, 
            label: 'History', 
            action: () => onStepChange('history')
          },
          { 
            icon: <User className="w-4 h-4" />, 
            label: 'Account', 
            action: () => onStepChange('account')
          }
        ];
    }
  };

  return (
    <div className="fixed top-32 right-4 z-40 space-y-2">
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
  );
};

export default ContextualActionBar;
