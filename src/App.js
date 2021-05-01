import './App.css';
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main"
import Continent from "./pages/Continent"
import Country from "./pages/Country"
import Passport from "./pages/Passport"
import Nav from "./components/Nav"
function App() {
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
              (routerProps) => <Country {...routerProps}/>
            }
            />
          <Route path="/passport">
            <Passport/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
