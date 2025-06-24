
import { MapPin, Clock, Tag, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NearbyDeals = () => {
  const deals = [
    {
      id: 1,
      store: "Sephora",
      logo: "/placeholder.svg",
      product: "The Ordinary Niacinamide 10%",
      originalPrice: 7.20,
      dealPrice: 5.76,
      discount: 20,
      distance: "0.3 miles",
      address: "Downtown Mall, Level 2",
      validUntil: "2024-01-30",
      dealType: "Elite Exclusive"
    },
    {
      id: 2,
      store: "CVS Pharmacy",
      logo: "/placeholder.svg",
      product: "CeraVe Hydrating Cleanser",
      originalPrice: 12.99,
      dealPrice: 9.09,
      discount: 30,
      distance: "0.5 miles",
      address: "Main Street, 123",
      validUntil: "2024-01-25",
      dealType: "Flash Sale"
    },
    {
      id: 3,
      store: "Target",
      logo: "/placeholder.svg",
      product: "Neutrogena Hydro Boost",
      originalPrice: 18.99,
      dealPrice: 13.29,
      discount: 30,
      distance: "1.2 miles",
      address: "Shopping Center West",
      validUntil: "2024-02-05",
      dealType: "Weekly Deal"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent mb-4">
            Exclusive Local Deals
          </h1>
          <p className="text-gray-600">Special offers near you on recommended products</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="glass-card hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={deal.logo}
                      alt={deal.store}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold">{deal.store}</span>
                  </div>
                  <Badge className={`${
                    deal.dealType === 'Elite Exclusive' ? 'bg-lavender-100 text-lavender-700' :
                    deal.dealType === 'Flash Sale' ? 'bg-red-100 text-red-700' :
                    'bg-mint-100 text-mint-700'
                  }`}>
                    {deal.dealType}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{deal.product}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-mint-600">
                      ${deal.dealPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                  <Badge className="bg-red-100 text-red-700">
                    -{deal.discount}%
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-mint-500" />
                    <span>{deal.distance} • {deal.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-mint-500" />
                    <span>Valid until {new Date(deal.validUntil).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white group-hover:scale-105 transition-transform"
                    size="sm"
                  >
                    <Tag className="w-4 h-4 mr-1" />
                    Redeem Deal
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-mint-300 text-mint-600 hover:bg-mint-50">
            Load More Deals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NearbyDeals;
