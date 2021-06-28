import Header from "../Header/Header";
import "./app.css";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="page">
      <Route path="/">
        <Header></Header>

        <Main></Main>
        <Footer></Footer>
      </Route>
    </div>
  );
}

export default App;
