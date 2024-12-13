import { useOutsideClick } from "@/hooks/use-outside-click";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}
const Sidebar = ({ isOpen, onClose, pathname }: Props) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodyColor border-l border-l-hoverColor/50 shadow-xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
