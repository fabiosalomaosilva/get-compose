'use client';
import { signIn, useSession } from 'next-auth/react';
import { Save, Github } from 'lucide-react';
import { supabase } from '@/config/supabase';

export default function LoginPage() {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Carregando...</p>;

    async function  save(){
        console.log('Salvando')
        const user = {teste: "Novo usuário", email: session?.user?.email};
        console.log(user)
        const result = await supabase.from('testes').insert(user);
        console.log(result)
        console.log('Salvou')
    }
    

    return (
        <div>
            {
                session && status === "authenticated" && (
                    <p>Você está logado como {session.user?.email}.</p>
                )
            }
            <h1>Login</h1>
            <button onClick={() => signIn('github')}
            className="py-3 px-4 b-2 bg-slate-700 rounded-md flex flex-row gap-2">
                <Github />
                Login com GitHub</button>
                <br>
                </br>
                <button onClick={save}
                    className="py-3 px-4 b-2 bg-teal-500 rounded-md flex flex-row gap-2">
                <Save />
                Salvar</button>
        </div>


    );
};