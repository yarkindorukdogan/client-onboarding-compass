
import { cn } from "@/lib/utils";
import { Check, ArrowRight } from "lucide-react";

interface StepItemProps {
  title: string;
  description: string;
  index: number;
  isCompleted?: boolean;
  isLastStep?: boolean;
  children?: React.ReactNode;
}

export function StepItem({
  title,
  description,
  index,
  isCompleted = false,
  isLastStep = false,
  children,
}: StepItemProps) {
  return (
    <div className="relative mb-8 last:mb-0">
      {/* Step number/icon */}
      <div
        className={cn(
          "absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium",
          isCompleted
            ? "bg-primary border-primary text-primary-foreground"
            : "border-muted bg-background text-muted-foreground"
        )}
      >
        {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
      </div>
      
      {/* Connecting line */}
      {!isLastStep && (
        <div className="absolute left-4 top-8 -ml-px h-full w-0.5 bg-muted" />
      )}
      
      {/* Content */}
      <div className="ml-12 pt-1 pb-8">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 mb-3 text-muted-foreground">{description}</p>
        {children && <div className="mt-4">{children}</div>}
        {!isLastStep && (
          <div className="mt-4 flex items-center text-sm text-muted-foreground">
            <ArrowRight className="mr-1 h-4 w-4" />
            <span>Continue to next step</span>
          </div>
        )}
      </div>
    </div>
  );
}
