
import styles from '../../styles/Home.module.css'

export default function AppLayout ({children}){

    return(<>
    
    <main className={styles.main}>
        {children}
    </main>
    
    </>)
}