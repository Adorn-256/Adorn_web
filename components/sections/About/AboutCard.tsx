import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AboutCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function AboutCard({ Icon, title, description }: AboutCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <div className="text-[#00a3ff]">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
}