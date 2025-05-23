
import { GuideLayout } from "@/components/GuideLayout";
import { StepItem } from "@/components/StepItem";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

const PythonSetup = () => {
  return (
    <GuideLayout>
      <Link to="/" className="flex items-center text-sm text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Overview
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-primary">Python Installation Guide</h1>
        <p className="text-lg text-muted-foreground">
          Follow these steps to install Python on your work machine
        </p>
      </div>

      <div className="space-y-6 python-guide-content">
        <p>
          Python is a powerful programming language that's versatile and widely used in the company.
          Follow these steps to get it properly installed on your machine.
        </p>

        <Card>
          <CardContent className="pt-6">
            <StepItem 
              title="Order from BSH Software Shop" 
              description="Navigate through BSH Intranet -> IT Service Portal/ IT Shop"
              index={0}
            >
              <div className="python-step-container space-y-4 text-sm">
                {/* Screenshot added here */}
                <div className="python-screenshot-wrapper rounded-md overflow-hidden border border-muted">
                  <img 
                    src="/placeholder.svg" 
                    alt="Screenshot of BSH Software Shop" 
                    className="python-screenshot w-full h-auto"
                  />
                </div>
                
                <div className="python-step-checks space-y-3">
                  <p className="flex items-start">
                    <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                    If the computer owner is not a user, the other user must be entered in the free text field.
                  </p>
                  <p className="flex items-start">
                    <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                    If this is your first time, log in with your network credentials
                  </p>
                  <p className="flex items-start">
                    <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                    The system may ask to save your credentials for future access
                  </p>
                </div>
              </div>
            </StepItem>

            <StepItem 
              title="Select Python Version" 
              description="Choose the appropriate Python version for your needs"
              index={1}
            >
              <div className="python-step-container space-y-3 text-sm">
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Python 3.11 is recommended for most users
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  For legacy projects, Python 2.7 might be required (check with your team lead)
                </p>
              </div>
            </StepItem>

            <StepItem 
              title="Complete Installation" 
              description="Finish the Python installation process"
              index={2}
              isLastStep={true}
            >
              <div className="python-step-container space-y-3 text-sm">
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  After installation is complete, open Command Prompt or PowerShell
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Type <code className="bg-muted px-1 py-0.5 rounded">python --version</code> to verify the installation
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  You should see the version number if the installation was successful
                </p>
              </div>
            </StepItem>
          </CardContent>
        </Card>

        <div className="bg-primary/5 rounded-lg p-5 border border-primary/20">
          <h3 className="text-lg font-medium text-primary mb-2">Need Help with Python Installation?</h3>
          <p className="text-sm">
            If you encounter any issues with downloading or installing Python,
            please contact the IT support team at extension 1050 (Bretten) or submit a ticket through the IT Service Portal.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default PythonSetup;
