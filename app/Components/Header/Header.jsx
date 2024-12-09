import Image from "next/image";
import Link from "next/link";
import Search from "../Icons/Search";
import LanguageConverter from "./LanguageConverter";
import Logo from "./Logo";

export default function Header({ dict }) {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <Logo />
        <nav className=" hidden md:flex space-x-6">
          <Link href="#" className="text-color-purple font-semibold">
            {dict.topStreaming}
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            {dict.games}
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            {dict.teams}
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder={dict.search}
            className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
          />
          <Search />
        </div>
        <LanguageConverter />
        <Image
          width={40}
          height={40}
          src="/assets/avatar.png"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
