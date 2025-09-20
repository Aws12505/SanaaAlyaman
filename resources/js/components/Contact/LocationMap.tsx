import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Main Street", "Anytown, USA 12345"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567", "(555) 987-6543"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@goldenspoon.com", "reservations@goldenspoon.com"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 11:00 AM - 10:00 PM", "Sat-Sun: 10:00 AM - 11:00 PM"]
  }
];

export const LocationMap: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Map Placeholder */}
      <Card className="overflow-hidden border-0 shadow-xl">
        <CardContent className="p-0">
          <div className="h-80 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#ed7f11] mx-auto mb-4" />
              <p className="text-[#897560] font-medium">Interactive Map</p>
              <p className="text-sm text-gray-500">Map integration would go here</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ed7f11] rounded-full flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#161411] mb-2">{info.title}</h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-[#897560] text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
