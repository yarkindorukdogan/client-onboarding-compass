
import { GuideCard } from "@/components/GuideCard";
import { Key, Network, Rocket, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Welcome to the BSH Guide</h1>
        <p className="text-muted-foreground text-lg">
          Your go-to resource for onboarding and essential tools.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <GuideCard
          title="Network & Intranet Guide"
          description="Learn how to connect to the company network and use intranet resources."
          icon={<Network className="h-6 w-6" />}
          path="/intranet-guide"
        />
        <GuideCard
          title="Software Downloads"
          description="Essential software and tools for your daily work."
          icon={<Rocket className="h-6 w-6" />}
          path="/software-guide"
        />
        
        <GuideCard
          title="Python Installation"
          description="How to install Python in steps."
          icon={<Key className="h-6 w-6" />}
          path="/python-setup"
        />
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Quick Start Guide</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="home-quick-step mb-8">
              <h3 className="text-lg font-semibold mb-2">Step 1: Setting Up Your Workspace</h3>
              <p className="text-muted-foreground mb-4">Complete these tasks to set up your physical and digital workspace</p>
              
              {/* Screenshot part */}
              <div className="home-screenshot-wrapper rounded-md overflow-hidden border border-muted mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Workspace setup example" 
                  className="home-screenshot w-full h-auto"
                />
              </div>
              
              <div className="home-step-checks space-y-3 text-sm">
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Adjust your chair and desk to ergonomic height settings
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Set up dual monitors according to IT recommendations
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Connect to the printer nearest to your desk location
                </p>
              </div>
            </div>
            
            <div className="home-quick-step mb-8">
              <h3 className="text-lg font-semibold mb-2">Step 2: Account Setup</h3>
              <p className="text-muted-foreground mb-4">Essential accounts you need to configure</p>
              
              <div className="home-step-checks space-y-3 text-sm">
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Set up your company email with Microsoft Outlook
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Configure Teams for company communication
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Log in to the project management system with your credentials
                </p>
              </div>
            </div>
            
            <div className="home-quick-step">
              <h3 className="text-lg font-semibold mb-2">Step 3: Department-Specific Tools</h3>
              <p className="text-muted-foreground mb-4">Tools specific to your department</p>
              
              <div className="home-step-checks space-y-3 text-sm">
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Install specialized software based on your department's needs
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Request access to department-specific databases
                </p>
                <p className="flex items-start">
                  <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                  Schedule orientation with your team lead for tool training
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
