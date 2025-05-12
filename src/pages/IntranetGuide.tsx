
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
          Learn how to access and use our network resources
        </p>
      </div>

      <div className="space-y-6 guide-content">
        <p>
          Our intranet provides access to important company resources, tools, and information.
          This guide will help you understand how to connect to the network and use our intranet effectively.
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
                  description="Establishing your initial connection"
                  index={0}
                >
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Connect your device to the office WiFi named "CompanySecure"
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      When prompted, enter the network password provided by IT support
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
                      Launch the VPN client installed on your device (see Software Downloads guide)
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Enter your company username and password
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      When prompted, enter your PIN code
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Wait for the connection to be established (usually 5-10 seconds)
                    </p>
                  </div>
                </StepItem>

                <StepItem 
                  title="Network Drive Mapping" 
                  description="Setting up access to shared network drives"
                  index={2}
                  isLastStep={true}
                >
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Right-click on "This PC" (Windows) or use Finder (macOS) to connect to server
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Enter the server address: \\company-server\shared
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Use your network credentials when prompted
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Select the option to reconnect at sign-in for persistent access
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
                      Open your web browser and navigate to <span className="font-medium">https://intranet.company.internal</span>
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
                      The search bar in the upper right corner can be used to find specific information
                    </p>
                    <p className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                      Your personalized dashboard appears on the homepage with relevant information
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
                    <strong>Employee Directory</strong> - Find contact information for all employees
                    <p className="text-sm text-muted-foreground mt-1">Location: HR Portal > Directory</p>
                  </li>
                  <li>
                    <strong>Document Repository</strong> - Access shared company documents and templates
                    <p className="text-sm text-muted-foreground mt-1">Location: Resources > Documents</p>
                  </li>
                  <li>
                    <strong>Time & Attendance System</strong> - Log your working hours and request time off
                    <p className="text-sm text-muted-foreground mt-1">Location: HR Portal > Time Tracking</p>
                  </li>
                  <li>
                    <strong>IT Service Desk</strong> - Submit IT support tickets and track their status
                    <p className="text-sm text-muted-foreground mt-1">Location: IT Support > Service Desk</p>
                  </li>
                  <li>
                    <strong>Meeting Room Booking</strong> - Reserve conference rooms and resources
                    <p className="text-sm text-muted-foreground mt-1">Location: Facilities > Room Booking</p>
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
                      <li>Contact the IT Service Desk at extension 1234</li>
                      <li>Email support@company.com with your specific question</li>
                      <li>Visit the IT Support office on the 2nd floor during business hours</li>
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
