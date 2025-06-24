
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, ShoppingCart, ArrowRight, ArrowLeft, DollarSign, Award } from "lucide-react";

interface ProductRecommendationsProps {
  onNext: () => void;
  onBack: () => void;
}

const ProductRecommendations = ({ onNext, onBack }: ProductRecommendationsProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const budgetProducts = [
    {
      id: "1",
      name: "CeraVe Foaming Facial Cleanser",
      brand: "CeraVe",
      category: "Cleanser",
      price: 12.99,
      rating: 4.5,
      reviews: 2847,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      benefits: ["Gentle Formula", "Ceramides", "Non-comedogenic"],
      description: "A gentle foaming cleanser that removes dirt and makeup without disrupting the skin barrier."
    },
    {
      id: "2",
      name: "The Ordinary Niacinamide 10%",
      brand: "The Ordinary",
      category: "Serum",
      price: 6.50,
      rating: 4.3,
      reviews: 1924,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      benefits: ["Reduces Pores", "Controls Oil", "Brightening"],
      description: "High-strength niacinamide serum to reduce the appearance of pores and control excess oil."
    },
    {
      id: "3",
      name: "Neutrogena Ultra Gentle Daily Cleanser",
      brand: "Neutrogena",
      category: "Cleanser",
      price: 8.99,
      rating: 4.2,
      reviews: 1563,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      benefits: ["Fragrance-Free", "Hypoallergenic", "Sensitive Skin"],
      description: "A soap-free cleanser that's gentle enough for sensitive skin yet effective at removing impurities."
    }
  ];

  const premiumProducts = [
    {
      id: "4",
      name: "La Mer The Cleansing Foam",
      brand: "La Mer",
      category: "Cleanser",
      price: 95.00,
      rating: 4.7,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      benefits: ["Miracle Broth", "Luxurious Texture", "Deep Cleansing"],
      description: "A rich, creamy cleanser infused with Miracle Broth for a luxurious cleansing experience."
    },
    {
      id: "5",
      name: "SK-II Facial Treatment Essence",
      brand: "SK-II",
      category: "Essence",
      price: 185.00,
      rating: 4.8,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      benefits: ["PITERA™", "Anti-Aging", "Radiance Boost"],
      description: "The iconic essence with PITERA™ that transforms skin texture and radiance."
    },
    {
      id: "6",
      name: "Drunk Elephant C-Firma Vitamin C",
      brand: "Drunk Elephant",
      category: "Serum",
      price: 78.00,
      rating: 4.6,
      reviews: 2156,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      benefits: ["15% L-Ascorbic Acid", "Brightening", "Antioxidant"],
      description: "A potent vitamin C serum that delivers advanced environmental protection and brightening."
    }
  ];

  const ProductCard = ({ product, isPremium }: { product: any, isPremium: boolean }) => (
    <Card className="p-6 glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="relative mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl"
        />
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
        >
          <Heart 
            className={`w-5 h-5 ${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
          />
        </button>
        {isPremium && (
          <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900">
            <Award className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        )}
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">{product.category}</Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blush-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.benefits.map((benefit: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {benefit}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <DollarSign className="w-4 h-4 text-green-600" />
          <span className="text-xl font-bold text-gray-800">${product.price}</span>
        </div>
        <Button 
          size="sm"
          className="bg-gradient-to-r from-blush-500 to-lavender-500 hover:from-blush-600 hover:to-lavender-600 text-white rounded-full px-4"
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blush-500 to-lavender-500 bg-clip-text text-transparent mb-4">
            Recommended Products
          </h2>
          <p className="text-xl text-gray-600">
            Curated specifically for your skin type and concerns
          </p>
        </div>

        {/* Product Categories */}
        <div className="mb-12">
          <Tabs defaultValue="budget" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 glass-card">
              <TabsTrigger 
                value="budget" 
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-mint-500 data-[state=active]:to-mint-600 data-[state=active]:text-white"
              >
                <DollarSign className="w-4 h-4" />
                <span>Budget-Friendly</span>
              </TabsTrigger>
              <TabsTrigger 
                value="premium"
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blush-500 data-[state=active]:to-lavender-500 data-[state=active]:text-white"
              >
                <Award className="w-4 h-4" />
                <span>Premium</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="budget" className="animate-scale-in">
              <div className="mb-8">
                <Card className="p-6 glass-card bg-gradient-to-r from-mint-50 to-mint-100 border-mint-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mint-400 to-mint-500 flex items-center justify-center mr-4">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Budget-Friendly Options</h3>
                      <p className="text-gray-600">Effective skincare that won't break the bank</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    These products offer excellent value for money while delivering proven results for your skin concerns.
                  </p>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {budgetProducts.map((product) => (
                  <ProductCard key={product.id} product={product} isPremium={false} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="premium" className="animate-scale-in">
              <div className="mb-8">
                <Card className="p-6 glass-card bg-gradient-to-r from-blush-50 to-lavender-50 border-blush-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blush-400 to-lavender-400 flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Premium Collection</h3>
                      <p className="text-gray-600">Luxury skincare with advanced formulations</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Premium products featuring cutting-edge ingredients and luxurious textures for optimal results.
                  </p>
                </Card>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumProducts.map((product) => (
                  <ProductCard key={product.id} product={product} isPremium={true} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Shopping Tips */}
        <Card className="p-8 glass-card mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Smart Shopping Tips</h3>
          <div className="gri


d md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Patch Test First</h4>
              <p className="text-sm text-gray-600">Always test new products on a small skin area before full application</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Introduce Gradually</h4>
              <p className="text-sm text-gray-600">Add one new product at a time to monitor your skin's response</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Start with Basics</h4>
              <p className="text-sm text-gray-600">Build your routine with essential products before adding treatments</p>
            </div>
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
            <span>Back to Routine</span>
          </Button>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Find Nearby Stores</h3>
            <p className="text-gray-600 mb-4">Locate retailers and compare prices</p>
          </div>
          
          <Button 
            onClick={onNext}
            className="bg-gradient-to-r from-blush-500 to-lavender-500 hover:from-blush-600 hover:to-lavender-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Find Stores</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;
