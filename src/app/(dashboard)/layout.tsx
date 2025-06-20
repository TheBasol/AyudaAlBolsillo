import { Sidebar } from "@/components";

export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="bg-slate-200 text-black  w-full">

      <Sidebar />
      
      { children }

    </main>
  );
}