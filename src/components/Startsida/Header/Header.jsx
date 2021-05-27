import s from './Header.module.css'
import Logo from './hamsterLogo.png'

const Header = () => {
    return (
        <div className={s.header}>
            

            <div className={s.logoContainer}>
            <img src={Logo} alt="hamsterLogo" className={s.logoImg} />
            <div className={s.logoH}>HAMSTER</div>
            <div className={s.logoW}>WARS</div>
            </div>
            
             
                     
        
        </div>
    )
}

export default Header;