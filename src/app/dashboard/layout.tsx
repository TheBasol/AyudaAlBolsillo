import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { Sidebar } from "@/components";

const menuItems = [
  {
    icons: <IoHomeOutline size={30} />,
    url: 'presupuesto',
    label: 'Presupuesto'
  },
  {
    icons: <FaProductHunt size={30} />,
    url: 'calcular_interes',
    label: 'Calcular interes'
  },
  {
    icons: <CiSettings size={30} />,
    url: 'Settings',
    label: 'Setting'
  }
]


export default function DashboardLayout({children}: { children :React.ReactNode; }) {

  
    return (
      <div className="bg-slate-200 font-[Poppins] overflow-x-auto w-full">
        
        <Sidebar></Sidebar>

        {children}
          
      </div>
      
    );

  }
  