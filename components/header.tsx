"use client";
import { navbarData } from "@/constants";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logs } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className="border-b border-b-hoverColor/10 bg-bodyColor text-white/80 sticky top-0 z-50">
      <Container className="flex items-center justify-between py-5">
        <Logo title="Assadaldin" subtitle="." />
        <div className="hidden md:inline-flex items-center gap-7 tex-sm uppercase tracking-wide font-medium">
          {navbarData?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
                pathname === item?.href && "text-hoverColor"
              }`}
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute bottom-0 left-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.href
                    ? "translate-x-0"
                    : "-translate-x-[105%]"
                }`}
              />
            </Link>
          ))}
          <Link
            href={"/Assadaldin1.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect"
          >
            Hire me
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect"
          onClick={toggleSidebar}
        >
          <Logs />
        </button>
      </Container>
      {isSidebarOpen && (
        <div className="md:hidden">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            pathname={pathname}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
