import InputControl from "../../components/InputControl"
import Link from 'next/link'
import AppLayout from "../../components/appLayout"

export default function Login(){
    return (
    <>
        <AppLayout>
        <h1>esto es Login</h1>
        <InputControl></InputControl><br/>
        <InputControl></InputControl>
        <Link href="/">
            volver
        </Link>
        </AppLayout>
    </>)
}