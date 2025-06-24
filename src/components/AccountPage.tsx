
import { useState } from "react";
import { User, Crown, CreditCard, Calendar, Settings, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const AccountPage = () => {
  const [currentPlan] = useState({
    name: "Pro",
    price: 19,
    billingCycle: "monthly",
    nextPayment: "2024-02-15",
    status: "active"
  });

  const usageStats = {
    scansUsed: 15,
    scansLimit: "unlimited",
    ingredientChecks: 8,
    progressReports: 3
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blush-500 to-lavender-500 bg-clip-text text-transparent mb-4">
            My Account
          </h1>
          <p className="text-gray-600">Manage your subscription and preferences</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="md:col-span-1">
            <Card className="glass-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blush-500 to-lavender-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <p className="text-gray-600">sarah@example.com</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Badge className="bg-blush-100 text-blush-700 mb-2">
                    <Crown className="w-4 h-4 mr-1" />
                    {currentPlan.name} Member
                  </Badge>
                  <p className="text-sm text-gray-600">
                    Member since January 2024
                  </p>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                
                <Button variant="ghost" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Subscription & Usage */}
          <div className="md:col-span-2 space-y-6">
            {/* Current Plan */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Current Subscription</span>
                  <Badge className={`${
                    currentPlan.status === 'active' ? 'bg-mint-100 text-mint-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {currentPlan.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{currentPlan.name} Plan</h3>
                    <p className="text-gray-600">
                      ${currentPlan.price}/{currentPlan.billingCycle}
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white">
                    Upgrade to Elite
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Next Payment</p>
                      <p className="font-semibold">{new Date(currentPlan.nextPayment).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Payment Method</p>
                      <p className="font-semibold">•••• 4242</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-4">
                  <Button variant="outline" className="flex-1">
                    Change Plan
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        Cancel Subscription
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Cancel Subscription</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Are you sure you want to cancel your {currentPlan.name} subscription? 
                          You'll lose access to premium features at the end of your billing period.
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="outline" className="flex-1">
                            Keep Subscription
                          </Button>
                          <Button className="bg-red-600 hover:bg-red-700 text-white">
                            Cancel Plan
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            {/* Usage Statistics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>This Month's Usage</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-mint-50 rounded-lg">
                    <div className="text-2xl font-bold text-mint-600 mb-1">
                      {usageStats.scansUsed}
                    </div>
                    <div className="text-sm text-gray-600">
                      AI Scans ({usageStats.scansLimit})
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-blush-50 rounded-lg">
                    <div className="text-2xl font-bold text-blush-600 mb-1">
                      {usageStats.ingredientChecks}
                    </div>
                    <div className="text-sm text-gray-600">
                      Ingredient Checks
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-lavender-50 rounded-lg">
                    <div className="text-2xl font-bold text-lavender-600 mb-1">
                      {usageStats.progressReports}
                    </div>
                    <div className="text-sm text-gray-600">
                      Progress Reports
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">
                      24
                    </div>
                    <div className="text-sm text-gray-600">
                      Routine Reminders
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
