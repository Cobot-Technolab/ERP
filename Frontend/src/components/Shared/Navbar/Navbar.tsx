import { useState } from "react";
import {
  BadgeDollarSign,
  Bell,
  BotMessageSquare,
  Brain,
  Calendar,
  ChevronDown,
  Database,
  Edit,
  HandCoins,
  HardHat,
  Heart,
  MessageCircle,
  QrCode,
  ShoppingBag,
  TrendingUpDown,
  Truck,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/UI/button";
import { Link } from "react-router-dom";
import Dropdown, { DropDownItem } from "@/components/UI/Dropdown";
import LanguageSelector from "./LanguageSelector";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState<{ [key: string]: boolean }>({
    apps: false,
    services: false,
    features: false,
    community: false,
  });
  const menuInfo = [
    {
      title: "Apps",
      link: "/",
      subMenu: [
        {
          title: "Accounting & Finance",
          icon: <HardHat className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Inventory & Sales",
          icon: <ShoppingBag className="w-6 h-6" />,
          link: "/",
        },
        {

          title: "Human Resource Management (HRM)",
          icon: <Brain className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "POS",
          icon: <Truck className="w-6 h-6" />,
          link: "/",
        },
      ],
    },
    {
      title: "Services",
      link: "/",
      subMenu: [
        {
          title: "AI-driven HR helpdesk",
          icon: <HardHat className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "AI assistant for business queries",
          icon: <BotMessageSquare className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Invoicing & payment processing",
          icon: <WalletCards className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Expense tracking & Reimbursement",
          icon: <BadgeDollarSign className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Tax & Vat compliances",
          icon: <HandCoins className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Financial reports",
          icon: <Calendar className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Product & SKU management",
          icon: <ShoppingBag className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Purchase order and supplier management",
          icon: <Truck className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Barcode & QR code scanning",
          icon: <QrCode className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Notification & Alerts",
          icon: <Bell className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Payroll management, attendance and tracking",
          icon: <WalletCards className="w-6 h-6" />,
          link: "/",
        },
      ],
    },
    {
      title: "Community",
      link: "/",
      subMenu: [
        {
          title: "Forum",
          icon: <MessageCircle className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Blog",
          icon: <Edit className="w-6 h-6" />,
          link: "/",
        },
        {
          title: "Events",
          icon: <Calendar className="w-6 h-6" />,
          link: "/",
        },
      ],
    },
    {
      title: "Plans & Pricing",
      link: "/",
    },
  ];
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-background`}
    >
      <div className="lg:container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/ledgrbookLogo.png" alt="LEDGRBOOK" className="xsm:h-36 h-32" />
            </Link>
          </div>
          <LanguageSelector className="hidden xsm:block lg:hidden" />
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuInfo.map((menu, index) => {
              return !menu.subMenu ? (
                <Link
                  to="/"
                  className="group relative py-2 text-primary transition-colors"
                >
                  {menu.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                </Link>
              ) : (
                <div
                  key={`menu-${index}`}
                  className="relative"
                  onMouseEnter={() =>
                    setShowDropDown((prevState) => ({
                      ...prevState,
                      [menu.title.toLowerCase()]: true,
                    }))
                  }
                  onMouseLeave={() =>
                    setShowDropDown((prevState) => ({
                      ...prevState,
                      [menu.title.toLowerCase()]: false,
                    }))
                  }
                >
                  <div className="py-2 flex items-center text-primary transition-colors">
                    {menu.title}
                    <ChevronDown
                      className={`ml-1 w-4 h-4 ${
                        showDropDown[menu.title.toLowerCase()] && "rotate-180"
                      }`}
                    />
                  </div>
                  {showDropDown[menu.title.toLowerCase()] && (
                    <Dropdown
                      className={`absolute top-11 left-1/2 -translate-x-1/2 ${
                        menu.title.toLowerCase() === "community"
                          ? "w-60"
                          : menu.title.toLowerCase() === "services"
                          ? "w-[800px]"
                          : "w-72"
                      }`}
                    >
                      {menu.title === "Services" ? (
                        // 3 column dropdown for services
                        <div className="grid grid-cols-3 gap-4 p-4 items-center">
                          {menu.subMenu.map((subMenu, index) => (
                            <DropDownItem key={index}>
                              <Link to={subMenu.link}>
                                <div className="flex items-center gap-4">
                                  <span className={"text-primary"}>
                                    {subMenu.icon}
                                  </span>
                                  <div>
                                    <h3 className="text-md font-semibold text-primary">
                                      {subMenu.title}
                                    </h3>
                                  </div>
                                </div>
                              </Link>
                            </DropDownItem>
                          ))}
                        </div>
                      ) : (
                        //1 column dropdown for other menus
                        menu.subMenu.map((subMenu, index) => (
                          <DropDownItem key={index}>
                            <Link to={subMenu.link}>
                              <div className="flex items-center gap-4">
                                <span className={"text-primary"}>
                                  {subMenu.icon}
                                </span>
                                <div>
                                  <h3 className="text-md font-semibold text-primary">
                                    {subMenu.title}
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          </DropDownItem>
                        ))
                      )}
                    </Dropdown>
                  )}
                </div>
              );
            })}
          </div>
          <div className="rightSideLinks hidden lg:flex items-center gap-2">
            <LanguageSelector />
            <Button variant={"outline"} className="text-md min-w-24 py-5">
              Login
            </Button>
            <Button variant={"default"} className="text-md min-w-24 py-[22px] ">
              Get Started
            </Button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-blue-200 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background py-4 max-w-md mx-auto border-t border-white/20">
          <LanguageSelector className="block xsm:hidden" />
          {menuInfo.map((menu, index) => {
            return !menu.subMenu ? (
              <Link
                to="/"
                className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
              >
                {menu.title}
              </Link>
            ) : (
              <div key={`menu-${index}`}>
                <div
                  onClick={() =>
                    setShowDropDown({
                      ...showDropDown,
                      [menu.title.toLowerCase()]:
                        !showDropDown[menu.title.toLowerCase()],
                    })
                  }
                  className="flex items-center w-full px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
                >
                  {menu.title}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </div>
                {showDropDown[menu.title.toLowerCase()] && (
                  <div className="pl-4 max-h-64 overflow-auto">
                    {menu.subMenu.map((subMenu, index) => (
                      <Link
                        key={index}
                        to={subMenu.link}
                        className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
                      >
                        {subMenu.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="authLinks px-3 flex flex-wrap gap-4 mt-2">
            <Button variant={"outline"} className="text-md w-24 py-5">
              Login
            </Button>
            <Button variant={"default"} className="text-md w-24 py-[22px]">
              Signup
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
