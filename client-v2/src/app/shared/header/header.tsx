
import styles from './header.module.css' 
import MGLogo from '../../../assets/Logo.png'
import MenuHeader from '../../../assets/menu.png'

export default function Header() {
    



    return ( 
        <>
        <header> 
            <div className={styles["header-mg-logo"]}>
                <img src={MGLogo} alt="MGLogo" height="40px" />
            </div>     
            <div className={styles["Header-menu-button"]}>
                <img src={MenuHeader} alt="MenuHeader" />
            </div>        
        </header>
        <header>
            
        </header>
        </>
    )
}


