
import styles from './home.module.css';


export default function Home(){
    return (
        <>
            <section className={styles["home-section-init"]}>
                <div className={styles["home-title-init"]}>
                    <h1>Magician Ground</h1>
                    <h3>El futuro de la agromonia</h3>   
                </div> 
            </section>
            <section className={styles["who-we-are"]} >
                <div className=''>
                    <h1>¿Quienes somos?</h1>
                    <div className={styles["links-who-we-are"]}>
                        <a href=''>
                             Conoser nuestro producto mas reciente  
                             <div className={styles["flecha-link"]}>
                                &rarr;
                             </div>
                        </a>
                    </div> 
                    <div className={styles["links-who-we-are"]}>
                        <a href=''>
                            Ver Mas sobre quienes somos
                            <div className={styles["flecha-link"]}>
                                &rarr;
                            </div>
                        </a>
                    </div> 
                </div>
                <div>
                    <p>
                        Somos una empresa dedicada al desarrollo de innovaciones tecnológicas enfocadas en el sector agrícola.
                    </p>
                </div>
            </section>
            <section className={styles["our-objetive"]}>
                  
            </section>
        </>
    );
}
