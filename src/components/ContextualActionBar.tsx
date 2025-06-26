
import { HelpCircle, Sparkles, CreditCard, Save, RotateCcw, Crown, Clock, ShoppingBag, User, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 hover:bg-white/10 rounded-full p-2 transition-colors">
        <Avatar className="w-8 h-8">
          <AvatarImage src="" alt="Profile" />
          <AvatarFallback className="bg-gradient-to-r from-blush-400 to-lavender-400 text-white text-sm">
            U
          </AvatarFallback>
        </Avatar>
        <ChevronDown className="w-4 h-4 text-white/80" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-56 bg-white border border-gray-200 shadow-lg rounded-lg"
      >
        <div className="px-3 py-2 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-900">Quick Actions</p>
          <p className="text-xs text-gray-500">Context-aware menu</p>
        </div>
        
        {getContextualActions().map((action, index) => (
          <DropdownMenuItem
            key={index}
            onClick={action.action}
            className="flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-50"
          >
            {action.icon}
            <span>{action.label}</span>
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={() => onStepChange('account')}
          className="flex items-center space-x-2 px-3 py-2 text-sm cursor-pointer hover:bg-gray-50"
        >
          <User className="w-4 h-4" />
          <span>My Account</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ContextualActionBar;
