import Link from "next/link";

interface Props{
    path: string,
    title: string,
    subTitle: string,
    icon: JSX.Element,
    openSideBar(): void
}

export const SidebarMenuItem =(item:Props) => {

    return (
        <>
            <Link onClick={item.openSideBar} href={item.path} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-500 text-white">
              {item.icon}
              <span className="text-[15px] ml-4 text-gray-200">{item.title}</span>
            </Link>
        </>
    );
  }