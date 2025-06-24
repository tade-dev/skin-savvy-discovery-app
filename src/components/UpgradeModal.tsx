
import { Crown, Star, Zap, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: string;
  requiredPlan: 'Pro' | 'Elite';
}

const UpgradeModal = ({ isOpen, onClose, feature, requiredPlan }: UpgradeModalProps) => {
  const planDetails = {
    Pro: {
      icon: <Zap className="w-6 h-6" />,
      price: 19,
      color: "from-blush-500 to-blush-600",
      features: [
        "Unlimited AI scans",
        "Advanced skin analysis",
        "Ingredient checker",
        "Smart routine reminders",
        "Progress tracking"
      ]
    },
    Elite: {
      icon: <Crown className="w-6 h-6" />,
      price: 39,
      color: "from-lavender-500 to-lavender-600",
      features: [
        "Everything in Pro",
        "AI Skin Twin technology",
        "Detailed progress analytics",
        "Exclusive local deals",
        "Personal skincare consultant"
      ]
    }
  };

  const plan = planDetails[requiredPlan];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${plan.color} text-white`}>
                {plan.icon}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Upgrade to {requiredPlan}</h2>
            <p className="text-gray-600 font-normal">
              Unlock <span className="font-semibold text-blush-500">{feature}</span> and more premium features
            </p>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Blurred Preview */}
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto mb-2 opacity-60"></div>
                <p className="text-gray-500 font-medium">Premium Feature</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
              </div>
            </CardContent>
          </Card>

          {/* Plan Features */}
          <div>
            <h3 className="font-semibold mb-3">What you'll get:</h3>
            <ul className="space-y-2">
              {plan.features.map((planFeature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Star className="w-4 h-4 text-mint-500 mr-2 flex-shrink-0" />
                  <span>{planFeature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="text-center">
            <div className="flex items-baseline justify-center mb-2">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>
            <Badge className="bg-mint-100 text-mint-700">
              Cancel anytime
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button 
              className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white py-3`}
            >
              Upgrade to {requiredPlan} - ${plan.price}/month
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={onClose}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeModal;
