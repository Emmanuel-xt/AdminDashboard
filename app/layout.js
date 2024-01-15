import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";

export const metadata = {
  title: "admin dashboard",
  description: "test project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-slate-100">
        <Navbar />
        <div className=" flex">
          <Sidenav />

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
