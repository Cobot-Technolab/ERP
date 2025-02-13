import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Navbar />
    <div className="mainPage pt-20">{children}</div>
    <Footer />
  </div>
);

export default Layout;
