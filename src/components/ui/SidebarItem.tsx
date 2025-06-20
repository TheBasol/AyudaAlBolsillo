import Link from "next/link";
import { JSX } from "react";

interface Props{
    path: string,
    title: string,
    subTitle: string,
    icon: JSX.Element,
    toggleSidebar(): void
}

export const SidebarItem =(item:Props) => {

    return (
        <>
            <Link onClick={item.toggleSidebar} href={item.path} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-500 text-white">
              {item.icon}
              <span className="text-[15px] ml-4 text-gray-200">{item.title}</span>
            </Link>
        </>
    );
  }