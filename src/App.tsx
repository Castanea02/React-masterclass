import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/tv">
          <Tv></Tv>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        <Route path={["/", "/movies/:movieId"]}>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
