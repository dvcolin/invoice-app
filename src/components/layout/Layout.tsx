import "../../scss/components/layout/Layout.scss";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
