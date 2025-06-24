
import { useState } from "react";
import { Sun, Moon, Bell, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RoutineReminders = () => {
  const [morningEnabled, setMorningEnabled] = useState(true);
  const [eveningEnabled, setEveningEnabled] = useState(true);
  const [morningTime, setMorningTime] = useState("08:00");
  const [eveningTime, setEveningTime] = useState("21:00");

  const routineSteps = {
    morning: [
      { step: "Cleanser", time: "2 minutes" },
      { step: "Toner", time: "30 seconds" },
      { step: "Vitamin C Serum", time: "1 minute" },
      { step: "Moisturizer", time: "1 minute" },
      { step: "Sunscreen", time: "1 minute" }
    ],
    evening: [
      { step: "Oil Cleanser", time: "2 minutes" },
      { step: "Foam Cleanser", time: "2 minutes" },
      { step: "Retinol Serum", time: "1 minute" },
      { step: "Night Moisturizer", time: "2 minutes" }
    ]
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blush-500 to-lavender-500 bg-clip-text text-transparent mb-4">
            Smart Routine Reminders
          </h1>
          <p className="text-gray-600">Never miss your skincare routine again</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Morning Routine */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Sun className="w-6 h-6 text-yellow-500 mr-2" />
                  <span>Morning Routine</span>
                </div>
                <Switch
                  checked={morningEnabled}
                  onCheckedChange={setMorningEnabled}
                  className="data-[state=checked]:bg-yellow-500"
                />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <Input
                  type="time"
                  value={morningTime}
                  onChange={(e) => setMorningTime(e.target.value)}
                  disabled={!morningEnabled}
                  className="flex-1"
                />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Routine Steps</h4>
                {routineSteps.morning.map((step, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    morningEnabled ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${morningEnabled ? 'text-yellow-800' : 'text-gray-500'}`}>
                        {step.step}
                      </span>
                      <span className={`text-sm ${morningEnabled ? 'text-yellow-600' : 'text-gray-400'}`}>
                        {step.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Bell className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Total routine time: ~5-6 minutes
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Evening Routine */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Moon className="w-6 h-6 text-indigo-500 mr-2" />
                  <span>Evening Routine</span>
                </div>
                <Switch
                  checked={eveningEnabled}
                  onCheckedChange={setEveningEnabled}
                  className="data-[state=checked]:bg-indigo-500"
                />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <Input
                  type="time"
                  value={eveningTime}
                  onChange={(e) => setEveningTime(e.target.value)}
                  disabled={!eveningEnabled}
                  className="flex-1"
                />
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Routine Steps</h4>
                {routineSteps.evening.map((step, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    eveningEnabled ? 'bg-indigo-50 border-indigo-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${eveningEnabled ? 'text-indigo-800' : 'text-gray-500'}`}>
                        {step.step}
                      </span>
                      <span className={`text-sm ${eveningEnabled ? 'text-indigo-600' : 'text-gray-400'}`}>
                        {step.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <Bell className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Total routine time: ~7-8 minutes
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-gradient-to-r from-blush-500 to-lavender-500 hover:from-blush-600 hover:to-lavender-600 text-white px-8 py-3">
            Save Reminder Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoutineReminders;
