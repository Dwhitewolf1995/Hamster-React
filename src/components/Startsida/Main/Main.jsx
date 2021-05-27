import s from './Main.module.css'
const Main = () => {
    return (
        <div className={s.mainContainer}>
         <div className={s.info}>
             <div className={s.first}>Welcome to battle of champions HAMSTER WARS.</div>
           
             <div className={s.second}> Choose the right hamster and it winner </div>
         </div>
        </div>
    )
}

export default Main;