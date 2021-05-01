import './App.css';
import {useState} from 'react'
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main"
import Continent from "./pages/Continent"
import Country from "./pages/Country"
import Passport from "./pages/Passport"
import Nav from "./components/Nav"
function App() {

const [passport, setPassport] = useState([])

const handlePassport = (country) => {
  console.log([...passport, country])
  setPassport([...passport, country])
}



  return (
    <div className="App">
      <Nav/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/continent/:symbol"
            render={
              (routerProps)=> <Continent {...routerProps}/>

            }
            />
          <Route path="/country/:name"
            render={
              (routerProps) => <Country {...routerProps}
              handlePassport={handlePassport}/>
            }
            />
          <Route path="/passport">
            <Passport
            visited={passport}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
