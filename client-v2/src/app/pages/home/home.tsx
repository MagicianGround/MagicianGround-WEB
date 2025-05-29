
import styles from './home.module.css';


export default function Home(){
    return (
        <>
            <section className={styles["home-section-init"]}>
                <div className={styles["home-title-init"]}>
                    <h1>Magician Ground</h1>
                    <h3>El Futuro de la agromonia</h3>   
                </div> 
            </section>
            <div>
                <h1 className={styles[""]}></h1>
            </div>

        </>

    );
}