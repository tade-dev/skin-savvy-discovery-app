
import { useState } from "react";

type UserPlan = 'Free' | 'Pro' | 'Elite';

export const usePremiumFeatures = (userPlan: UserPlan = 'Free') => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [upgradeFeature, setUpgradeFeature] = useState("");
  const [requiredPlan, setRequiredPlan] = useState<'Pro' | 'Elite'>('Pro');

  const handlePremiumFeatureClick = (feature: string, plan: 'Pro' | 'Elite'): boolean => {
    if (userPlan === 'Free' || (plan === 'Elite' && userPlan === 'Pro')) {
      setUpgradeFeature(feature);
      setRequiredPlan(plan);
      setShowUpgradeModal(true);
      return false;
    }
    return true;
  };

  const closeUpgradeModal = () => {
    setShowUpgradeModal(false);
  };

  return {
    showUpgradeModal,
    upgradeFeature,
    requiredPlan,
    handlePremiumFeatureClick,
    closeUpgradeModal
  };
};
