
import { Calendar, TrendingUp, Eye, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AnalysisHistory = () => {
  const analysisHistory = [
    {
      id: 1,
      date: "2024-01-15",
      skinType: "Combination",
      confidence: 94,
      issues: ["Mild Acne", "Enlarged Pores"],
      improvements: ["Skin texture improved", "Less oiliness"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      date: "2024-01-01",
      skinType: "Combination",
      confidence: 89,
      issues: ["Mild Acne", "Oily T-zone", "Enlarged Pores"],
      improvements: [],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      date: "2023-12-15",
      skinType: "Oily",
      confidence: 91,
      issues: ["Moderate Acne", "Excess Oil", "Blackheads"],
      improvements: [],
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blush-500 to-lavender-500 bg-clip-text text-transparent mb-4">
            Your Skin Journey
          </h1>
          <p className="text-gray-600">Track your progress over time</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blush-200 to-lavender-200"></div>
          
          {analysisHistory.map((analysis, index) => (
            <div key={analysis.id} className="relative mb-8 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blush-500 to-lavender-500 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-16">
                <Card className="glass-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blush-500" />
                        {new Date(analysis.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </CardTitle>
                      <Badge className="bg-mint-100 text-mint-700">
                        {analysis.confidence}% confidence
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <img
                          src={analysis.image}
                          alt="Skin analysis"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="text-center">
                          <Badge className="bg-blush-100 text-blush-700 mb-2">
                            {analysis.skinType}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Skin Issues Detected</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysis.issues.map((issue, issueIndex) => (
                              <Badge key={issueIndex} variant="outline" className="text-xs">
                                {issue}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {analysis.improvements.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-mint-600 mb-2 flex items-center">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              Improvements Noted
                            </h4>
                            <ul className="space-y-1">
                              {analysis.improvements.map((improvement, impIndex) => (
                                <li key={impIndex} className="text-sm text-mint-700 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-mint-500 rounded-full mr-2"></div>
                                  {improvement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex space-x-2 pt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisHistory;
