import { Card, CardContent } from "@/components/ui/card";
import { Staff } from "@/types/StaffTypes";
import { MapPin, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface TeamCardProps {
  member: Staff;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="group flex flex-col w-64 sm:w-72 lg:w-full items-start relative flex-shrink-0 lg:flex-shrink rounded-2xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg overflow-hidden bg-white">
      <CardContent className="p-0 w-full h-full flex flex-col">
        {/* Image Section */}
        {member.image && (
          <div className="relative overflow-hidden flex-shrink-0">
            <div
              className={`h-64 sm:h-72 lg:h-80 bg-cover bg-center relative self-stretch w-full group-hover:scale-110 transition-transform duration-500 ${
                !imageLoaded ? 'bg-stone-200 animate-pulse' : ''
              }`}
              style={{ backgroundImage: imageLoaded ? `url(${member.image})` : undefined }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="opacity-0"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Social Links Overlay */}
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <Button
                size="icon"
                variant="secondary"
                className="w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg"
              >
                <Mail className="w-4 h-4 text-[#161411]" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="w-8 h-8 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg"
              >
                <Linkedin className="w-4 h-4 text-[#161411]" />
              </Button>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="flex flex-col items-start relative self-stretch w-full flex-1 p-6 lg:p-8 space-y-3 lg:space-y-4">
          <div className="space-y-1">
            <h3 className="[font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-lg lg:text-xl tracking-tight leading-6 group-hover:text-[#ed7f11] transition-colors">
              {member.name}
            </h3>
            
            <div className="[font-family:'Epilogue-Medium',Helvetica] font-medium text-[#ed7f11] text-sm lg:text-base tracking-[0] leading-5">
              {member.role}
            </div>
          </div>
          
          {member.bio && (
            <p className="[font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm lg:text-base tracking-[0] leading-relaxed flex-1">
              {member.bio}
            </p>
          )}

          {/* Additional Info */}
          <div className="flex items-center gap-2 text-xs lg:text-sm text-[#897560] pt-2">
            <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
            <span>New York, NY</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
