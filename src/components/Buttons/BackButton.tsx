'use client'
import { useRouter } from "next/navigation"

export const BackButton = () => {

    const router = useRouter()

    return (
        <div onClick={() => router.back()} className="absolute right-4 top-5 bg-sidebarGreen cursor-pointer rounded-md px-3" >
            <i className="bi bi-arrow-left text-white fs-3"></i>
        </div>
    )
}