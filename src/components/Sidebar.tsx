
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Info, HelpCircle, Users, Menu, List } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { path: "/", label: "Home", icon: <Home size={20} /> },
    { path: "/about", label: "About Us", icon: <Info size={20} /> },
    { path: "/how-it-works", label: "How It Works", icon: <HelpCircle size={20} /> },
    { 
      path: "#",
      label: "Our Specialized Pathways", 
      icon: <List size={20} />,
      submenu: [
        { path: "/under-18", label: "Under 18" },
        { path: "/young-adults", label: "Ages 18-25" },
        { path: "/adults", label: "Ages 25+" },
        { path: "/reorientation", label: "Reorientation" }
      ]
    },
    { path: "/partners", label: "Partners", icon: <Users size={20} /> },
  ];

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 h-screen transition-all duration-300 flex flex-col",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          {isCollapsed ? (
            <img src="/lovable-uploads/415376fc-2da4-49b6-b559-be3cd353d66b.png" alt="ConnectDZ Logo" className="h-10" />
          ) : (
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/415376fc-2da4-49b6-b559-be3cd353d66b.png" alt="ConnectDZ Logo" className="h-14" />
              <span className="font-semibold text-connect-primary text-lg">ConnectDZ</span>
            </div>
          )}
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="rounded-full">
          <Menu size={20} />
        </Button>
      </div>

      <div className="flex flex-col flex-grow overflow-y-auto py-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path === '#' ? '#' : item.path}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-connect-accent/10 hover:text-connect-primary transition-colors",
                  location.pathname === item.path && "bg-connect-accent/20 text-connect-primary font-medium",
                  isCollapsed && "justify-center"
                )}
              >
                <span className="mr-3">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
              
              {item.submenu && !isCollapsed && (
                <ul className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-connect-accent/10 hover:text-connect-primary transition-colors text-sm",
                          location.pathname === subItem.path && "bg-connect-accent/20 text-connect-primary font-medium"
                        )}
                      >
                        <span>{subItem.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={cn(
        "p-4 border-t border-gray-200",
        isCollapsed ? "text-center" : ""
      )}>
        <Button className="bg-connect-primary hover:bg-connect-secondary w-full">
          {isCollapsed ? "Get" : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
