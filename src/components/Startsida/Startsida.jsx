import Header from "./Header/Header"
import Button from "./Button/Button"
// import Main from "./Main/Main"
import Nav from "./Nav/Nav"
import Tävla from '../Tävla/Tävla'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './Startsida.css'

const Info = () => {
    return (
        
        <h1>Info page</h1>
    )
}


const Startsida = () => {
    return (
    <Router>
        <div className="wrapper">
            <Header />
            <Nav />
            {/* <Main /> */}
            {/* <Button /> */}
            <Switch>
            <Route path="/info" exact component={Info}/>
            <Route path="/tävla"  component={Tävla} />
            </Switch>
            
        </div>
        </Router>
    )
}

export default Startsida;