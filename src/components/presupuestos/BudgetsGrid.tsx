'use client';
import { deleteBudget, toggleFavorite } from "@/utils";
import Link from "next/link"
import { useRouter } from "next/navigation";


interface GridInterface {
    id: string;
    nombre: string;
    isFavorite: boolean;
}

interface Props {
    budgets: GridInterface[];
}

export const BudgetsGrid = ({ budgets }: Props) => {

    const router = useRouter();

    const clickDelete = (budget_id:string) => {
        deleteBudget(budget_id)
        router.refresh();
    }

    const clickToggleFavorite = (budget_id:string, isFavorite:boolean) => {
        toggleFavorite(budget_id, isFavorite)   
        router.refresh();
    }

    return (
        <div className="space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {budgets.map((budget) => (
                    <div key={budget.id} className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">

                        {/* Borrar Budget */}
                        <div onClick={() => clickDelete(budget.id)} className="absolute top-3 left-3 z-5 cursor-pointer">
                            <button className="w-8 h-8 bg-red-100 rounded-full shadow-md flex items-center justify-center ">
                                <i className="bi bi-trash3-fill text-red-500 text-sm"></i>
                            </button>
                        </div>

                        {/* Badge de favorito */}
                        <div onClick={() => clickToggleFavorite(budget.id, budget.isFavorite)} className="absolute top-3 right-3 z-5 cursor-pointer">
                            <div className={`w-8 h-8 ${budget.isFavorite ? 'bg-yellow-100':'bg-gray-100'} rounded-full flex items-center justify-center`}>
                                <i className={`bi bi-star-fill ${budget.isFavorite ? 'text-yellow-500': 'text-gray-300'} text-sm`}></i>
                            </div>

                        </div>


                        <Link href={`/presupuesto/${budget.nombre}_${budget.id}`} className="block mt-6 py-3 px-5">

                                <div className="flex mt-3 justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                                        {budget.nombre}
                                    </h3>

                                    <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform duration-200"></i>
                     
                                </div>

                        </Link>

                    </div>
                ))}
            </div>

        </div>
    );
}