
import { GuideLayout } from "@/components/GuideLayout";
import { StepItem } from "@/components/StepItem";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Key } from "lucide-react";
import { Link } from "react-router-dom";

const PinSetup = () => {
  return (
    <GuideLayout>
      <Link to="/" className="flex items-center text-sm text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Overview
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-primary">PIN Setup Guide</h1>
        <p className="text-lg text-muted-foreground">
          How to create and manage your security PIN code
        </p>
      </div>

      <div className="space-y-6 guide-content">
        <p>
          Your PIN code is a critical security measure that protects access to our network resources.
          Follow these steps to set up your PIN and understand the policies around PIN management.
        </p>

        <div className="bg-muted/30 rounded-lg p-5 border mb-8">
          <h3 className="flex items-center text-lg font-medium mb-3">
            <Key className="h-5 w-5 mr-2 text-primary" />
            PIN Code Requirements
          </h3>
          <ul className="space-y-2 pl-7 list-disc">
            <li>Must be between 6-8 digits</li>
            <li>Cannot contain sequential numbers (e.g., 1234)</li>
            <li>Cannot contain more than two identical consecutive digits (e.g., 1123)</li>
            <li>Cannot be the same as your previous 3 PINs</li>
            <li>Must be changed every 90 days</li>
          </ul>
        </div>

        <Card>
          <CardContent className="pt-6">
            <StepItem 
              title="Create Your New PIN" 
              description="If not determined before, the system will automatically ask for you to set up a secure PIN that meets all requirements"
              index={1}
            >
              <div className="space-y-3 text-sm">
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Click the "Create New PIN" button on the PIN Management page
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Enter your desired PIN in the first field
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Confirm your PIN by entering it again in the second field
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  The system will validate your PIN against the security requirements
                </p>
              </div>
            </StepItem>
			
            <StepItem 
              title="Activate Your PIN" 
              description="Complete the PIN setup process"
              index={3}
              isLastStep={true}
            >
              <div className="space-y-3 text-sm">
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  After creating the pin, it will be immediately activated.
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Your new PIN will now be required for logging in every single time.
                </p>
              </div>
            </StepItem>
          </CardContent>
        </Card>

        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
          <h3 className="text-lg font-medium text-primary mb-2">PIN Security Tips</h3>
          <ul className="space-y-1 pl-5 list-disc text-sm">
            <li>Never share your PIN with anyone, including IT staff</li>
            <li>Avoid using easily guessable numbers (birthdays, address numbers, etc.)</li>
            <li>Don't store your PIN in writing or digital notes</li>
            <li>If you suspect your PIN has been compromised, change it immediately</li>
          </ul>
        </div>
      </div>
    </GuideLayout>
  );
};

export default PinSetup;
