"use client";

import { Search, User, ShoppingCart } from "lucide-react";
import Link from "next/link";
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
      <button>
        <Link href={"/cart"}>
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </Link>
      </button>
    </div>
  );
}
