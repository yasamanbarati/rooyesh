// app/components/Header.tsx
import Link from "next/link";
import { Search, User, School } from "lucide-react";
import { CustomButton } from "../ui/button";
import Image from "next/image";

const navItems = [
  { label: "رویدادها", href: "/events" },
  { label: "دوره‌ها", href: "/courses" },
  { label: "جلسات مشاوره", href: "/consulting" },
  { label: "تعرفه‌ها", href: "/pricing" },
  { label: "راهنما", href: "/guide" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-surface/80 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt={"logo"} width={100} height={48} />
          <div className="flex flex-col">
            <h1 className="font-black text-2xl leading-none tracking-tight text-indigo-700">
              محیط<span className="text-teal-500">.آنلاین</span>
            </h1>
          </div>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative py-2 text-medium font-bold text-gray-800 transition-colors hover:text-indigo-700 group"
            >
              {item.label}
              <span className="absolute bottom-0 right-0 h-0.5 w-0 rounded-full bg-teal-500 transition-all duration-300 ease-in-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search Icon */}
          <CustomButton
            variant="ghost"
            size="icon"
            className="hidden lg:flex justify-center"
            aria-label="جستجو"
          >
            <Search className="h-5 w-5" />
          </CustomButton>

          {/* Separator */}
          <div className="hidden lg:block h-6 w-px bg-gray-200" />
          <CustomButton
            variant="primary"
            className="flex items-center gap-2"
            color="text-indigo-700"
          >
            <User className="h-5 w-5" />
            <span>ورود / ثبت‌نام</span>
          </CustomButton>
        </div>
      </div>
    </header>
  );
}
