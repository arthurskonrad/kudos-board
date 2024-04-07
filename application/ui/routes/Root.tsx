import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

function Root() {
  return (
    <>
      <Header />

      <main id="details">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Root;
