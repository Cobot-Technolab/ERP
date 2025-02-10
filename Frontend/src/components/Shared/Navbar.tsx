import { useState } from "react";
import { Calendar, ChevronDown, Edit, MessageCircle } from "lucide-react";
import { Button } from "../UI/button";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-background`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/ledgrbookLogo.png" alt="LEDGRBOOK" className="h-36" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="group relative py-2 text-primary transition-colors"
            >
              Apps & Features
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowCommunity(true)}
              onMouseLeave={() => setShowCommunity(false)}
            >
              <div className="py-4 flex items-center text-primary transition-colors">
                Community
                <ChevronDown
                  className={`ml-1 w-4 h-4 ${showCommunity && "rotate-180"}`}
                />
              </div>
              {showCommunity && (
                <>
                  <div className="pointingIconContainer absolute top-11 left-1/2 pt-1 w-full -translate-x-1/2">
                    <div className="pointingIcon w-8 h-8 rotate-45 bg-white mx-auto"></div>
                  </div>
                  <div className="absolute top-11 left-1/2 -translate-x-1/2 mt-2 w-60 bg-white rounded-lg shadow-xl p-2">
                    <div className="py-2">
                      <Link
                        to="/"
                        className="block px-4 py-4 text-primary transition-shadow duration-300 rounded-lg my-1 hover:bg-background/50"
                      >
                        <span className="flex items-center gap-4">
                          <MessageCircle className="w-6 h-6" />
                          <div>
                            <h3 className="text-md font-semibold text-primary">
                              Forum
                            </h3>
                          </div>
                        </span>
                      </Link>

                      <Link
                        to="/"
                        className="block px-4 py-4 text-primary transition-shadow duration-300 rounded-lg my-1 hover:bg-background/50"
                      >
                        <span className="flex items-center gap-4">
                          <Edit className="w-6 h-6" />
                          <div>
                            <h3 className="text-md font-semibold text-primary">
                              Blog
                            </h3>
                          </div>
                        </span>
                      </Link>

                      <Link
                        to="/"
                        className="block px-4 py-4 text-primary hover:bg-background/50 transition-shadow duration-300 rounded-lg"
                      >
                        <span className="flex items-center gap-4">
                          <Calendar className="w-6 h-6" />
                          <div>
                            <h3 className="text-lg font-semibold text-primary">
                              Events
                            </h3>
                          </div>
                        </span>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Link
              to="/"
              className="text-primary relative transition-colors group py-2"
            >
              Plans & Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/"
              className="text-primary relative transition-colors group py-2"
            >
              Demo
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Button variant={"default"} className="text-md">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
          <div className="md:hidden bg-background/90 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
              >
                Apps & Features
              </Link>
              <button
                onClick={() => setShowCommunity(!showCommunity)}
                className="flex items-center w-full px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
              >
                Community
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {showCommunity && (
                <div className="pl-4">
                  <Link
                    to="/"
                    className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
                  >
                    Forum
                  </Link>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
                  >
                    Events
                  </Link>
                </div>
              )}
              <Link
                to="/"
                className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
              >
                Plans & Pricing
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
              >
                Demo
              </Link>
              <Link
                to="/"
                className="block px-3 py-2 text-primary hover:bg-white/10 rounded-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
