import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/Footer";
import Footer from "./components/Footer";
import NewNavbar from "./components/NewNavbar";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Catalogue from "./pages/Catalogue";

// app.js is the place where i drop components that i want to see permanently
// with switch i can change pages
function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <NewNavbar />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/:params' component={Catalogue} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
