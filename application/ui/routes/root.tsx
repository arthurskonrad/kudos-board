import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

function Layout() {
  return (
    <div>
      <Header />
      <div id="details">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
