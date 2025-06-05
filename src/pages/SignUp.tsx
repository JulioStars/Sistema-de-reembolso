import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"

import {z, ZodError} from "zod"
import {AxiosError} from "axios"
import { api } from "../services/api"
import { useNavigate } from "react-router"

const signUpSchema = z.object({
    name: z.string().trim().min(2, {message: "Nome precisa ter mais de 2 digitos"}),
    email: z.string().email({message: "E-mail inválido"}),
    password: z.string().min(6, {message: "Senha precisa ter mais de 6 digitos"}),
    passwordConfirm: z.string({message: "Confirme a senha"})
}).refine((data) => data.password === data.passwordConfirm, {
    message: "As senhas não são iguais",
    path: ["passwordConfirm"]
})

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()

        try {
            setIsLoading(true)

            const data = signUpSchema.parse({name, email, password, passwordConfirm})

            await api.post("/users", data)

            if(confirm("Cadastrado com sucesso. Deseja ir para tela de 'entrar' ?")) {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            if(error instanceof ZodError) {
                return alert(error.issues[0].message)
            }

            if(error instanceof AxiosError) {
                return alert(error.response?.data.message) // Erro na api. services/api
            }

            alert("Não foi possível cadastrar!")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <Input required legend="Nome" onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
            <Input required legend="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" />
            <Input required legend="Senha" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="123456" />
            <Input required legend="Confirmar a senha" type="password" onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="123456" />

            <Button type="submit" disabled={isLoading}>Cadastrar</Button>

            <a href="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Já tenho uma conta</a>
        </form>
    )
}