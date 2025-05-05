
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
      "bg-connect-primary border-r h-screen transition-all duration-300 flex flex-col fixed top-0 left-0 z-50",
      isCollapsed 
        ? "sm:w-20 md:w-30 " // narrow on mobile when collapsed, slightly wider on medium and large screens
        : "sm:w-64 md:w-64 ", // wide on mobile when open, same on medium and large screens
    )}>
    
    
      <div className="flex items-center justify-between p-4 border-b border-gray-200/20">
        <Link to="/" className="flex items-center">
          {isCollapsed ? (
            <div className="flex justify-center w-full">
              <img 
                src="/lovable-uploads/logoconnect-dzcutlight.png" 
                alt="ConnectDZ Logo" 
                className="h-15" 
              />
            </div>
          ) : (
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/415376fc-2da4-49b6-b559-be3cd353d66b.png" 
                alt="ConnectDZ Logo" 
                className="h-14 w-auto" 
              />
            </div>
          )}
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="rounded-full text-white hover:bg-connect-primary/80">
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
                  "flex items-center px-3 py-2 rounded-md text-white hover:bg-connect-accent/10 hover:text-connect-accent transition-colors",
                  location.pathname === item.path && "bg-connect-accent/20 text-connect-accent font-medium",
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
                          "flex items-center px-3 py-2 rounded-md text-white hover:bg-connect-accent/10 hover:text-connect-accent transition-colors text-sm",
                          location.pathname === subItem.path && "bg-connect-accent/20 text-connect-accent font-medium"
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
        "p-4 border-t border-gray-200/20",
        isCollapsed ? "text-center" : ""
      )}>
        <Button className="bg-connect-accent hover:bg-connect-accent/80 text-white w-full">
          {isCollapsed ? "Get" : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
