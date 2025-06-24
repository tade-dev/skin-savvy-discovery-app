
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Moon, ArrowRight, ArrowLeft, Clock } from "lucide-react";

interface SkincareRoutineProps {
  data: any;
  onNext: () => void;
  onBack: () => void;
}

const SkincareRoutine = ({ data, onNext, onBack }: SkincareRoutineProps) => {
  if (!data?.recommendations) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 glass-card">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blush-200 border-t-blush-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-semibold text-gray-700">Loading your routine...</h2>
          </Card>
        </div>
      </div>
    );
  }

  const RoutineCard = ({ routine, type, icon }: { routine: any[], type: string, icon: React.ReactNode }) => (
    <Card className="p-8 glass-card hover:shadow-xl transition-all duration-300">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blush-100 to-lavender-100 flex items-center justify-center mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{type} Routine</h3>
          <p className="text-gray-600">Follow these steps in order</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {routine.map((step, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl border border-white/20 hover:bg-white/70 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blush-400 to-lavender-400 flex items-center justify-center text-white font-bold">
              {step.step}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">{step.product}</h4>
              <p className="text-sm text-gray-600">{step.category}</p>
            </div>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blush-500 to-lavender-500 bg-clip-text text-transparent mb-4">
            Your Personalized Skincare Routine
          </h2>
          <p className="text-xl text-gray-600">
            Tailored specifically for your {data.skinType.toLowerCase()} skin
          </p>
        </div>

        {/* Routine Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="morning" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 glass-card">
              <TabsTrigger 
                value="morning" 
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blush-500 data-[state=active]:to-lavender-500 data-[state=active]:text-white"
              >
                <Sun className="w-4 h-4" />
                <span>Morning</span>
              </TabsTrigger>
              <TabsTrigger 
                value="evening"
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blush-500 data-[state=active]:to-lavender-500 data-[state=active]:text-white"
              >
                <Moon className="w-4 h-4" />
                <span>Evening</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="morning" className="animate-scale-in">
              <RoutineCard 
                routine={data.recommendations.morning} 
                type="Morning" 
                icon={<Sun className="w-6 h-6 text-yellow-500" />} 
              />
            </TabsContent>
            
            <TabsContent value="evening" className="animate-scale-in">
              <RoutineCard 
                routine={data.recommendations.evening} 
                type="Evening" 
                icon={<Moon className="w-6 h-6 text-indigo-500" />} 
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Lifestyle Tips */}
        <Card className="p-8 glass-card mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Lifestyle Tips for Better Skin</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Stay Hydrated</h4>
              <p className="text-sm text-gray-600">Drink at least 8 glasses of water daily to maintain skin hydration from within</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-2xl">🥗</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Healthy Diet</h4>
              <p className="text-sm text-gray-600">Include antioxidant-rich foods like berries, leafy greens, and omega-3 fatty acids</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-2xl">😴</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Quality Sleep</h4>
              <p className="text-sm text-gray-600">Get 7-9 hours of sleep nightly for optimal skin repair and regeneration</p>
            </div>
          </div>
        </Card>

        {/* Weekly Schedule */}
        <Card className="p-8 glass-card mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Treatment Schedule</h3>
          <div className="grid grid-cols-7 gap-2 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="p-4 rounded-xl bg-white/50 border border-white/20">
                <div className="font-semibold text-gray-700 mb-2">{day}</div>
                <div className="text-xs space-y-1">
                  {index % 2 === 0 && (
                    <div className="bg-blush-100 text-blush-700 px-2 py-1 rounded">BHA</div>
                  )}
                  {index % 3 === 0 && (
                    <div className="bg-lavender-100 text-lavender-700 px-2 py-1 rounded">Retinol</div>
                  )}
                  {index === 6 && (
                    <div className="bg-mint-100 text-mint-700 px-2 py-1 rounded">Mask</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button 
            onClick={onBack}
            variant="outline"
            className="flex items-center space-x-2 px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Analysis</span>
          </Button>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Shop?</h3>
            <p className="text-gray-600 mb-4">Let's find the perfect products for your routine</p>
          </div>
          
          <Button 
            onClick={onNext}
            className="bg-gradient-to-r from-blush-500 to-lavender-500 hover:from-blush-600 hover:to-lavender-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Find Products</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkincareRoutine;
