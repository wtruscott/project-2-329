import './App.css';
import {useState} from 'react'
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main"
import Continent from "./pages/Continent"
import Country from "./pages/Country"
import Passport from "./pages/Passport"
import Future from "./pages/FutureDestinations"
import Nav from "./components/Nav"
import Drop from "./components/DropNav"
import Footer from "./components/Footer"

function App() {

const [passport, setPassport] = useState([])

const handlePassport = (country) => {
  console.log([...passport, country])
  if(passport.includes(country) !== true) {
    setPassport([...passport, country])
  }
}

const [future, setFuture] = useState([])

const handleFuture = (country) => {
  console.log([...future, country])
  if(future.includes(country) !== true) {
    setFuture([...future, country])
  }
}

const [visable, setVisable] = useState(false)

const handleVisable = () => {
  if(visable===true){
    setVisable(false)
  } else {
    setVisable(true)
  }
  }

  return (
    <div className="App">
      <Nav
      handleVisable={handleVisable}/>
      <Drop
      visable={visable}/>
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
              handlePassport={handlePassport}
              handleFuture={handleFuture}/>
            }
            />
          <Route path="/passport">
            <Passport
            visited={passport}/>
          </Route>
          <Route path="/futuredestinations">
            <Future
            wish={future}/>
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
