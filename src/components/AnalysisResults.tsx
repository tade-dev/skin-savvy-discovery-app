
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, TrendingUp, ArrowRight } from "lucide-react";

interface AnalysisResultsProps {
  data: any;
  onNext: () => void;
}

const AnalysisResults = ({ data, onNext }: AnalysisResultsProps) => {
  const [showResults, setShowResults] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  const analysisSteps = [
    "Analyzing facial features...",
    "Detecting skin type...",
    "Identifying skin concerns...",
    "Calculating confidence scores...",
    "Generating recommendations..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnalysisStep(prev => {
        if (prev < analysisSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => setShowResults(true), 1000);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  if (!showResults) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 glass-card">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blush-400 to-lavender-400 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Analyzing Your Skin
            </h2>
            
            <div className="space-y-4 mb-8">
              {analysisSteps.map((step, index) => (
                <div key={index} className={`flex items-center justify-center space-x-3 transition-all duration-500 ${
                  index <= analysisStep ? 'opacity-100' : 'opacity-30'
                }`}>
                  {index < analysisStep ? (
                    <CheckCircle className="w-5 h-5 text-mint-500" />
                  ) : index === analysisStep ? (
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blush-400 to-lavender-400 animate-pulse"></div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                  )}
                  <span className={`text-lg ${index <= analysisStep ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
            
            <Progress value={(analysisStep + 1) / analysisSteps.length * 100} className="w-full h-3" />
            <p className="text-sm text-gray-500 mt-4">
              This may take a few moments...
            </p>
          </Card>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-12 glass-card">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blush-200 border-t-blush-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-semibold text-gray-700">Still analyzing...</h2>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blush-500 to-lavender-500 bg-clip-text text-transparent mb-4">
            Your Skin Analysis Results
          </h2>
          <p className="text-xl text-gray-600">
            Based on advanced AI analysis of your photo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Main Skin Type Card */}
          <Card className="p-8 glass-card hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Skin Type</h3>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-mint-500" />
                <span className="text-sm font-semibold text-mint-600">{data.confidence}% Confidence</span>
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blush-100 to-lavender-100 flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2">{data.skinType}</h4>
              <Progress value={data.confidence} className="w-full h-3" />
            </div>
            
            <div className="bg-gradient-to-r from-blush-50 to-lavender-50 rounded-2xl p-6">
              <h5 className="font-semibold text-gray-700 mb-2">Skin Texture Analysis</h5>
              <p className="text-gray-600">{data.skinTexture}</p>
            </div>
          </Card>

          {/* Skin Concerns */}
          <Card className="p-8 glass-card hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-6 h-6 text-blush-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Detected Concerns</h3>
            </div>
            
            <div className="space-y-4">
              {data.issues.map((issue: any, index: number) => (
                <div key={index} className="bg-white/50 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-700">{issue.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      issue.severity === 'Low' ? 'bg-mint-100 text-mint-700' :
                      issue.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blush-100 text-blush-700'
                    }`}>
                      {issue.severity} Severity
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={issue.confidence} className="flex-1 h-2" />
                    <span className="text-sm text-gray-500">{issue.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="p-8 glass-card mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Insights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blush-100 to-blush-200 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Overall Health</h4>
              <p className="text-sm text-gray-600">Your skin shows good overall health with minor areas for improvement</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-lavender-100 to-lavender-200 flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Hydration Level</h4>
              <p className="text-sm text-gray-600">Moderate hydration detected, consider adding more moisturizing products</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-mint-100 to-mint-200 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Protection Needs</h4>
              <p className="text-sm text-gray-600">Daily SPF protection is essential for your skin type</p>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready for Your Personalized Routine?</h3>
          <p className="text-gray-600 mb-8">
            Based on this analysis, we've created a custom skincare routine just for you.
          </p>
          <Button 
            onClick={onNext}
            className="bg-gradient-to-r from-blush-500 to-lavender-500 hover:from-blush-600 hover:to-lavender-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            See My Skincare Routine
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;
