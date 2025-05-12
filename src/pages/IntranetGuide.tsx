
import { GuideLayout } from "@/components/GuideLayout";
import { StepItem } from "@/components/StepItem";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Network, Info, Check } from "lucide-react";
import { Link } from "react-router-dom";

const IntranetGuide = () => {
  return (
    <GuideLayout>
      <Link to="/" className="flex items-center text-sm text-muted-foreground mb-6 hover:text-foreground">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Overview
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-primary">Network & Intranet Guide</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to access and use the network resources
        </p>
      </div>

      <div className="space-y-6 guide-content">
        <p>
          Intranet provides access to important company resources, tools, and information.
          This guide will help you understand how to connect to the network and use the intranet effectively.
        </p>

        <Tabs defaultValue="access" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="access">Accessing Network</TabsTrigger>
            <TabsTrigger value="intranet">Using Intranet</TabsTrigger>
            <TabsTrigger value="resources">Key Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="access">
            <Card>
              <CardContent className="pt-6">
                <StepItem 
                  title="Connect to the Company Network" 
                  description="There is nothing to do extra, the internet connection in office will be made automatically through Wi-Fi."
                  index={0}
                >
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      If not, request and enter the network password provided by IT support
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Your device will be authenticated on the network
                    </p>
                  </div>
                </StepItem>

                <StepItem 
                  title="Remote Connection Setup" 
                  description="Accessing the network when working remotely"
                  index={1}
                >
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Launch the VPN client (Cisco Secure Client) installed on your device.
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Enter your company username and password (new one after changing the default)
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      If prompted, enter your PIN code
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Wait for the connection to be established (usually 5-10 seconds)
                    </p>
                  </div>
                </StepItem>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="intranet">
            <Card>
              <CardContent className="pt-6">
                <StepItem 
                  title="Accessing the Intranet Portal" 
                  description="Navigate to the company intranet homepage"
                  index={0}
                >
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Open your web browser and navigate to <span className="font-medium">https://intranet.bsh-group.com</span>
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
                </StepItem>

                <StepItem 
                  title="Intranet Navigation" 
                  description="Understanding the intranet structure and layout"
                  index={1}
                >
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      The top navigation bar contains links to main sections (HR, IT, Finance, etc.)
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      The "My Apps" in the latter right can be used to set up a new password (Bosch Password Change), BSH Learning Hub to trainings-interface, BSH Portal to see your working hours,
					  absence reports and every given personal data to Bosch.
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Your personalized dashboard appears on the homepage with relevant information.
                    </p>
                  </div>
                </StepItem>

                <StepItem 
                  title="Using Intranet Applications" 
                  description="Accessing and using key intranet tools"
                  index={2}
                  isLastStep={true}
                >
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Click on the "Applications" tab to see all available intranet tools
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      You can add frequently used applications to your favorites for quick access
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Most applications will use your network login (single sign-on)
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Some specialized applications may require additional permissions from your manager
                    </p>
                  </div>
                </StepItem>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-5 border">
                <h3 className="flex items-center text-lg font-medium mb-3">
                  <Network className="h-5 w-5 mr-2 text-primary" />
                  Essential Intranet Resources
                </h3>
                <ul className="space-y-3 pl-7 list-disc">
                  <li>
                    <strong>Document Repository</strong> - Access shared company documents and templates
                    <p className="text-sm text-muted-foreground mt-1">Location: Resources {'>'}  Documents</p>
                  </li>
                  <li>
                    <strong>Time & Attendance System</strong> - Log or track your working hours and request time off
                    <p className="text-sm text-muted-foreground mt-1">Location: HR Portal {'>'}  Time Tracking</p>
                  </li>
                  <li>
                    <strong>IT Service Desk</strong> - Submit IT support tickets and track their status
                    <p className="text-sm text-muted-foreground mt-1">Location: IT Support {'>'}  Service Desk</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-5 border border-primary/20">
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Getting Help with the Intranet</h3>
                    <p className="text-sm mb-3">
                      If you need assistance with the intranet or any network resources, you can:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc text-sm">
                      <li>Click the "Help" icon in the top right corner of the intranet portal</li>
                      <li>Contact the IT Service Desk at extension 1050 (Bretten) </li>
                      <li>Email https://bsh.service-now.com/now/nav/ui/classic/params/target/home.do with your specific question</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </GuideLayout>
  );
};

export default IntranetGuide;
