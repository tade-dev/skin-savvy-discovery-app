
import { useState } from "react";
import { Check, Crown, Star, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      icon: <Star className="w-6 h-6" />,
      monthlyPrice: 0,
      yearlyPrice: 0,
      badge: null,
      features: [
        "3 AI scans per month",
        "Basic skincare routine",
        "General product recommendations",
        "Community support"
      ],
      buttonText: "Get Started",
      buttonStyle: "outline"
    },
    {
      name: "Pro",
      icon: <Zap className="w-6 h-6" />,
      monthlyPrice: 19,
      yearlyPrice: 15,
      badge: "Most Popular",
      badgeColor: "bg-blush-500",
      features: [
        "Unlimited AI scans",
        "Advanced skin analysis",
        "Ingredient checker",
        "Smart routine reminders",
        "Progress tracking",
        "Priority support"
      ],
      buttonText: "Subscribe Now",
      buttonStyle: "default"
    },
    {
      name: "Elite",
      icon: <Crown className="w-6 h-6" />,
      monthlyPrice: 39,
      yearlyPrice: 29,
      badge: "Best Value",
      badgeColor: "bg-lavender-500",
      features: [
        "Everything in Pro",
        "AI Skin Twin technology",
        "Detailed progress analytics",
        "Exclusive local deals",
        "Personal skincare consultant",
        "Early access to new features"
      ],
      buttonText: "Go Elite",
      buttonStyle: "default"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blush-500 via-lavender-500 to-mint-500 bg-clip-text text-transparent mb-4">
            Choose Your Skincare Journey
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Unlock advanced AI features to transform your skincare routine
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'font-semibold text-blush-500' : 'text-gray-500'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-blush-500"
            />
            <span className={`text-sm ${isYearly ? 'font-semibold text-blush-500' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-mint-100 text-mint-700 hover:bg-mint-200">
                Save 25%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative glass-card hover:scale-105 transition-all duration-300 ${
                plan.badge ? 'ring-2 ring-blush-200 shadow-xl' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className={`${plan.badgeColor} text-white px-4 py-1`}>
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    index === 0 ? 'bg-gray-100' : 
                    index === 1 ? 'bg-blush-100' : 'bg-lavender-100'
                  }`}>
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 ml-1">
                    {plan.monthlyPrice > 0 ? '/month' : ''}
                  </span>
                </div>
                {isYearly && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    Billed annually (${(isYearly ? plan.yearlyPrice : plan.monthlyPrice) * 12}/year)
                  </p>
                )}
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-mint-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.buttonStyle === 'outline' 
                      ? 'bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50' 
                      : index === 1 
                        ? 'bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 text-white'
                        : 'bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white'
                  }`}
                  variant={plan.buttonStyle === 'outline' ? 'outline' : 'default'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
