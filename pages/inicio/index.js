import AppLayout from "../../components/appLayout"
import Link from 'next/link'

export default function Inicio({userName}){
    
    return (
        <>
            <AppLayout>
                
                <h1>esto es Inicio</h1>
                <h1>Usuario {userName}</h1>
                <Link href="/">
                    volver
                </Link>
            </AppLayout>
        </>
        )
}

//getInitialProps solo funciona en tipos de paginas y no en componentes
Inicio.getInitialProps = async () =>{
    return fetch('../api/hello')
        .then(res => res.json()) 
        .then(response => { 
            //console.log(response)
            const {userName} = response
            return {userName}
        })
}