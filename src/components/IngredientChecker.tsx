
import { useState } from "react";
import { Search, AlertTriangle, CheckCircle, Camera, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const IngredientChecker = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mockAnalysis = {
    productName: "Vitamin C Serum",
    compatibility: 85,
    safeIngredients: [
      { name: "Vitamin C (L-Ascorbic Acid)", benefit: "Brightening, antioxidant protection" },
      { name: "Hyaluronic Acid", benefit: "Deep hydration" },
      { name: "Vitamin E", benefit: "Moisturizing, anti-inflammatory" }
    ],
    concernIngredients: [
      { name: "Fragrance", concern: "May cause irritation for sensitive skin" },
      { name: "Alcohol Denat", concern: "Can be drying with frequent use" }
    ],
    recommendations: [
      "Start with every other day usage",
      "Use sunscreen during the day",
      "Patch test before full application"
    ]
  };

  const handleAnalyze = () => {
    if (!searchQuery.trim()) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white">
          <Search className="w-4 h-4 mr-2" />
          Check Ingredients
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-mint-500 to-mint-600 bg-clip-text text-transparent">
            Ingredient Compatibility Checker
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex space-x-2">
            <Input
              placeholder="Enter product name or paste ingredient list..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !searchQuery.trim()}
              className="bg-mint-500 hover:bg-mint-600 text-white"
            >
              {isAnalyzing ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </Button>
          </div>
          
          <div className="flex items-center justify-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
            <div className="text-center">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 mb-2">Or upload product label photo</p>
              <Button variant="outline" size="sm">
                Upload Image
              </Button>
            </div>
          </div>
          
          {analysisResult && (
            <div className="space-y-4 animate-fade-in">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{analysisResult.productName}</span>
                    <Badge className={`${
                      analysisResult.compatibility >= 80 ? 'bg-mint-100 text-mint-700' :
                      analysisResult.compatibility >= 60 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {analysisResult.compatibility}% Compatible
                    </Badge>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-mint-600 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Safe Ingredients
                    </h4>
                    <div className="space-y-2">
                      {analysisResult.safeIngredients.map((ingredient, index) => (
                        <div key={index} className="p-3 bg-mint-50 rounded-lg">
                          <div className="font-medium text-mint-800">{ingredient.name}</div>
                          <div className="text-sm text-mint-600">{ingredient.benefit}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {analysisResult.concernIngredients.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-yellow-600 mb-3 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Ingredients to Watch
                      </h4>
                      <div className="space-y-2">
                        {analysisResult.concernIngredients.map((ingredient, index) => (
                          <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                            <div className="font-medium text-yellow-800">{ingredient.name}</div>
                            <div className="text-sm text-yellow-600">{ingredient.concern}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Recommendations</h4>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blush-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IngredientChecker;
