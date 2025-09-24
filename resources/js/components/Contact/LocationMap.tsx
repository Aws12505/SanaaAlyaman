import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone, Navigation, ExternalLink, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// Restaurant location configuration
interface LocationConfig {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  placeId?: string; // Optional Google Place ID for more accuracy
}

const restaurantLocation: LocationConfig = {
  name: "The Golden Spoon",
  address: "123 Fine Dining Street, New York, NY 10001",
  coordinates: {
    lat: 40.7589, // Example coordinates for Times Square area
    lng: -73.9851
  },
  placeId: "ChIJmQJIxlVYwokRLgeuocVOGVU" // Optional: Replace with actual Place ID
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: [restaurantLocation.address, "Heart of Manhattan"],
    actionText: "Get Directions",
    actionLink: `https://www.google.com/maps/dir/?api=1&destination=${restaurantLocation.coordinates.lat},${restaurantLocation.coordinates.lng}`
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567", "Reservations & Inquiries"],
    actionText: "Call Now",
    actionLink: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@goldenspoon.com", "We'll respond within 24 hours"],
    actionText: "Send Email",
    actionLink: "mailto:hello@goldenspoon.com"
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon-Thu: 5:00 PM - 10:00 PM", "Fri-Sun: 5:00 PM - 11:00 PM"],
    actionText: "View Menu",
    actionLink: "/menu"
  }
];

export const LocationMap: React.FC = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);

  // Method 1: Using Google Maps Embed API (requires API key)
  const getEmbedMapUrl = (apiKey?: string) => {
    if (apiKey) {
      // With API key - more customizable
      return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${restaurantLocation.coordinates.lat},${restaurantLocation.coordinates.lng}&zoom=15&maptype=roadmap`;
    } else {
      // Without API key - using place search
      const query = encodeURIComponent(`${restaurantLocation.name}, ${restaurantLocation.address}`);
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682842998697!2d${restaurantLocation.coordinates.lng}!3d${restaurantLocation.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${query}!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus`;
    }
  };

  // Method 2: Generate Google Maps share URL (no API key needed)
  const getShareMapUrl = () => {
    return `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${restaurantLocation.coordinates.lat},${restaurantLocation.coordinates.lng}+(${encodeURIComponent(restaurantLocation.name)})&t=&z=15&ie=UTF8&iwloc=B&output=embed`;
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${restaurantLocation.coordinates.lat},${restaurantLocation.coordinates.lng}`;
    window.open(url, '_blank');
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${restaurantLocation.coordinates.lat},${restaurantLocation.coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Interactive Map Section */}
      <Card className="overflow-hidden border-0 shadow-xl rounded-2xl group">
        <CardContent className="p-0 relative">
          <div className="relative">
            {/* Google Maps Embed */}
            <iframe
              title="The Golden Spoon Location"
              src={getShareMapUrl()}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-80 lg:h-96 rounded-t-2xl transition-all duration-300 hover:brightness-105"
              onLoad={() => setIsMapLoaded(true)}
            />
            
            {/* Loading overlay */}
            {!isMapLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center rounded-t-2xl">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#ed7f11]/20 rounded-2xl mx-auto animate-pulse">
                    <Navigation className="w-8 h-8 sm:w-10 sm:h-10 text-[#ed7f11]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg sm:text-xl">
                      Loading Map...
                    </h4>
                    <p className="text-sm sm:text-base text-[#897560]">
                      Please wait while we load your location
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Map overlay with actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-t-2xl">
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Button
                  onClick={() => setShowFullscreen(true)}
                  size="icon"
                  variant="secondary"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-lg shadow-lg"
                >
                  <Maximize2 className="w-5 h-5 text-[#161411]" />
                </Button>
                <Button
                  onClick={openInGoogleMaps}
                  size="icon"
                  variant="secondary"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-lg shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 text-[#161411]" />
                </Button>
              </div>

              {/* Location info overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ed7f11] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-sm sm:text-base">
                      {restaurantLocation.name}
                    </h4>
                    <p className="[font-family:'Epilogue-Regular',Helvetica] text-[#897560] text-xs sm:text-sm">
                      {restaurantLocation.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Actions Bar */}
          <div className="p-4 sm:p-6 bg-white">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Button
                onClick={getDirections}
                className="h-11 sm:h-12 bg-[#ed7f11] hover:bg-[#d16d0a] text-[#161411] font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
              
              <Button
                onClick={openInGoogleMaps}
                variant="outline"
                className="h-11 sm:h-12 border-2 border-[#ed7f11] text-[#ed7f11] hover:bg-[#ed7f11] hover:text-[#161411] font-bold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Open in Maps
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {contactInfo.map((info, index) => (
          <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-2xl bg-white">
            <CardContent className="p-6 lg:p-8 h-full">
              <div className="flex flex-col h-full space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#ed7f11]/10 rounded-xl flex items-center justify-center group-hover:bg-[#ed7f11]/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#ed7f11]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base sm:text-lg lg:text-xl mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="[font-family:'Epilogue-Regular',Helvetica] text-[#897560] text-sm sm:text-base break-words">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-[#ed7f11] hover:text-[#d16d0a] hover:bg-transparent group/btn"
                  >
                    <a 
                      href={info.actionLink}
                      target={info.actionLink.startsWith('http') ? '_blank' : undefined}
                      rel={info.actionLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-sm group-hover/btn:underline">
                        {info.actionText}
                      </span>
                      {info.actionLink.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      )}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fullscreen Map Modal */}
      {showFullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
              <Button
                onClick={() => setShowFullscreen(false)}
                size="icon"
                variant="secondary"
                className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-lg shadow-lg"
              >
                <ExternalLink className="w-5 h-5 text-[#161411] rotate-180" />
              </Button>
            </div>
            
            <iframe
              title="The Golden Spoon Location - Fullscreen"
              src={getShareMapUrl()}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};
