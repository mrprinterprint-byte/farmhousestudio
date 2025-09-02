"use client";

import { Search, User, ShoppingCart } from "lucide-react";

interface IconButtonsProps {
  onSearch?: () => void;
  onProfile?: () => void;
  onCart?: () => void;
  className?: string; // for responsive hiding/showing
}

export default function IconButtons({
  onSearch,
  onProfile,
  onCart,
  className,
}: IconButtonsProps) {
  return (
    <div className={`flex gap-6 items-center ${className}`}>
      <button onClick={onSearch}>
        <Search className="w-5 h-5 cursor-pointer" />
      </button>
      <button onClick={onProfile}>
        <User className="w-5 h-5 cursor-pointer" />
      </button>
      <button onClick={onCart}>
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
      </button>
    </div>
  );
}
