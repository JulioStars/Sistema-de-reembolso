import { useActionState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"

import {z, ZodError} from "zod"
import { api } from "../services/api"
import { useAuth } from "../hooks/useAuth"
import { AxiosError } from "axios"

const signInSchema = z.object({
    email: z.string().email({message: " E-mail é inválido"}),
    password: z.string().trim().min(1, {message: "Informe a senha"})
})

export function SignIn() {
    const [state, formAction, isLoading] = useActionState(onAction, null) // Primeira posição: Estado atual; Segunda posição: Ação disparada pelo formulário; Terceira posição: Fica verdadeira em quanto a função nao terminar/retornar / useActionState: parametro 1: Qual função a ser executada; parametro 2: Conteúdo inicial do estado
    const auth = useAuth()

    async function onAction(_: any,formData: FormData) {
        try {
            const data = signInSchema.parse({
                email: formData.get("email"),
                password: formData.get("password")
            })

            const response = await api.post("/sessions", data)
            auth.save(response.data)
        } catch (error) {
            console.log(error)

            if(error instanceof ZodError) {
                return {message: error.issues[0].message}
            }

            if(error instanceof AxiosError) {
                return {message: error.response?.data.message}
            }

            return {message: "Não foi possível entrar!"}
        }
    }

    return (
        <form action={formAction} className="w-full flex flex-col gap-4">
            <Input name="email" required legend="E-mail" type="email" placeholder="seu@email.com" />
            <Input name="password" required legend="Senha" type="password" placeholder="123456" />
            <p className="text-sm text-red-600 text-center my-4 font-medium">
                {state?.message}
            </p>

            <Button type="submit" disabled={isLoading}>Entrar</Button>

            <a href="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</a>
        </form>
    )
}