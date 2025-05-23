import { GuideCard } from "@/components/GuideCard";
import { Key, Network, Rocket } from "lucide-react";

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
    </div>
  );
};

export default Index;
