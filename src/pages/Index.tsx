
import { GuideLayout } from "@/components/GuideLayout";
import { GuideCard } from "@/components/GuideCard";
import { Download, Key, Network, Info } from "lucide-react";

const Index = () => {
  return (
    <GuideLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-primary">Welcome to IT Onboarding</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to get started with our client network.
        </p>
      </div>

      <div className="mb-8 p-6 bg-muted/30 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-2">
          Welcome to our organization! This guide will help you set up everything you
          need to work effectively with the Bosch Corporate Client Network.
        </p>
        <p>
          Follow the guides below to learn how to download the required softwares, set up your
          PIN code, and learn how to use the intranet resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GuideCard
          title="Software Downloads"
          description="Essential applications needed to download and install."
          icon={<Download className="h-6 w-6" />}
          path="/software"
        />
        
        <GuideCard
          title="PIN Setup"
          description="How to create and manage your security PIN code."
          icon={<Key className="h-6 w-6" />}
          path="/pin-setup"
        />
        
        <GuideCard
          title="Network & Intranet"
          description="Guidelines for accessing and using our intranet resources."
          icon={<Network className="h-6 w-6" />}
          path="/intranet"
        />
        
        <GuideCard
          title="Help & Support"
          description="Additional resources and contact information for IT support."
          icon={<Info className="h-6 w-6" />}
          path="/"
          className="bg-primary/5"
        />
      </div>
    </GuideLayout>
  );
};

export default Index;
