import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <nav>
          <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
          <a href="#" className="mx-2 hover:underline">Terms of Service</a>
          <a href="#" className="mx-2 hover:underline">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;