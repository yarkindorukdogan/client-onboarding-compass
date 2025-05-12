
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GuideCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  className?: string;
}

export function GuideCard({ title, description, icon, path, className }: GuideCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in", className)}>
      <CardHeader className="pb-3">
        <div className="mb-2 inline-flex p-2 bg-primary/10 rounded-md text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <p className="text-muted-foreground">Click to view detailed guide</p>
      </CardContent>
      <CardFooter className="pt-3">
        <Button asChild className="w-full">
          <Link to={path}>View Guide</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
