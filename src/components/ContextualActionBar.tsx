
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
      <DropdownMenuTrigger className="flex items-center space-x-2 hover:bg-white/5 rounded-2xl p-2 transition-all duration-300 group">
        <Avatar className="w-9 h-9 ring-2 ring-ai-purple/50 group-hover:ring-ai-purple transition-all duration-300">
          <AvatarImage src="" alt="Profile" />
          <AvatarFallback className="ai-gradient text-white text-sm font-semibold">
            AI
          </AvatarFallback>
        </Avatar>
        <ChevronDown className="w-4 h-4 text-foreground/60 group-hover:text-ai-purple transition-colors" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-64 glass-card-glow border-white/20 rounded-2xl p-2"
      >
        <div className="px-4 py-3 border-b border-white/10">
          <p className="text-sm font-semibold text-foreground">AI Assistant</p>
          <p className="text-xs text-muted-foreground">Smart actions based on your progress</p>
        </div>
        
        {getContextualActions().map((action, index) => (
          <DropdownMenuItem
            key={index}
            onClick={action.action}
            className="flex items-center space-x-3 px-4 py-3 text-sm cursor-pointer hover:bg-white/5 rounded-xl transition-all duration-200 group"
          >
            <div className="text-ai-purple group-hover:text-ai-cyan transition-colors">
              {action.icon}
            </div>
            <span className="font-medium">{action.label}</span>
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={() => onStepChange('account')}
          className="flex items-center space-x-3 px-4 py-3 text-sm cursor-pointer hover:bg-white/5 rounded-xl transition-all duration-200 group"
        >
          <div className="text-ai-purple group-hover:text-ai-cyan transition-colors">
            <User className="w-4 h-4" />
          </div>
          <span className="font-medium">My Account</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ContextualActionBar;
