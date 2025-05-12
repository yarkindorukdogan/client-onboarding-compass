
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Download, Key, Network, Info, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface SidebarItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Overview",
    path: "/",
    icon: <Info className="h-5 w-5" />,
  },
  {
    title: "Software Downloads",
    path: "/software",
    icon: <Download className="h-5 w-5" />,
  },
  {
    title: "PIN Setup",
    path: "/pin-setup",
    icon: <Key className="h-5 w-5" />,
  },
  {
    title: "Network & Intranet",
    path: "/intranet",
    icon: <Network className="h-5 w-5" />,
  },
];

export function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div 
      className={cn(
        "h-screen bg-sidebar border-r border-border flex flex-col transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between border-b">
        {!collapsed && (
          <h2 className="text-lg font-semibold text-primary">IT Onboarding</h2>
        )}
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto" 
          onClick={() => setCollapsed(!collapsed)}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md transition-colors",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground",
                  collapsed && "justify-center"
                )}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t text-center">
        {!collapsed && <p className="text-xs text-muted-foreground">Company IT Guides © 2025</p>}
      </div>
    </div>
  );
}
