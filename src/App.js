import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/MainPage";
import ArticlePage from "./pages/ArticlePage";
import Header from "./components/Shared/Header";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/article/:name/:id" component={ArticlePage}/>
            </Switch>
        </Router>

    );
}


export default App;



