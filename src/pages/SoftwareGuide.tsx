import { GuideLayout } from "@/components/GuideLayout";
import { StepItem } from "@/components/StepItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Image } from "@/components/Image";

const SoftwareGuide = () => {
  const handleDownloadClick = () => {
    toast.success("Download link copied to clipboard!");
  };

  return (
    <GuideLayout>
      <Link to="/" className="flex items-center text-sm text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Overview
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-primary">Software Downloads</h1>
        <p className="text-lg text-muted-foreground">
          Essential applications you need to download and install changes based on your working field, but the steps for a download is completely identical.
        </p>
      </div>

      <div className="space-y-6 guide-content">
        <p>
          To work efficiently with our client network, you'll need to install several key applications.
          Follow the steps below to download and set up each required software.
        </p>

        <Card>
          <CardContent className="pt-6">
            <StepItem 
              title="Go to Software Center (IT-Workplace Toolkit)" 
              description="Has the wrench icon, can be found in the toolbar on bottom right corner"
              index={0}
            >
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">IWT v4.07.0312.1 (05.2025) </h4>
                <p className="text-xs mt-3 text-muted-foreground">
                  * After suggested initial installations, a restart of the computer is needed.
                </p>
              </div>
            </StepItem>

            <StepItem 
              title="Check or Demand Softwares" 
              description="If your supervisor already demanded the required software for you, all there is left to click on check now - (jetzt prüfen), if not; it is needed to click on Add/Remove Software and select your computer, needed software with suitable version and then demand from IT-Service Portal"  
              index={1}
            >
            </StepItem>

            <StepItem 
              title="Updates - Restarts" 
              description="The Software Center will have a red dot on it if there's an update regarding a software or a complete restart is needed. Make sure to check this part often in your first weeks."
              index={2}
            >
            </StepItem>

            <StepItem 
              title="Communication Ways" 
              description="Outlook for Mails - Calendars and MCTeams for calls, briefings, meetings"
              index={3}
            >
            </StepItem>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Python Installation</h2>
        <Card>
          <CardContent className="pt-6">
            <StepItem 
              title="Order Python" 
              description="Intranet -> IT Service Portal/ IT Shop"
              index={0}
            >
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <Image 
                  src="https://raw.githubusercontent.com/yarkindorukdogan/client-onboarding-compass/main/PythonOrder.png" 
                  alt="Python Ordering Page Interface" 
                  className="w-full h-auto object-cover rounded-md" 
                />
              </div>
            </StepItem>

            <StepItem 
              title="Important by Order Process" 
              description="If the computer owner is not a user, the other user must be entered in the free text field."
              index={1}
            >
            </StepItem>

            <StepItem 
              title="Verify Installation" 
              description="Open command prompt and type 'python --version' to confirm successful installation"
              index={2}
              isLastStep={true}
            >
            </StepItem>
          </CardContent>
        </Card>

        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
          <h3 className="text-lg font-medium text-primary mb-2">Help with Software Installation</h3>
          <p className="text-sm">
            If you encounter any issues with downloading or installing the required software,
            please contact the IT support team at <span className="font-medium"> https://service-management.bosch.tech/sp?id=it_service_portal_home </span> or
            local call extension 1050 (Bretten).
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default SoftwareGuide;
