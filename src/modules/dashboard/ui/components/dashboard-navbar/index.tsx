import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import UserButton from "@/features/auth/components/user-button";
import { RiCameraLensFill } from "react-icons/ri";

export const DashboardNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
      <div className="flex items-center gap-4 w-full">
        {/* Menu & Logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/dashboard">
            <div className="flex items-center gap-1 p-4">
              <RiCameraLensFill size={32} />
              <p className="text-xl font-semibold tracking-tight">Studio</p>
            </div>
          </Link>
        </div>

        {/* Space */}
        <div className="flex-1" />

        {/* Profile & Auth */}
        <div className="flex-shrink-0 items-center flex gap-4">
          <UserButton />
        </div>
      </div>
    </nav>
  );
};
