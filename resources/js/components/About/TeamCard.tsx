import { Card, CardContent } from "@/components/ui/card";
import { Staff } from "@/types/StaffTypes";
import React from "react";

interface TeamCardProps {
  member: Staff;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Card className="flex flex-col min-w-[240px] w-60 items-start gap-4 relative flex-[0_0_auto] rounded-lg">
      <CardContent className="p-0 w-full">
        {member.image && (
          <div
            className="h-60 rounded-t-lg bg-cover bg-[50%_50%] relative self-stretch w-full"
            style={{ backgroundImage: `url(${member.image})` }}
          />
        )}

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] p-4">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#161411] text-base tracking-[0] leading-6">
            {member.name}
          </div>
          
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Medium',Helvetica] font-medium text-[#ed7f11] text-sm tracking-[0] leading-[21px]">
            {member.role}
          </div>
          
          {member.bio && (
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#897560] text-sm tracking-[0] leading-[21px] mt-2">
              {member.bio}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
