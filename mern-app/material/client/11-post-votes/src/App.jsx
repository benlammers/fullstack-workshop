import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import Search from "./pages/Search/Search";

import "antd/dist/antd.css";
import "./styles/main.scss";
import "./App.scss";

const App = () => {
   return (
      <div className='app'>
         <Router>
            <Header />
            <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/post' component={Post} />
               <Route path='/search' component={Search} />
            </Switch>
            <Footer />
         </Router>
      </div>
   );
};

export default App;
