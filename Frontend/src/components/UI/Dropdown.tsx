import { cn } from "@/lib/utils";
import React from "react";
export function DropDownItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "block px-4 py-4 transition-shadow duration-300 rounded-lg my-1 hover:bg-background/50",
        className
      )}
    >{children}</div>
  );
}
interface DropDownProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  color?: string;
}
function Dropdown({
  children,
  className,
  backgroundColor,
  color,
}: DropDownProps) {
  return (
    <div className={cn("w-60", className)}>
      <div className="dropDownContainer relative">
      <div className="pointingIconContainer absolute left-1/2 -translate-x-1/2 w-full -top-2 ">
        <div
          className={"pointingIcon w-8 h-8 rotate-45 bg-white mx-auto mt-1.5"}
          style={{ backgroundColor, color }}
        ></div>
      </div>
      <div
        className="w-full bg-white rounded-lg shadow-xl p-2 relative z-10"
        style={{ backgroundColor }}
      >
        <div className="py-2" style={{ color }}>
          {children}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Dropdown;
