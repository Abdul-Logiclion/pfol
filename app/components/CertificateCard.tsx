import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CertificateCardProps {
  Certificate: {
    title: string;
    platform: string;
    icon: string;
    year: string;
  };
}

export default function CertificateCard({ Certificate }: CertificateCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 font-sans">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-3xl">{Certificate.icon}</div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-4 font-medium">{Certificate.title}</h3>
              <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs w-16 h-6 text-center flex items-center justify-center whitespace-nowrap">{Certificate.year}</Badge>
            </div>
            <p className="text-base text-blue-600 font-medium">{Certificate.platform}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  
       
}