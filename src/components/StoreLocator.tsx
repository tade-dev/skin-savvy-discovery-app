
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Navigation, Phone, Clock, Star, Filter, ArrowLeft, ExternalLink } from "lucide-react";

interface StoreLocatorProps {
  onBack: () => void;
}

const StoreLocator = ({ onBack }: StoreLocatorProps) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedStore, setSelectedStore] = useState<string | null>(null);

  const physicalStores = [
    {
      id: "1",
      name: "Sephora - Downtown",
      address: "123 Main Street, Downtown",
      distance: "0.5 miles",
      rating: 4.6,
      reviews: 847,
      phone: "(555) 123-4567",
      hours: "10:00 AM - 9:00 PM",
      brands: ["CeraVe", "The Ordinary", "Neutrogena"],
      specialOffers: ["20% off skincare", "Free consultation"]
    },
    {
      id: "2",
      name: "CVS Pharmacy",
      address: "456 Oak Avenue, Midtown",
      distance: "1.2 miles",
      rating: 4.2,
      reviews: 523,
      phone: "(555) 234-5678",
      hours: "8:00 AM - 10:00 PM",
      brands: ["CeraVe", "Neutrogena", "L'Oréal"],
      specialOffers: ["Buy 2 Get 1 Free"]
    },
    {
      id: "3",
      name: "Ulta Beauty",
      address: "789 Shopping Plaza, Westside",
      distance: "2.1 miles",
      rating: 4.8,
      reviews: 1204,
      phone: "(555) 345-6789",
      hours: "10:00 AM - 8:00 PM",
      brands: ["La Mer", "SK-II", "Drunk Elephant"],
      specialOffers: ["Platinum member rewards", "Birthday gift"]
    }
  ];

  const onlineStores = [
    {
      id: "4",
      name: "Amazon",
      rating: 4.3,
      deliveryTime: "1-2 days",
      shipping: "Free with Prime",
      specialOffers: ["Subscribe & Save 15%", "Lightning deals"],
      url: "amazon.com"
    },
    {
      id: "5",
      name: "Sephora Online",
      rating: 4.7,
      deliveryTime: "2-3 days",
      shipping: "Free over $35",
      specialOffers: ["Beauty Insider rewards", "Free samples"],
      url: "sephora.com"
    },
    {
      id: "6",
      name: "Target.com",
      rating: 4.4,
      deliveryTime: "2-5 days",
      shipping: "Free over $35",
      specialOffers: ["RedCard 5% off", "Same-day pickup"],
      url: "target.com"
    }
  ];

  const StoreCard = ({ store, isOnline = false }: { store: any, isOnline?: boolean }) => (
    <Card className={`p-6 glass-card hover:shadow-xl transition-all duration-300 cursor-pointer ${
      selectedStore === store.id ? 'ring-2 ring-blush-300 bg-blush-50/50' : 'hover:scale-105'
    }`} onClick={() => setSelectedStore(store.id)}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
            {store.name}
            {isOnline && <ExternalLink className="w-4 h-4 ml-2 text-gray-400" />}
          </h3>
          
          {!isOnline ? (
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{store.address}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Navigation className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium text-blush-600">{store.distance}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">{store.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{store.hours}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <span className="text-sm">🚚 Delivery: {store.deliveryTime}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-sm">📦 Shipping: {store.shipping}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="text-sm">🌐 {store.url}</span>
              </div>
            </div>
          )}
          
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="font-medium">{store.rating}</span>
              {!isOnline && <span className="text-gray-500 text-sm ml-1">({store.reviews} reviews)</span>}
            </div>
          </div>
          
          {!isOnline && store.brands && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Available Brands:</p>
              <div className="flex flex-wrap gap-1">
                {store.brands.map((brand: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {brand}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-700">Special Offers:</p>
            {store.specialOffers.map((offer: string, index: number) => (
              <Badge key={index} className="mr-1 mb-1 bg-gradient-to-r from-mint-100 to-mint-200 text-mint-700 text-xs">
                {offer}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <Button 
          size="sm" 
          variant="outline"
          className="hover:scale-105 transition-all duration-300"
        >
          {isOnline ? 'Visit Website' : 'Get Directions'}
        </Button>
        
        <Button 
          size="sm"
          className="bg-gradient-to-r from-blush-500 to-lavender-500 hover:from-blush-600 hover:to-lavender-600 text-white"
        >
          {isOnline ? 'Shop Now' : 'Call Store'}
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
            Find Your Products
          </h2>
          <p className="text-xl text-gray-600">
            Locate nearby stores or shop online with the best deals
          </p>
        </div>

        {/* Search Bar */}
        <Card className="p-6 glass-card mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Enter your location (e.g., New York, NY)"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10 rounded-full border-2 border-gray-200 focus:border-blush-300"
              />
            </div>
            <Button className="bg-gradient-to-r from-blush-500 to-lavender-500 hover:from-blush-600 hover:to-lavender-600 text-white px-6 rounded-full">
              <Navigation className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Filter className="w-4 h-4" />
            </Button>

          </div>
        </Card>

        {/* Store Types */}
        <div className="mb-12">
          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 glass-card">
              <TabsTrigger 
                value="physical" 
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blush-500 data-[state=active]:to-lavender-500 data-[state=active]:text-white"
              >
                <MapPin className="w-4 h-4" />
                <span>Physical Stores</span>
              </TabsTrigger>
              <TabsTrigger 
                value="online"
                className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-mint-500 data-[state=active]:to-mint-600 data-[state=active]:text-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Online Stores</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="physical" className="animate-scale-in">
              <div className="mb-8">
                <Card className="p-6 glass-card bg-gradient-to-r from-blush-50 to-lavender-50 border-blush-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blush-400 to-lavender-400 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Nearby Physical Stores</h3>
                      <p className="text-gray-600">Visit in-person for product testing and expert advice</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {physicalStores.map((store) => (
                  <StoreCard key={store.id} store={store} />
                ))}
              </div>
              
              {/* Map Placeholder */}
              <Card className="p-8 glass-card">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                    <p className="text-gray-500">Map integration would display store locations here</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="online" className="animate-scale-in">
              <div className="mb-8">
                <Card className="p-6 glass-card bg-gradient-to-r from-mint-50 to-mint-100 border-mint-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mint-400 to-mint-500 flex items-center justify-center mr-4">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Online Retailers</h3>
                      <p className="text-gray-600">Shop from home with convenient delivery options</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {onlineStores.map((store) => (
                  <StoreCard key={store.id} store={store} isOnline={true} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Price Comparison */}
        <Card className="p-8 glass-card mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Price Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Product</th>
                  <th className="text-center py-3 px-4 font-semibold">Amazon</th>
                  <th className="text-center py-3 px-4 font-semibold">Sephora</th>
                  <th className="text-center py-3 px-4 font-semibold">CVS</th>
                  <th className="text-center py-3 px-4 font-semibold">Best Deal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">CeraVe Foaming Cleanser</td>
                  <td className="text-center py-3 px-4">$12.99</td>
                  <td className="text-center py-3 px-4">$14.99</td>
                  <td className="text-center py-3 px-4">$13.49</td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-green-100 text-green-700">Amazon</Badge>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">The Ordinary Niacinamide</td>
                  <td className="text-center py-3 px-4">$7.20</td>
                  <td className="text-center py-3 px-4">$6.50</td>
                  <td className="text-center py-3 px-4">N/A</td>
                  <td className="text-center py-3 px-4">
                    <Badge className="bg-green-100 text-green-700">Sephora</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Back Button */}
        <div className="text-center">
          <Button 
            onClick={onBack}
            variant="outline"
            className="flex items-center space-x-2 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 mx-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Products</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
