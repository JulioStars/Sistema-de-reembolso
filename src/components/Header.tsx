import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"
import { useAuth } from "../hooks/useAuth"

export function Header() {
    const auth = useAuth()
    const user = auth.session?.user.name

    return (
        <header className="w-full flex justify-between">
            <img src={logoSvg} alt="Logo" className="my-8" />

            <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-200">{`Olá, ${user}`}</span>

                <img src={logoutSvg} onClick={() => auth.remove()} alt="Ícone de sair" className="my-8 cursor-pointer hover:opacity-75 transition ease-linear" />
            </div>
        </header>
    )
}